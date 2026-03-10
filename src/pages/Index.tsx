import { Header } from '@/components/monitoring/Header';
import { StatsCards } from '@/components/monitoring/StatsCards';

import { ZabbixProblems } from '@/components/monitoring/ZabbixProblems';
import { ElasticLogs } from '@/components/monitoring/ElasticLogs';

import { HostsTable } from '@/components/monitoring/HostsTable';
import {
  mockStats,
  
  mockProblems,
  mockLogs,
  mockHosts,
  
} from '@/data/mockData';

const Index = () => {
  return (
    <div className="min-h-screen bg-background px-4 lg:px-6 py-4">
      <div className="max-w-[1600px] mx-auto">
        <Header />

        <StatsCards stats={mockStats} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="h-[400px]">
            <ZabbixProblems problems={mockProblems} />
          </div>
          <div className="h-[400px]">
            <ElasticLogs logs={mockLogs} />
          </div>
        </div>

        <HostsTable hosts={mockHosts} />
      </div>
    </div>
  );
};

export default Index;
