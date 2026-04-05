import { SDProgressProvider } from '../context/SDProgressContext';
import SDPage from '../components/systemdesign/SDPage';

export default function SystemDesignPage() {
  return (
    <SDProgressProvider>
      <SDPage />
    </SDProgressProvider>
  );
}
