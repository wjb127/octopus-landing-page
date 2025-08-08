'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProfitAnalysisSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // 더 빠른 stagger 효과
        delayChildren: 0.1
      }
    }
  }

  // 추가적인 fadeInUp 효과
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

  const zoomInVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <section className="relative py-20 overflow-hidden" id="profit-analysis">
      {/* 배경 이미지 - 매장 내부 실제 모습 */}
      <div className="absolute inset-0">
        <Image
          src="/images/store-cctv.jpg"
          alt="황금쭈꾸미집 매장 내부 실제 모습"
          fill
          className="object-cover"
          priority
        />
        {/* 어두운 오버레이로 텍스트 가독성 확보 */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* 콘텐츠 */}
      <motion.div 
        className="relative z-10 container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* 섹션 타이틀 */}
          <motion.div 
            className="text-center mb-16"
            variants={zoomInVariants}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              황금비율 수익설계
            </h2>
          </motion.div>

          {/* 메인 콘텐츠 그리드 - PC 버전 */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            {/* 좌측 - 수익률 그래프 이미지 */}
            <motion.div 
              className="flex justify-center"
              variants={zoomInVariants}
            >
              <Image
                src="/images/4ce4e653b127c.png"
                alt="황금쭈꾸미집 수익률 그래프 이미지"
                width={610}
                height={490}
                className="w-full max-w-md h-auto"
              />
            </motion.div>

            {/* 우측 - 수익률 표 이미지 */}
            <motion.div 
              className="flex justify-center lg:justify-start"
              variants={zoomInVariants}
              transition={{ delay: 0.2 }}
            >
              <Image
                src="/images/eed8c460a0b91.png"
                alt="황금쭈꾸미집 수익률 표 이미지"
                width={433}
                height={551}
                className="w-full max-w-sm h-auto"
              />
            </motion.div>
          </div>

          {/* 모바일 버전 이미지들 - 순차적 fadeInUp 효과 */}
          <div className="lg:hidden space-y-8">
            <motion.div 
              className="text-center"
              variants={fadeInUpVariants}
            >
              <Image
                src="/images/95797d0fbf6f4.png"
                alt="황금쭈꾸미집 수익률 그래프 이미지 (모바일)"
                width={400}
                height={300}
                className="w-full max-w-sm mx-auto h-auto"
              />
            </motion.div>
            <motion.div 
              className="text-center"
              variants={fadeInUpVariants}
            >
              <Image
                src="/images/f224f7918dbdd.png"
                alt="황금쭈꾸미집 수익률 영수증 이미지 (모바일)"
                width={400}
                height={300}
                className="w-full max-w-sm mx-auto h-auto"
              />
            </motion.div>
          </div>

          {/* 하단 주의사항 - fadeInUp 효과 */}
          <motion.div 
            className="text-center mt-12"
            variants={fadeInUpVariants}
          >
            <p className="text-white/70 text-sm">
              * 매장 상황에 따라 매출액 및 영업이익은 상이할 수 있습니다.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}