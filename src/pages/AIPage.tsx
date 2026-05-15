import AIHero from '../components/ai/AIHero';
import AIRoadmap from '../components/ai/AIRoadmap';
import AISection from '../components/ai/AISection';
import Footer from '../components/layout/Footer';

export default function AIPage() {
  return (
    <>
      <AIHero />
      <div className="ticker">
        <span className="ticker-inner">
          ★ LLM FUNDAMENTALS ★ PROMPT ENGINEERING ★ RAG ★ VECTOR DATABASES ★ EMBEDDINGS ★ MCP ★ A2A ★ AI AGENTS ★ FINE-TUNING ★ AI SAFETY ★ LLM APIS ★ MULTIMODAL AI ★ THE FUTURE IS NOW ★ MASTER THE AI STACK ★ BUILD THE NEXT GENERATION ★
        </span>
      </div>
      <AIRoadmap />
      <AISection />
      <Footer />
    </>
  );
}
