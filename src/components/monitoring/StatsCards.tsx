import { Server, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';
import { DashboardStats } from '@/types/monitoring';

interface StatsCardsProps {
  stats: DashboardStats;
}

export function StatsCards({ stats }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {/* Total Hosts */}
      <div className="glass-card p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground font-medium">Total Hosts</p>
            <p className="text-4xl font-bold mt-2">{stats.totalHosts}</p>
            <p className="text-sm text-muted-foreground mt-1">Nodes</p>
          </div>
          <div className="p-3 rounded-lg bg-primary/10">
            <Server className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>

      {/* Servers Up */}
      <div className="glass-card p-5 border-l-4 border-l-status-online">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground font-medium">Servers Up</p>
            <p className="text-4xl font-bold mt-2 text-status-online">{stats.serversUp}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-status-online rounded-full transition-all duration-500"
                  style={{ width: `${stats.upPercentage}%` }}
                />
              </div>
              <span className="text-sm text-status-online font-medium">{stats.upPercentage}%</span>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-status-online/10">
            <CheckCircle2 className="w-6 h-6 text-status-online" />
          </div>
        </div>
      </div>

      {/* Servers Down */}
      <div className="glass-card p-5 border-l-4 border-l-status-offline">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground font-medium">Servers Down</p>
            <p className="text-4xl font-bold mt-2 text-status-offline">{stats.serversDown}</p>
            <p className="text-sm text-status-offline mt-1 font-medium uppercase">Critical</p>
          </div>
          <div className="p-3 rounded-lg bg-status-offline/10">
            <AlertTriangle className="w-6 h-6 text-status-offline" />
          </div>
        </div>
      </div>
    </div>
  );
}
