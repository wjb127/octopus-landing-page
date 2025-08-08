'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const reviewData = [
  {
    id: 1,
    date: '방문일 2024. 1. 21(일)',
    author: '류○○',
    rating: 5,
    location: '영수증',
    content: '쭈꾸미가 신선하고 맛있네요! 특히 소스가 일품이에요. 밥도 잘 어울리고 재료들도 신선해서 좋습니다.',
    images: ['/images/66844411a97fd.png', '/images/55becbe07029a.png'],
    status: '경험 정보 상세보기 >'
  },
  {
    id: 2, 
    date: '방문일 2024. 3. 20(수)',
    author: '구○○○',
    rating: 5,
    location: '영수증',
    content: '진짜 맛있습니다! 쭈꾸미가 부드럽고 양념이 정말 맛있어요. 직원분들도 친절하시고 매장도 깔끔해요.',
    images: ['/images/3738797c89abf.png'],
    status: '경험 정보 상세보기 >'
  },
  {
    id: 3,
    date: '방문일 2024. 4. 24(수)',
    author: 'bh****',
    rating: 5, 
    location: '영수증',
    content: '쭈꾸미 진짜 신선하고 맛있어요! 너무 짜지도 않고 딱 적당해요. 사장님도 친절하시고 분위기도 좋아요.',
    images: ['/images/477423a148654.png', '/images/4df5986002eb2.png'],
    status: '경험 정보 상세보기 >'
  },
  {
    id: 4,
    date: '방문일 2024. 3. 24(일)',
    author: '최***',
    rating: 5,
    location: '경재',
    content: '진짜 맛있어요! 쭈꾸미가 이렇게 맛있을 줄 몰랐어요. 양도 많고 가격도 합리적이에요. 또 올게요!',
    images: ['/images/6792784238de7.png'],
    status: '경험 정보 상세보기 >'
  },
  {
    id: 5,
    date: '방문일 2024. 2. 15(목)',
    author: '김○○',
    rating: 5,
    location: '영수증',
    content: '회사 동료들과 점심으로 갔는데 모두 만족했어요! 특히 쭈꾸미 볶음이 정말 맛있었습니다.',
    images: ['/images/78a799ceb2768.png', '/images/e4db0fd5ffbda.png'],
    status: '경험 정보 상세보기 >'
  },
  {
    id: 6,
    date: '방문일 2024. 4. 10(수)',
    author: '박○○',
    rating: 5,
    location: '경재',
    content: '가족과 함께 저녁 먹으러 왔어요. 아이들도 맛있다고 하네요. 깔끔하고 좋습니다!',
    images: ['/images/9ba9bfef6e52d.png'],
    status: '경험 정보 상세보기 >'
  }
]

export default function EducationSection() {
  const [currentOffset, setCurrentOffset] = useState(0)
  
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

  const scaleVariants = {
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
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffset((prev) => {
        const newOffset = prev - 1
        // 한 세트(6개 카드)가 지나가면 리셋
        if (newOffset <= -(cardWidth * reviewData.length)) {
          return 0
        }
        return newOffset
      })
    }, 30) // 더 부드러운 움직임을 위해 30ms로 조정
    
    return () => clearInterval(interval)
  }, [])

  // 카드 너비 (288px + gap 24px)
  const cardWidth = 312
  
  // 무한 반복을 위한 카드 배열 (원본 6개 * 3 = 18개)
  const infiniteReviews = [...reviewData, ...reviewData, ...reviewData]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="education">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <Image
          src="/images/education-background.jpg"
          alt="교육 배경"
          fill
          className="object-cover object-center"
          priority
        />
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* 상단 타이틀 이미지 - fadeInUp 효과 */}
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px", amount: 0.3 }}
            variants={fadeInUpVariants}
          >
            <Image
              src="/images/dbf4ae8e7236a.png"
              alt="오직 본점에서만 6000개 이상, 황금쭈꾸미집 100% 진리뵤!"
              width={800}
              height={165}
              className="mx-auto w-full max-w-2xl h-auto"
            />
          </motion.div>
          
          {/* 연속 회전 캐러셀 - scale 효과 */}
          <motion.div 
            className="relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px", amount: 0.2 }}
            variants={scaleVariants}
          >
            <div className="flex space-x-6" style={{
              transform: `translateX(${currentOffset}px)`,
              transition: 'none', // 부드러운 연속 이동을 위해 transition 제거
              width: `${cardWidth * infiniteReviews.length}px`
            }}>
              {infiniteReviews.map((review, index) => (
                <div
                  key={`${review.id}-${Math.floor(index / reviewData.length)}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0 w-72 transform hover:scale-105 transition-transform duration-300"
                >
                  {/* 카드 헤더 */}
                  <div className="p-4 border-b">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-500">{review.date}</span>
                      <span className="text-xs text-teal-600 bg-teal-50 px-2 py-1 rounded">
                        {review.location}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">{review.author}</span>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-sm">★</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 이미지 영역 */}
                  <div className={`gap-1 p-2 ${review.images.length === 1 ? 'flex justify-center' : 'grid grid-cols-2'}`}>
                    {review.images.map((image, idx) => (
                      <div key={idx} className="relative h-24">
                        <Image
                          src={image}
                          alt={`리뷰 이미지 ${idx + 1}`}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                    ))}
                  </div>

                  {/* 리뷰 내용 */}
                  <div className="p-4">
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                      {review.content}
                    </p>
                    
                    {/* 하단 아이콘들 */}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex space-x-3">
                        <span>👍 도움이 되었어요</span>
                        <span>💬 댓글 달기</span>
                      </div>
                      <button className="text-teal-600 hover:text-teal-800">
                        {review.status}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  )
}