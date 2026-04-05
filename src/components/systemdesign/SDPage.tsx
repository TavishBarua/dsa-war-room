import SDHero from './SDHero';
import SDProgressBar from './SDProgressBar';
import SDPatternsSection from './SDPatternsSection';
import SDProblemsSection from './SDProblemsSection';
import Footer from '../layout/Footer';

export default function SDPage() {
  return (
    <>
      <SDHero />
      <SDProgressBar />
      <SDPatternsSection />
      <SDProblemsSection />
      <Footer />
    </>
  );
}
