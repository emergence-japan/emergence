export const worksData = [
  {
    title: '東京大学 大学院情報学環 藤本研究室 AI活用サポート',
    category: 'AI Solution',
    description: '最先端のメディア学習研究を支援するため、AIの高度な活用方法に関する技術サポートおよびコンサルティングを提供。',
    client: '東京大学 大学院情報学環 藤本研究室',
    imageUrl: '/works/tokyoU.png',
  },
  {
    title: '介護施設向けラーニングマネジメントシステム (LMS) のリリース',
    category: 'System Development',
    description: '介護現場の教育課題を解決するため、効率的な学習管理を実現するLMSを独自開発。現場の生産性向上とスキルアップを支援。',
    client: '介護業界各社',
    imageUrl: '/works/LMS_new.png',
  },
  {
    title: '就労継続支援B型事業 専用アプリ開発',
    category: 'App Development',
    description: '障害福祉現場の業務効率化と利用者支援の利便性向上のため、就労継続支援B型事業に特化した専用アプリケーションを開発。',
    client: '障害福祉サービス事業所',
    imageUrl: '/works/nanairo.jpg',
  },
  {
    title: '商工会議所・商工会でのセミナー実績',
    category: 'Seminar',
    description: '大阪商工会議所をはじめ、全国50ヶ所以上の商工会議所・商工会にて、中小企業の経営者や担当者を対象にAI活用やDX推進をテーマとしたセミナーを多数実施。実務に即した具体的な手法を解説。',
    client: '全国各地の商工会議所・商工会',
    imageUrl: '/works/shokokai_new.jpg',
  },
  {
    title: '社員研修',
    category: 'Training',
    description: '組織全体のデジタルリテラシー底上げのため、AI活用を中心とした全社的な社員研修プログラムを提供。',
    client: '株式会社サンワ',
    imageUrl: '/works/training1_new.jpg',
  },
  {
    title: '大阪デザイン＆テクノロジー専門学校 AI講師',
    category: 'Education',
    description: '次世代のクリエイターやエンジニアを目指す学生に向け、実務で使えるAI技術の講義を担当。',
    client: '大阪デザイン＆テクノロジー専門学校',
    imageUrl: '/works/oca_new.jpg',
  },
]

export type WorkItem = typeof worksData[0]
