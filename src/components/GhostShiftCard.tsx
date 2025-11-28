import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

interface Operator {
  id: string;
  name?: string;
  trustRating: number;
  onboardingStatus: string;
}

export function GhostShiftCard({ operator }: { operator: Operator }) {
  const trustPercent = (operator.trustRating * 100).toFixed(0);

  return (
    <Card className="p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">{operator.name || operator.id}</h3>
          <p className="text-sm text-gray-600">ID: {operator.id.slice(0, 8)}</p>
        </div>
        <Badge 
          variant={operator.trustRating > 0.7 ? "success" : operator.trustRating > 0.4 ? "warning" : "destructive"}
        >
          {trustPercent}% Trust
        </Badge>
      </div>
      <div className="mt-3">
        <p className="text-sm">Status: <span className="font-medium">{operator.onboardingStatus}</span></p>
      </div>
    </Card>
  );
}
