'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function PhilosophySection() {
  // 원본과 동일한 fadeInUp 애니메이션 variants
  const fadeInUpVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const
      }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }
  const [currentBg, setCurrentBg] = useState(0)
  
  // 배경 이미지들 - 사용자 제공 2개 이미지
  const backgroundImages = [
    {
      src: "/images/75a1183941cc2.png", // 첫 번째 매장 이미지
      alt: "황금쭈꾸미집 매장 모습 1"
    },
    {
      src: "/images/10207519dd460.png", // 두 번째 매장 이미지
      alt: "황금쭈꾸미집 매장 모습 2"
    }
  ]

  // 자동 배경 전환 효과 (5초마다)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [backgroundImages.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="philosophy">
      {/* 배경 이미지 슬라이드 */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBg ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        {/* 어두운 오버레이로 텍스트 가독성 향상 */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* 콘텐츠 - stagger 애니메이션 */}
      <motion.div 
        className="relative z-10 text-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px", amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto">
          {/* 메인 텍스트 - 원본과 동일한 흰색 텍스트, fadeInUp 효과 */}
          <motion.div className="mb-12" variants={fadeInUpVariants}>
            <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 sm:mb-6 text-white">
              백반집은 밥이 맛있어야 하고,
            </h4>
            <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white mb-6 sm:mb-8">
              쭈꾸미집은 쭈꾸미가 맛있어야 한다.
            </h4>
            
            {/* 브랜드 로고 - 원본과 동일한 위치와 크기, fadeInUp 효과 */}
            <motion.div 
              className="flex items-center justify-center mb-12"
              variants={fadeInUpVariants}
            >
              <Image
                src="/images/b8ea0f0bb3662.png"
                alt="황금쭈꾸미집 로고"
                width={253}
                height={200}
                className="max-w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* 배경 전환 인디케이터 - fadeInUp 효과 */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px", amount: 0.3 }}
        variants={fadeInUpVariants}
      >
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBg(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentBg 
                ? 'bg-yellow-400 scale-110' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </motion.div>
    </section>
  )
}