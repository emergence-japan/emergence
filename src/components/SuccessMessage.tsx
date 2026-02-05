'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const SuccessMessage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-12 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.2 }}
        className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center text-accent mb-6"
      >
        <CheckCircle size={40} />
      </motion.div>
      
      <h3 className="text-2xl font-bold mb-4">お問い合わせありがとうございます</h3>
      <p className="text-gray-400 max-w-md mx-auto mb-8">
        メッセージは正常に送信されました。<br />
        担当者より、内容を確認次第折り返しご連絡させていただきます。
      </p>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.location.reload()}
        className="text-sm font-medium text-accent hover:underline"
      >
        フォームに戻る
      </motion.button>
    </motion.div>
  )
}

export default SuccessMessage
