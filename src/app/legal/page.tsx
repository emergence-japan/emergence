import { Metadata } from 'next'
import LegalWrapper from '@/components/LegalWrapper'

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記 | Emergence-Japan LLC',
  description: 'Emergence-Japan LLC の特定商取引法に基づく表記です。運営者情報、連絡先、役務の対価等に関する情報を掲載しています。',
}

export default function LegalPage() {
  return (
    <LegalWrapper title="特定商取引法に基づく表記">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <tbody className="divide-y divide-white/10 text-sm md:text-base text-gray-300">
            <tr>
              <th className="py-4 pr-6 font-bold text-white w-40 whitespace-nowrap">販売業者名</th>
              <td className="py-4">エマージェンス・ジャパン合同会社</td>
            </tr>
            <tr>
              <th className="py-4 pr-6 font-bold text-white w-40 whitespace-nowrap">代表責任者</th>
              <td className="py-4">浜田 陽介</td>
            </tr>
            <tr>
              <th className="py-4 pr-6 font-bold text-white w-40 whitespace-nowrap">所在地</th>
              <td className="py-4">福岡県春日市小倉2丁目110-14</td>
            </tr>
            <tr>
              <th className="py-4 pr-6 font-bold text-white w-40 whitespace-nowrap">電話番号</th>
              <td className="py-4">050-3150-8488</td>
            </tr>
            <tr>
              <th className="py-4 pr-6 font-bold text-white w-40 whitespace-nowrap">メールアドレス</th>
              <td className="py-4">info@emergence-japan.com</td>
            </tr>
            <tr>
              <th className="py-4 pr-6 font-bold text-white w-40 whitespace-nowrap">販売価格</th>
              <td className="py-4">各サービス詳細ページに表示された価格に基づきます。</td>
            </tr>
            <tr>
              <th className="py-4 pr-6 font-bold text-white w-40 whitespace-nowrap">支払方法</th>
              <td className="py-4">銀行振込、クレジットカード決済（PayPal等）</td>
            </tr>
            <tr>
              <th className="py-4 pr-6 font-bold text-white w-40 whitespace-nowrap">支払時期</th>
              <td className="py-4">お申し込み後、原則として7日以内にお支払いください。</td>
            </tr>
            <tr>
              <th className="py-4 pr-6 font-bold text-white w-40 whitespace-nowrap">商品引渡し時期</th>
              <td className="py-4">お支払い確認後、即時または所定の開始日に提供を開始します。</td>
            </tr>
            <tr>
              <th className="py-4 pr-6 font-bold text-white w-40 whitespace-nowrap">返品・交換</th>
              <td className="py-4">サービスの性質上、返品・返金には応じられません。</td>
            </tr>
          </tbody>
        </table>
      </div>
    </LegalWrapper>
  )
}
