'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 실제 구현에서는 여기에 폼 제출 로직을 추가
    console.log('Form submitted:', formData)
    alert('상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: '전화 문의',
      content: '',
      description: '평일 09:00 - 18:00',
      isImage: true
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: '이메일 문의',
      content: 'info@24khouses.com',
      description: '24시간 접수 가능'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: '본사 위치',
      content: '서울특별시 강남구',
      description: '방문 상담 가능'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '상담 시간',
      content: '평일 09:00 - 18:00',
      description: '토요일 09:00 - 15:00'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section 
      ref={ref}
      className="relative py-20 overflow-hidden"
      id="contact"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-red-700" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              창업 문의
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              황금쭈꾸미집과 함께할 당신의 성공적인 창업을 위해 
              전문 상담사가 친절하게 안내해드립니다
            </p>
            <motion.div
              className="w-24 h-1 bg-yellow-400 mx-auto mt-8"
              variants={itemVariants}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-white mb-8">
                연락처 정보
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  >
                    <div className="text-yellow-400 mb-4">
                      {info.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {info.title}
                    </h4>
                    {info.isImage ? (
                      <div className="mb-2">
                        <Image
                          src="/images/d026e3399a332.png"
                          alt="전국 가맹문의 1577-6615"
                          width={180}
                          height={50}
                          className="h-12 w-auto"
                        />
                      </div>
                    ) : (
                      <p className="text-xl font-bold text-white mb-1">
                        {info.content}
                      </p>
                    )}
                    <p className="text-white/70 text-sm">
                      {info.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Special Offer */}
              <motion.div
                className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-8 text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-2xl font-bold text-white mb-4">
                  🎉 창업 지원 혜택
                </h4>
                <ul className="text-white space-y-2 mb-6">
                  <li>✓ 무료 상권 분석</li>
                  <li>✓ 인테리어 설계 지원</li>
                  <li>✓ 초기 마케팅 지원</li>
                  <li>✓ 6개월 운영 컨설팅</li>
                </ul>
                <p className="text-lg font-semibold">
                  지금 상담 신청 시 모든 혜택 제공!
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-white mb-8">
                상담 신청하기
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label className="block text-white mb-2 font-semibold">
                    이름 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all"
                    placeholder=""
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-white mb-2 font-semibold">
                    전화번호 <span className="text-red-400">*</span>
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="tel"
                      maxLength={3}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all text-center"
                      placeholder="010"
                    />
                    <span className="flex items-center text-white text-xl">-</span>
                    <input
                      type="tel"
                      maxLength={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all text-center"
                      placeholder="1234"
                    />
                    <span className="flex items-center text-white text-xl">-</span>
                    <input
                      type="tel"
                      maxLength={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all text-center"
                      placeholder="5678"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-white mb-2 font-semibold">
                    문의 내용 <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all resize-none"
                    placeholder=""
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="flex items-start space-x-3 text-white text-sm">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 w-4 h-4 text-yellow-400 bg-white/10 border border-white/20 rounded focus:ring-yellow-400 focus:ring-2"
                    />
                    <span>개인정보 수집 및 이용에 동의합니다.</span>
                  </label>
                </motion.div>

                <motion.div
                  className="text-center"
                  variants={itemVariants}
                >
                  <motion.button
                    type="submit"
                    className="px-12 py-4 bg-yellow-500 text-gray-900 text-lg font-bold rounded-lg hover:bg-yellow-400 transition-colors shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    작성
                  </motion.button>
                </motion.div>
              </form>

              <motion.p
                className="text-white/70 text-sm mt-4 text-center"
                variants={itemVariants}
              >
                * 개인정보는 상담 목적으로만 사용되며, 상담 완료 후 안전하게 폐기됩니다.
              </motion.p>
            </motion.div>
          </div>

          {/* Final CTA */}
          <motion.div
            className="text-center mt-16 pt-16 border-t border-white/20"
            variants={itemVariants}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              지금 바로 시작하세요!
            </h3>
            <p className="text-xl text-white/90 mb-8">
              황금쭈꾸미집과 함께하는 성공 창업의 기회를 놓치지 마세요
            </p>
            <motion.div
              className="inline-block text-center p-4 bg-white/10 rounded-xl border border-white/20"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-white/80 text-lg mb-4">전국 가맹문의</p>
              <Image
                src="/images/d026e3399a332.png"
                alt="전국 가맹문의 1577-6615"
                width={250}
                height={80}
                className="h-20 w-auto mx-auto"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}