import type { RefObject } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function usePortfolioAnimations(root: RefObject<HTMLDivElement | null>) {
  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .from('.nav-inner', { y: -30, opacity: 0, duration: 0.8 })
      .from('.eyebrow > *', { y: 18, opacity: 0, stagger: 0.08, duration: 0.65 }, '-=.35')
      .from('.hero-line > span', { yPercent: 115, rotate: 2, stagger: 0.1, duration: 1.05 }, '-=.4')
      .from('.hero-bottom > *', { y: 28, opacity: 0, stagger: 0.1, duration: 0.75 }, '-=.55')

    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => gsap.from(element, { y: 55, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } }))
    gsap.utils.toArray<HTMLElement>('.count').forEach((element) => {
      const counter = { value: 0 }
      gsap.to(counter, { value: Number(element.dataset.value), duration: 1.8, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 85%', once: true }, onUpdate: () => { element.textContent = Math.round(counter.value).toString() } })
    })
    gsap.utils.toArray<HTMLElement>('.home-parallax .parallax-section, .home-parallax-footer').forEach((section) => {
      const layer = section.firstElementChild
      if (!(layer instanceof HTMLElement)) return

      gsap.to(layer, {
        y: () => {
          const offset = Number(section.dataset.parallaxOffset ?? 48)
          return -offset * (window.innerWidth < 640 ? 0.55 : 1)
        },
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.1,
          invalidateOnRefresh: true,
        },
      })
    })
    const marquee = document.querySelector<HTMLElement>('.ticker')
    const marqueeTween = gsap.to('.marquee-track', { xPercent: -50, duration: 24, ease: 'none', repeat: -1 })
    const pauseMarquee = () => marqueeTween.pause()
    const resumeMarquee = () => marqueeTween.play()

    marquee?.addEventListener('mouseenter', pauseMarquee)
    marquee?.addEventListener('mouseleave', resumeMarquee)

    const cleanups = gsap.utils.toArray<HTMLElement>('.magnetic').map((button) => {
      const move = (event: MouseEvent) => {
        const box = button.getBoundingClientRect()
        gsap.to(button, { x: (event.clientX - box.left - box.width / 2) * .2, y: (event.clientY - box.top - box.height / 2) * .2, duration: .35 })
      }
      const leave = () => gsap.to(button, { x: 0, y: 0, duration: .6, ease: 'elastic.out(1,.35)' })
      button.addEventListener('mousemove', move)
      button.addEventListener('mouseleave', leave)
      return () => { button.removeEventListener('mousemove', move); button.removeEventListener('mouseleave', leave) }
    })
    return () => {
      marquee?.removeEventListener('mouseenter', pauseMarquee)
      marquee?.removeEventListener('mouseleave', resumeMarquee)
      cleanups.forEach(cleanup => cleanup())
    }
  }, { scope: root })
}
