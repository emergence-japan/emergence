import HeroScene from "@/components/HeroScene";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <HeroScene />
      
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[80vh] text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
          Innovating the <span className="text-accent">Future</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10">
          Emergence-japan合同会社は、次世代のテクノロジーで、ビジネスに革新的な価値を提供します。
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-bold hover:opacity-90 transition-opacity">
            Get Started
          </button>
          <button className="px-8 py-3 border border-white/20 rounded-full font-bold hover:bg-white/5 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}