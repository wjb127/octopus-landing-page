'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ClientOnly from '../ui/ClientOnly'

const slides = [
  {
    id: 1,
    background: '/images/08a78b19e86a1.png',
    title: "'쭈편단심'",
    subtitle: '오직 쭈꾸미만을 바라보는 한 조각의 붉은 마음',
    description: '음식의 맛에 진정성을 담은 만큼,\n황금쭈꾸미집의 매출과 수익은 높아지고 있습니다.',
    logo: '/images/b4201f868df71.png'
  },
  {
    id: 2,
    background: '/images/129653b5ca2a2.png',
    title: '언제나 변함 없는 맛으로',
    subtitle: "'특별함'을 선물하는 식당",
    description: '흔한 쭈꾸미 전문점과는 다른 프랜차이즈의 특별함으로\n황금쭈꾸미집에서 성공 창업을 선물하겠습니다.',
    logo: '/images/b4201f868df71.png'
  }
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      <ClientOnly fallback={
        <div className="absolute inset-0">
          <Image
            src={slides[0].background}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 h-full flex items-center">
            <div className="text-left text-white max-w-4xl ml-8 lg:ml-16 px-4 lg:px-8">
              <div className="mb-8">
                <Image
                  src={slides[0].logo}
                  alt="황금쭈꾸미집"
                  width={300}
                  height={120}
                  className=""
                />
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                {slides[0].title}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8">
                {slides[0].subtitle}
              </p>
              {slides[0].description && (
                <p className="text-lg md:text-xl font-light mb-12 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
                  {slides[0].description}
                </p>
              )}
            </div>
          </div>
        </div>
      }>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7 }}
          >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slides[currentSlide].background}
              alt="Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="text-left text-white max-w-4xl ml-8 lg:ml-16 px-4 lg:px-8">
              {/* Logo - 원본과 동일한 fadeInUp 효과 */}
              <motion.div
                className="mb-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              >
                <Image
                  src={slides[currentSlide].logo}
                  alt="황금쭈꾸미집"
                  width={300}
                  height={120}
                  className=""
                />
              </motion.div>

              {/* Title - 원본과 동일한 fadeInUp 효과 */}
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
              >
                {slides[currentSlide].title}
              </motion.h1>

              {/* Subtitle - 원본과 동일한 fadeInUp 효과 */}
              <motion.p
                className="text-xl md:text-2xl lg:text-3xl font-light mb-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              {/* Description - 원본과 동일한 fadeInUp 효과 */}
              {slides[currentSlide].description && (
                <motion.p
                  className="text-lg md:text-xl font-light mb-12 leading-relaxed"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {slides[currentSlide].description}
                </motion.p>
              )}

              {/* Call to Action - 원본과 동일한 fadeInUp 효과 */}
              <motion.div
                className="flex flex-col sm:flex-row items-start gap-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
              >
                <motion.button
                  className="px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-full hover:bg-red-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  창업 문의하기
                </motion.button>
                <motion.div
                  className="flex justify-start"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src="/images/d026e3399a332.png"
                    alt="전국 가맹문의 1577-6615"
                    width={200}
                    height={60}
                    className="h-16 w-auto"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      </ClientOnly>

      {/* Navigation Arrows */}
      <motion.button
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
        onClick={prevSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft size={24} />
      </motion.button>

      <motion.button
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
        onClick={nextSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight size={24} />
      </motion.button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 right-8 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="flex flex-col items-center">
          <div className="w-px h-12 bg-white/50 mb-2" />
          <p className="text-sm opacity-80 writing-mode-vertical">SCROLL</p>
        </div>
      </motion.div>
    </section>
  )
}