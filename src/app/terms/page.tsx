import LegalWrapper from '@/components/LegalWrapper'

export default function TermsPage() {
  return (
    <LegalWrapper title="利用規約">
      <section>
        <h2 className="text-xl font-bold text-white mb-4">1. 規約の適用</h2>
        <p>
          本利用規約（以下、「本規約」）は、Emergence-Japan LLC（以下、「当社」）が提供する当サイトおよびサービスの利用条件を定めるものです。利用者は本規約に同意の上、当サイトを利用するものとします。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-4">2. 禁止事項</h2>
        <p>利用者は、以下の行為を行ってはなりません。</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>法令または公序良俗に反する行為</li>
          <li>当サイトの運営を妨害する行為</li>
          <li>当社または第三者の知的財産権を侵害する行為</li>
          <li>虚偽の情報の登録または提供</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-4">3. 免責事項</h2>
        <p>
          当社は、当サイトの情報の正確性について万全を期しておりますが、その内容を保証するものではありません。当サイトの利用により生じた損害について、当社は一切の責任を負いません。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-4">4. 規約の変更</h2>
        <p>
          当社は、必要に応じて本規約を変更することがあります。変更後の規約は、当サイトに掲載した時点より効力を生じるものとします。
        </p>
      </section>
    </LegalWrapper>
  )
}
