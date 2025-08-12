'use client'

import Image from 'next/image'

export default function FranchiseSystemSection() {
  return (
    <section className="py-20 bg-gray-50" id="franchise-system">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* 섹션 헤더 */}
          <div className="text-center mb-16">
            <p className="text-lg text-gray-600 mb-2">성공 창업의 황금오션</p>
            <h2 className="text-[18px] sm:text-3xl md:text-5xl font-bold text-gray-800 mb-6 whitespace-nowrap md:whitespace-normal leading-tight">
              황금쭈꾸미집의 <span className="text-red-600">프랜차이즈 시스템</span>
            </h2>
          </div>

          {/* 01 품질관리 */}
          <div className="mb-16">
            <div className="flex items-center text-left mb-4">
              <Image
                src="/images/2ecef0a50e5d1.png"
                alt="품질관리 아이콘"
                width={26}
                height={26}
                className="mr-2"
              />
              <h3 className="text-2xl font-bold text-gray-800">품질관리</h3>
            </div>
            <div className="text-left mb-6">
              <p className="text-gray-600 text-sm">동종 업계 중 <strong>최고의 원재료만을 공급</strong>하며, 메뉴얼화된</p>
              <p className="text-gray-600 text-sm">품질관리 시스템으로 <strong>언제나 동일한 맛을 유지</strong>합니다.</p>
            </div>
            <div className="text-center">
              <Image
                src="/images/c7000051271a1.png"
                alt="황금쭈꾸미집 품질관리 이미지"
                width={600}
                height={300}
                className="mx-auto rounded-lg"
              />
            </div>
          </div>

          {/* 02 가맹교육 */}
          <div className="mb-16">
            <div className="flex items-center text-left mb-4">
              <Image
                src="/images/71253dca68ea2.png"
                alt="가맹교육 아이콘"
                width={26}
                height={26}
                className="mr-2"
              />
              <h3 className="text-2xl font-bold text-gray-800">가맹교육</h3>
            </div>
            <div className="text-left mb-6">
              <p className="text-gray-600 text-sm">동종 업계 중 <strong>최고의 원재료만을 공급</strong>하며, 메뉴얼화된</p>
              <p className="text-gray-600 text-sm">품질관리 시스템으로 <strong>언제나 동일한 맛을 유지</strong>합니다.</p>
            </div>
            <div className="space-y-4">
              <Image
                src="/images/daf946ac34ffb.png"
                alt="황금쭈꾸미집 가맹 교육 이미지"
                width={600}
                height={300}
                className="w-full rounded-lg"
              />
              <Image
                src="/images/19e2b78851f04.png"
                alt="황금쭈꾸미집 가맹 교육 이미지 2"
                width={600}
                height={300}
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* 03 상생전략 */}
          <div className="mb-16">
            <div className="flex items-center text-left mb-4">
              <Image
                src="/images/108c5216dee13.png"
                alt="상생전략 아이콘"
                width={26}
                height={26}
                className="mr-2"
              />
              <h3 className="text-2xl font-bold text-gray-800">상생전략</h3>
            </div>
            <div className="text-left mb-6">
              <p className="text-gray-600 text-sm">동종 업계 중 <strong>최고의 원재료만을 공급</strong>하며, 메뉴얼화된</p>
              <p className="text-gray-600 text-sm">품질관리 시스템으로 <strong>언제나 동일한 맛을 유지</strong>합니다.</p>
            </div>
            <div className="space-y-4">
              <Image
                src="/images/9845f4d5658c1.png"
                alt="황금쭈구미집 상생 전략 이미지 1"
                width={600}
                height={300}
                className="w-full rounded-lg"
              />
              <Image
                src="/images/337965f3aa5d2.png"
                alt="황금쭈꾸미집 상생 전략 이미지 2"
                width={600}
                height={300}
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* 04 쉽고 빠른 창업 */}
          <div className="mb-16">
            <div className="flex items-center text-left mb-4">
              <Image
                src="/images/295b498d2f1ee.png"
                alt="쉽고 빠른 창업 아이콘"
                width={26}
                height={26}
                className="mr-2"
              />
              <h3 className="text-2xl font-bold text-gray-800">쉽고 빠른 창업</h3>
            </div>
            <div className="text-left mb-6">
              <p className="text-gray-600 text-sm">동종 업계 중 <strong>최고의 원재료만을 공급</strong>하며, 메뉴얼화된</p>
              <p className="text-gray-600 text-sm">품질관리 시스템으로 <strong>언제나 동일한 맛을 유지</strong>합니다.</p>
            </div>
            <div className="text-center">
              <Image
                src="/images/ecfb7795ee224.png"
                alt="황금쭈꾸미집 쉽고 빠른 창업 이미지"
                width={600}
                height={300}
                className="mx-auto rounded-lg"
              />
            </div>
          </div>

          {/* 05 원물 공급 시스템 */}
          <div className="mb-16">
            <div className="flex items-center text-left mb-4">
              <Image
                src="/images/aceebeebd727f.png"
                alt="원물 공급 시스템 아이콘"
                width={26}
                height={26}
                className="mr-2"
              />
              <h3 className="text-2xl font-bold text-gray-800">원물 공급 시스템</h3>
            </div>
            <div className="text-left mb-6">
              <p className="text-gray-600 text-sm">빠르고 안정적인 발주 및 관리 시스템으로</p>
              <p className="text-gray-600 text-sm"><strong>고품질의 원물을 빠르게 공급</strong>합니다.</p>
            </div>
            <div className="text-center">
              <Image
                src="/images/aefae35fe8285.png"
                alt="황금쭈꾸미집 원물 공급 시스템 이미지"
                width={600}
                height={300}
                className="mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}