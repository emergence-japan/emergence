import { Brain, Code, Rocket, Users, GraduationCap, BookOpen } from 'lucide-react'

export const serviceCards = [
  {
    title: 'AIソリューション開発',
    description: '生成AIを活用し、ビジネスプロセスを自動化・高度化するカスタムソリューションを提供します。',
    icon: Brain,
    href: '/services/ai',
    tags: ['LLM', 'RAG', 'Automation', 'Python'],
    image: '/works/LMS_new.png',
  },
  {
    title: 'Web / アプリ開発',
    description: 'モダンな技術スタックを用いた、スケーラブルでパフォーマンスの高いWebサイトやアプリケーションを構築します。',
    icon: Code,
    href: '/services/web',
    tags: ['Next.js', 'TypeScript', 'React', 'AWS'],
    image: '/services/surfapp.png',
  },
  {
    title: 'DXコンサルティング',
    description: 'AIノウハウを組織の「頭脳」となる部署へ直接移植。自律的に業務を改善・自動化し続けられる「自走するコア」を構築します。',
    icon: Rocket,
    href: '/services/dx',
    tags: ['Strategy', 'Efficiency', 'Innovation'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: '社員研修',
    description: '企業のAI活用力を高めるための実践的なプログラムを提供。プロンプトエンジニアリングから業務自動化まで、即戦力となるスキルを習得します。',
    icon: Users,
    href: '/services/training',
    tags: ['Training', 'Prompt Eng', 'Digital Literacy'],
    image: '/services/soukoukai.jpg',
  },
  {
    title: '個人向けAIスクール',
    description: 'コミュニティで仲間と共に学ぶオンラインスクール。入会費のみで教材が学び放題、さらに月2回のオンラインセミナーで最新の知見を共有します。',
    icon: GraduationCap,
    href: '/services/school',
    tags: ['Community', 'Education', 'Lifelong Learning'],
    image: '/bootcamp/AI Boot Camp02.png',
  },
  {
    title: '出版・執筆',
    description: 'AI時代にこそ問われる「人間の思考力」をテーマにした書籍を2冊出版。哲学、心理学、科学、文学、芸術といったあらゆる教養を横断した知見を基に、テクノロジーを使いこなすための本質的な知性を発信しています。',
    icon: BookOpen,
    href: '/services/publishing',
    tags: ['Thinking', 'Philosophy', 'Art & Science'],
    image: '/services/9784756924254.png',
  },
]
