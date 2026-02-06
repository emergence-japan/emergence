import { Metadata } from 'next'
import LegalWrapper from '@/components/LegalWrapper'

export const metadata: Metadata = {
  title: 'プライバシーポリシー | Emergence-Japan LLC',
  description: 'Emergence-Japan LLC のプライバシーポリシーについて。個人情報の取扱い、利用目的、第三者提供等に関する方針を掲載しています。',
}

export default function PrivacyPage() {
  return (
    <LegalWrapper title="プライバシーポリシー">
      <p className="mb-8 text-gray-300">
        エマージェンス・ジャパン合同会社（以下、「当社」）は、本ウェブサイト上で提供するサービス（以下、「本サービス」）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」）を定めます。
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-white mb-4">第1条（個人情報の収集方法）</h2>
        <p className="text-gray-300 leading-relaxed">
          当社は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレスなどの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を、当社の提携先（情報提供元、広告主、広告配信先などを含みます。）などから収集することがあります。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-white mb-4">第2条（個人情報を収集・利用する目的）</h2>
        <p className="text-gray-300 mb-4">当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
        <ul className="list-disc ml-6 space-y-2 text-gray-400">
          <li>当社サービスの提供・運営のため</li>
          <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
          <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
          <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
          <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をお断りするため</li>
          <li>ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
          <li>有料サービスにおいて、ユーザーに利用料金を請求するため</li>
          <li>上記の利用目的に付随する目的</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-white mb-4">第3条（個人情報の第三者提供）</h2>
        <p className="text-gray-300 leading-relaxed">
          当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
        </p>
      </section>
      
      <p className="text-sm text-gray-500 mt-12 text-right">以上</p>
    </LegalWrapper>
  )
}
