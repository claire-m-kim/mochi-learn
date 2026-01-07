import { PlayCircle, FileText, ExternalLink, MoveRight } from 'lucide-react';

const works = {
  videos: [
    {
      id: 1,
      title: "모찌런(MochiLearn) 시연 영상",
      description: "AI 일본어 학습 서비스의 핵심 기능을 담은 시연 영상입니다.",
      url: "https://www.youtube.com/embed/CFIIbYH75I8?si=SUxlEVa56qPw_vWs", 
    },
  ],
  presentations: [
    {
      id: 1,
      title: "모찌런(MochiLearn) 발표 PPT",
      description: "모찌런(MochiLearn) 발표 PPT 디자인 입니다.",
      url: "https://drive.google.com/file/d/1hfrjhMTV34Hgenz0DH6_koLC4kAgx9Qk/preview",
    },
  ]
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-200 selection:bg-blue-500/30">
      
      {/* 헤더: 너비 50% (모바일에서는 90%) */}
      <header className="border-b border-white/5 bg-[#0a0f1e]/80 backdrop-blur-2xl sticky top-0 z-50">
        <div className="w-[90%] md:w-[50%] mx-auto py-8 flex justify-between items-center">
          <h1 className="text-lg font-black tracking-tighter text-white">
            PROJECT <span className="text-blue-500">ARCHIVE</span>
          </h1>
          <p className="text-[10px] font-bold tracking-[0.3em] text-slate-500">2026</p>
        </div>
      </header>

      {/* 메인: 너비 50%로 설정하여 아주 슬림하게 정렬 */}
      <main className="w-[90%] md:w-[50%] mx-auto py-24 space-y-40">
        
        {/* 비디오 섹션 */}
        <section id="video" className="scroll-mt-28">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
            <h2 className="text-[10px] font-bold tracking-[0.5em] text-slate-500 uppercase">Motion Design</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-28">
            {works.videos.map((video) => (
              <div key={video.id} className="group">
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/5 transition-all duration-500 group-hover:border-blue-500/30">
                  <iframe src={video.url} className="w-full h-full" allowFullScreen />
                </div>
                <div className="mt-10 space-y-4 text-center"> {/* 좁은 너비엔 중앙 정렬이 예쁩니다 */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-500 transition-colors tracking-tight">
                    {video.title}
                  </h3>
                  <p className="text-base text-slate-400 leading-relaxed font-light mx-auto">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PPT 섹션 */}
        <section id="ppt" className="scroll-mt-28">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
            <h2 className="text-[10px] font-bold tracking-[0.5em] text-slate-500 uppercase">Presentation Design</h2>
          </div>

          <div className="grid grid-cols-1 gap-28">
            {works.presentations.map((ppt) => (
              <div key={ppt.id} className="group">
                <div className="relative aspect-[16/10] w-full bg-[#161b22] rounded-2xl overflow-hidden shadow-2xl border border-white/5 transition-all duration-500 group-hover:border-purple-500/30">
                  <iframe src={ppt.url} className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity" />
                  <a 
                    href={ppt.url.replace('/preview', '/view')} 
                    target="_blank" 
                    className="absolute top-4 right-4 p-3 bg-black/50 text-white backdrop-blur-md rounded-full shadow-xl hover:bg-blue-600 transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
                <div className="mt-10 space-y-4 text-center">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-500 transition-colors tracking-tight">
                    {ppt.title}
                  </h3>
                  <p className="text-base text-slate-400 leading-relaxed font-light mx-auto">
                    {ppt.description}
                  </p>
                  
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-24 text-center opacity-20">
        <p className="text-[9px] tracking-[1em] font-bold text-white uppercase">
          Mirae Kim
        </p>
      </footer>
    </div>
  );
}