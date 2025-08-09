'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronUp, Phone, User, MessageSquare } from 'lucide-react'

export default function BottomContactForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone1: '',
    phone2: '',
    phone3: '',
    message: '',
    privacy: false
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.privacy) {
      alert('개인정보 수집 및 이용에 동의해주세요.')
      return
    }

    if (!formData.name || !formData.phone1 || !formData.phone2 || !formData.phone3) {
      alert('필수 항목을 모두 입력해주세요.')
      return
    }

    setIsSubmitting(true)

    try {
      const phone = `${formData.phone1}-${formData.phone2}-${formData.phone3}`
      
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: phone,
          message: formData.message,
          region: '미지정' // 지역 필드가 없으므로 기본값
        }),
      })

      const result = await response.json()

      if (response.ok) {
        alert('상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다!')
        
        // Reset form
        setFormData({
          name: '',
          phone1: '',
          phone2: '',
          phone3: '',
          message: '',
          privacy: false
        })
        setIsOpen(false)
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
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-gray-600 hover:bg-gray-700' 
            : 'bg-red-600 hover:bg-red-700'
        }`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
      >
        {isOpen ? (
          <ChevronUp className="w-8 h-8 text-white mx-auto" />
        ) : (
          <Phone className="w-8 h-8 text-white mx-auto" />
        )}
      </motion.button>

      {/* Bottom Form */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-40 bg-red-900 shadow-2xl"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-500 rounded-full filter blur-2xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-500 rounded-full filter blur-2xl" />
            </div>

            <div className="relative p-6 max-w-4xl mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    🔥 빠른 창업 상담
                  </h3>
                  <p className="text-white/80">
                    전문 상담사가 직접 연락드립니다!
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white/70 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="flex items-center text-white mb-2 font-semibold">
                      <User className="w-4 h-4 mr-2" />
                      성함 <span className="text-red-400 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/15 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all"
                      placeholder="성함을 입력해주세요"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="flex items-center text-white mb-2 font-semibold">
                      <Phone className="w-4 h-4 mr-2" />
                      연락처 <span className="text-red-400 ml-1">*</span>
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="tel"
                        name="phone1"
                        value={formData.phone1}
                        onChange={handleChange}
                        maxLength={3}
                        required
                        className="w-full px-3 py-3 bg-white/15 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all text-center"
                        placeholder="010"
                      />
                      <span className="flex items-center text-white text-xl">-</span>
                      <input
                        type="tel"
                        name="phone2"
                        value={formData.phone2}
                        onChange={handleChange}
                        maxLength={4}
                        required
                        className="w-full px-3 py-3 bg-white/15 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all text-center"
                        placeholder="1234"
                      />
                      <span className="flex items-center text-white text-xl">-</span>
                      <input
                        type="tel"
                        name="phone3"
                        value={formData.phone3}
                        onChange={handleChange}
                        maxLength={4}
                        required
                        className="w-full px-3 py-3 bg-white/15 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all text-center"
                        placeholder="5678"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="flex items-center text-white mb-2 font-semibold">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    문의 내용 <span className="text-red-400 ml-1">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="w-full px-4 py-3 bg-white/15 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all resize-none"
                    placeholder="창업 관련 문의사항을 간단히 적어주세요"
                  />
                </div>

                {/* Privacy Agreement */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 text-yellow-400 bg-white/10 border border-white/30 rounded focus:ring-yellow-400 focus:ring-2"
                  />
                  <span className="text-white/90 text-sm leading-relaxed">
                    개인정보 수집 및 이용에 동의합니다. 
                    <span className="text-white/70">
                      (수집된 정보는 상담 목적으로만 사용되며, 상담 완료 후 안전하게 폐기됩니다.)
                    </span>
                  </span>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-2">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 text-lg font-bold rounded-lg shadow-lg transition-colors ${
                      isSubmitting 
                        ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                        : 'bg-yellow-500 text-gray-900 hover:bg-yellow-400'
                    }`}
                    whileHover={isSubmitting ? {} : { scale: 1.02 }}
                    whileTap={isSubmitting ? {} : { scale: 0.98 }}
                  >
                    {isSubmitting ? '전송 중...' : '무료 상담 신청하기'}
                  </motion.button>
                </div>
              </form>

              {/* Additional Info */}
              <div className="mt-4 pt-4 border-t border-white/20">
                <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
                  <span>⏰ 평일 09:00-18:00 상담</span>
                  <span>📞 당일 연락 보장</span>
                  <span>🏪 전국 매장 개설 가능</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}