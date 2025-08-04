'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function StoreAtmosphereSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // 매장 이미지들
  const storeImages = [
    {
      src: "/images/store-front-day.png", // 주간 매장 외관 이미지
      alt: "황금쭈꾸미집 매장 외관"
    },
    {
      src: "/images/e08a8254ed5ca.png", // 실제 매장 내부 이미지
      alt: "황금쭈꾸미집 매장 내부"
    },
    {
      src: "/images/store-night-exterior.png?v=" + Date.now(), // 야간 매장 외관 이미지 (캐시 방지)
      alt: "황금쭈꾸미집 야간 매장 외관"
    },
    {
      src: "/images/store-interior-2.png", // 매장 내부 다른 각도
      alt: "황금쭈꾸미집 매장 내부 - 테이블과 냉장고"
    }
  ]

  // 자동 슬라이드 효과
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % storeImages.length)
    }, 3000) // 3초마다 변경

    return () => clearInterval(timer)
  }, [storeImages.length])

  return (
    <section className="relative overflow-hidden" id="store-atmosphere">
      {/* 메인 타이틀 섹션 - 황금색 배경 */}
      <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 py-20">
        {/* 좌측 원형 디자인 요소 */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-32 h-32 md:w-48 md:h-48">
          <div className="relative w-full h-full">
            {/* 외곽 점선 원 */}
            <div className="absolute inset-0 border-4 border-dashed border-white/40 rounded-full"></div>
            {/* 내부 실선 원 */}
            <div className="absolute inset-4 border-2 border-solid border-white/60 rounded-full"></div>
            {/* 중앙 원 */}
            <div className="absolute inset-8 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg md:text-xl">100%</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              깔끔하고 따뜻한 분위기의
            </h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-1 w-16 md:w-24 bg-red-600"></div>
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-600">
                완벽한 쭈꾸미집!
              </h3>
              <div className="h-1 w-16 md:w-24 bg-red-600"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 슬라이드 이미지 섹션 */}
      <div className="relative bg-yellow-400 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* 이미지 슬라이더 */}
            <div className="relative h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {storeImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              
              {/* 슬라이드 인디케이터 */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {storeImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-white scale-110' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>

              {/* 이전/다음 버튼 */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + storeImages.length) % storeImages.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % storeImages.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-colors"
              >
                →
              </button>
            </div>

            {/* 슬라이드 카운터 */}
            <div className="text-center mt-6">
              <span className="text-gray-700 font-medium">
                {currentSlide + 1} / {storeImages.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}