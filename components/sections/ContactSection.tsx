'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.phone) {
      alert('이름과 연락처는 필수입니다.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
          region: '미지정'
        }),
      })

      const result = await response.json()

      if (response.ok) {
        alert('상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다!')
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        })
      } else {
        alert(result.error || '신청 중 오류가 발생했습니다. 다시 시도해주세요.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


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
            <motion.div variants={itemVariants}>
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

        </motion.div>
      </div>
    </section>
  )
}