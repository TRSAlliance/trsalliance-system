import { createRoot } from 'react-dom/client';
import { db } from '@/lib/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { GhostShiftCard } from '@/components/GhostShiftCard';

const App = () => {
  const [operators, setOperators] = React.useState<any[]>([]);

  React.useEffect(() => {
    const unsub = onSnapshot(collection(db, 'operators'), (snap) => {
      const data = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setOperators(data);
    });
    return unsub;
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-900">GhostShift Simulator</h1>
        <p className="text-indigo-700 mt-2">Real-time TRS Operator Trust Network</p>
      </header>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {operators.map(op => <GhostShiftCard key={op.id} operator={op} />)}
      </div>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
