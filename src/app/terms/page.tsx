import { Metadata } from 'next'
import LegalWrapper from '@/components/LegalWrapper'

export const metadata: Metadata = {
  title: '利用規約 | Emergence-Japan LLC',
  description: 'Emergence-Japan LLC の利用規約について。本サイトおよび提供サービスの利用条件、免責事項、禁止事項等を定めています。',
}

export default function TermsPage() {
  return (
    <LegalWrapper title="利用規約">
      <p className="mb-8 text-gray-300">
        この利用規約（以下、「本規約」）は、エマージェンス・ジャパン合同会社（以下、「当社」）が提供するサービス（以下、「本サービス」）の利用条件を定めるものです。登録ユーザーの皆さま（以下、「ユーザー」）には、本規約に従って本サービスをご利用いただきます。
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-white mb-4">第1条（適用）</h2>
        <p className="text-gray-300 leading-relaxed">
          本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。当社は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の規定（以下、「個別規定」）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-white mb-4">第2条（利用登録）</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          本サービスにおいては、登録希望者が本規約に同意の上、当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の承認をしないことがあり、その理由については一切の開示義務を負わないものとします。
        </p>
        <ul className="list-disc ml-6 space-y-2 text-gray-400">
          <li>利用登録の申請に際して虚偽の事項を届け出た場合</li>
          <li>本規約に違反したことがある者からの申請である場合</li>
          <li>その他、当社が利用登録を相当でないと判断した場合</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-white mb-4">第3条（禁止事項）</h2>
        <p className="text-gray-300 mb-4">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
        <ul className="list-disc ml-6 space-y-2 text-gray-400">
          <li>法令または公序良俗に違反する行為</li>
          <li>犯罪行為に関連する行為</li>
          <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
          <li>当社のサービスの運営を妨害するおそれのある行為</li>
          <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
          <li>他のユーザーに成りすます行為</li>
          <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
          <li>その他、当社が不適切と判断する行為</li>
        </ul>
      </section>

      <p className="text-sm text-gray-500 mt-12 text-right">以上</p>
    </LegalWrapper>
  )
}
