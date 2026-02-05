'use client'

import { motion } from 'framer-motion'

interface InfoRow {
  label: string
  value: string
}

interface CompanyInfoTableProps {
  data: InfoRow[]
}

const CompanyInfoTable = ({ data }: CompanyInfoTableProps) => {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
      <table className="w-full text-left border-collapse">
        <tbody className="divide-y divide-white/10">
          {data.map((item, index) => (
            <motion.tr
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group hover:bg-white/5 transition-colors"
            >
              <th className="py-4 px-6 text-sm font-semibold text-gray-400 w-1/3 md:w-1/4">
                {item.label}
              </th>
              <td className="py-4 px-6 text-sm text-white font-medium">
                {item.value}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CompanyInfoTable
