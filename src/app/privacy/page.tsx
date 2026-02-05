import LegalWrapper from '@/components/LegalWrapper'

export default function PrivacyPage() {
  return (
    <LegalWrapper title="プライバシーポリシー">
      <section>
        <h2 className="text-xl font-bold text-white mb-4">1. 個人情報の収集について</h2>
        <p>
          Emergence-Japan LLC（以下、「当社」）は、当サイトの利用者から、お問い合わせフォーム等を通じて氏名、メールアドレス、電話番号等の個人情報を収集する場合があります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-4">2. 個人情報の利用目的</h2>
        <p>収集した個人情報は、以下の目的で利用いたします。</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>お問い合わせへの回答および本人確認のため</li>
          <li>当社のサービス提供および運営のため</li>
          <li>重要な通知やお知らせの送付のため</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-4">3. 個人情報の第三者提供</h2>
        <p>
          当社は、法令に基づく場合を除き、利用者の同意なく個人情報を第三者に提供することはありません。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-4">4. 個人情報の管理</h2>
        <p>
          当社は、個人情報の漏洩、紛失、改ざん等を防止するため、適切な安全管理措置を講じます。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-4">5. お問い合わせ窓口</h2>
        <p>
          プライバシーポリシーに関するお問い合わせは、当サイトのお問い合わせフォームよりご連絡ください。
        </p>
      </section>
    </LegalWrapper>
  )
}
