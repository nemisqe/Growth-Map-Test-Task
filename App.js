import { ToastProvider } from './src/components/Toast';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <ToastProvider>
      <Home />
    </ToastProvider>
  );
}

