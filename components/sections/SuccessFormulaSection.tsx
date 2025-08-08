'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function SuccessFormulaSection() {
  // 원본과 동일한 애니메이션 variants
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
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
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
        staggerChildren: 0.2
      }
    }
  }
  return (
    <section className="py-20 bg-gray-50" id="success-formula">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* 섹션 타이틀 - fadeInUp 효과 */}
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px", amount: 0.3 }}
            variants={fadeInUpVariants}
          >
            <p className="text-lg text-gray-600 mb-2">성공 창업의 황금오션</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              황금쭈꾸미집의 <span className="text-red-600">남다른 수익비결</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
              전략적인 메뉴 하나부터 효율적인 매장 운영까지,
            </p>
            <p className="text-gray-800 font-semibold max-w-3xl mx-auto leading-relaxed">
              남들과 똑같은 쭈꾸미 전문점이라면 시작조차 하지 않았습니다.
            </p>
          </motion.div>

          {/* 4개 카드 그리드 - 순차적 zoomIn 효과 */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px", amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* 카드 01 */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              variants={zoomInVariants}
            >
              <div className="h-64">
                <Image
                  src="/images/8cd2e52061e29.png"
                  alt="초간단 5분 레시피 연구 완성"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* 카드 02 */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              variants={zoomInVariants}
            >
              <div className="h-64">
                <Image
                  src="/images/6b020c3682153.png"
                  alt="재료 비용 절감을 위한 황금쭈꾸미 물류유통시스템"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* 카드 03 */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              variants={zoomInVariants}
            >
              <div className="h-64">
                <Image
                  src="/images/d3c6a7e75581f.png"
                  alt="황금쭈꾸미의 품질 확보"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* 카드 04 */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              variants={zoomInVariants}
            >
              <div className="h-64">
                <Image
                  src="/images/6ac9ab1ee5226.png"
                  alt="성공창업의 핵심요소 황금쭈꾸미집 본사지원"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}