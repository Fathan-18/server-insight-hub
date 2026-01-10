import { Header } from '@/components/monitoring/Header';
import { StatsCards } from '@/components/monitoring/StatsCards';
import { SecurityMetrics } from '@/components/monitoring/SecurityMetrics';
import { ActiveAlerts } from '@/components/monitoring/ActiveAlerts';
import { ElasticLogs } from '@/components/monitoring/ElasticLogs';
import { SecurityChart } from '@/components/monitoring/SecurityChart';
import { InfrastructureTable } from '@/components/monitoring/InfrastructureTable';
import {
  mockStats,
  mockSecurityMetrics,
  mockProblems,
  mockLogs,
  mockHosts,
  mockSecurityEvents,
} from '@/data/mockData';

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 lg:p-6">
      <div className="max-w-7xl mx-auto">
        <Header />

        <StatsCards stats={mockStats} />

        <SecurityMetrics metrics={mockSecurityMetrics} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="h-[450px]">
            <ActiveAlerts problems={mockProblems} />
          </div>
          <div className="h-[450px]">
            <ElasticLogs logs={mockLogs} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <InfrastructureTable hosts={mockHosts} />
          </div>
          <div>
            <SecurityChart data={mockSecurityEvents} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
