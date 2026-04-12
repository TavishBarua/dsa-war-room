import { ScheduleProvider } from '../context/ScheduleContext';
import { ProgressProvider } from '../context/ProgressContext';
import { MemorizedProvider } from '../context/MemorizedContext';
import Hero from '../components/hero/Hero';
import ProgressBar from '../components/progress/ProgressBar';
import PatternsSection from '../components/patterns/PatternsSection';
import DnaSection from '../components/dna/DnaSection';
import ComplexityTable from '../components/complexity/ComplexityTable';
import CollectionsSection from '../components/collections/CollectionsSection';
import PlanSection from '../components/plan/PlanSection';
import SimulatorSection from '../components/simulator/SimulatorSection';
import RulesSection from '../components/rules/RulesSection';
import Footer from '../components/layout/Footer';

export default function DSAPage() {
  return (
    <ScheduleProvider>
      <ProgressProvider>
        <MemorizedProvider>
          <Hero />
          <ProgressBar />
          <PatternsSection />
          <DnaSection />
          <ComplexityTable />
          <CollectionsSection />
          <PlanSection />
          <SimulatorSection />
          <RulesSection />
          <Footer />
        </MemorizedProvider>
      </ProgressProvider>
    </ScheduleProvider>
  );
}
