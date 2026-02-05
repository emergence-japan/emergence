import LegalWrapper from '@/components/LegalWrapper'

export default function LegalPage() {
  return (
    <LegalWrapper title="特定商取引法に基づく表記">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <tbody className="divide-y divide-white/10">
            <tr>
              <th className="py-4 pr-6 font-bold text-white w-1/3">事業者名</th>
              <td className="py-4">Emergence-Japan LLC</td>
            </tr>
            <tr>
              <th className="py-4 pr-6 font-bold text-white">代表者</th>
              <td className="py-4">浜田 陽介</td>
            </tr>
            <tr>
              <th className="py-4 pr-6 font-bold text-white">所在地</th>
              <td className="py-4">〒550-0014 大阪府大阪市西区北堀江4-4-6</td>
            </tr>
            <tr>
              <th className="py-4 pr-6 font-bold text-white">お問い合わせ先</th>
              <td className="py-4">当サイトのお問い合わせフォームよりご連絡ください</td>
            </tr>
            <tr>
              <th className="py-4 pr-6 font-bold text-white">販売価格</th>
              <td className="py-4">各サービス紹介ページに記載、または個別見積もり</td>
            </tr>
            <tr>
              <th className="py-4 pr-6 font-bold text-white">代金の支払時期</th>
              <td className="py-4">請求書発行後、指定の期日までにお支払い</td>
            </tr>
            <tr>
              <th className="py-4 pr-6 font-bold text-white">支払方法</th>
              <td className="py-4">銀行振込</td>
            </tr>
            <tr>
              <th className="py-4 pr-6 font-bold text-white">返品・キャンセル</th>
              <td className="py-4">サービスの性質上、返品・返金は原則として受け付けておりません</td>
            </tr>
          </tbody>
        </table>
      </div>
    </LegalWrapper>
  )
}
