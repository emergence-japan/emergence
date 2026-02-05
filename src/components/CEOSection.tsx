'use client'

import { motion } from 'framer-motion'
import Image from 'next/link'

const CEOSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/3 aspect-square relative rounded-2xl overflow-hidden bg-white/5 border border-white/10"
      >
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 italic">
          {/* Placeholder for CEO Image */}
          <span role="img" aria-label="CEO Profile">Profile Image</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-2/3"
      >
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-accent"></span>
          CEO Message
        </h3>
        <p className="text-gray-300 leading-relaxed mb-6 italic">
          "Emergence-Japan LLC 縺ｯ縲√ユ繧ｯ繝弱Ο繧ｸ繝ｼ縺ｮ蜉帙ｒ菫｡縺倥※縺・∪縺吶らｧ√◆縺｡縺ｯ縲∝腰縺ｫ繧ｷ繧ｹ繝・Β繧呈ｧ狗ｯ峨☆繧九・縺ｧ縺ｯ縺ｪ縺上∵悴譚･繧貞ｽ｢菴懊ｊ縲√♀螳｢讒倥→蜈ｱ縺ｫ譁ｰ縺溘↑萓｡蛟､繧貞卸騾縺吶ｋ縺薙→繧堤岼謖・＠縺ｦ縺・∪縺吶らｧ√◆縺｡縺ｮ諠・・縺後∫嚀讒倥・繝薙ず繝阪せ縺ｫ髱ｩ譁ｰ逧・↑鬟幄ｺ阪ｒ繧ゅ◆繧峨☆縺薙→繧偵♀邏・據縺励∪縺吶・
        </p>
        <div>
          <p className="font-bold text-white text-lg">莉｣陦ｨ遉ｾ蜩｡ 豬懃伐 髯ｽ莉・/p>
          <p className="text-accent font-mono text-sm uppercase tracking-widest">Chief Executive Officer</p>
        </div>
      </motion.div>
    </div>
  )
}

export default CEOSection
