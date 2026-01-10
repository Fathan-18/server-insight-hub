import { useState } from 'react';
import { Search, Filter, ChevronRight } from 'lucide-react';
import { HostStatus } from '@/types/monitoring';
import { cn } from '@/lib/utils';

interface InfrastructureTableProps {
  hosts: HostStatus[];
}

export function InfrastructureTable({ hosts }: InfrastructureTableProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredHosts = hosts.filter((host) =>
    host.hostname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: HostStatus['status']) => {
    switch (status) {
      case 'online':
        return 'text-status-online';
      case 'offline':
        return 'text-status-offline';
      case 'warning':
        return 'text-status-warning';
    }
  };

  const getStatusDot = (status: HostStatus['status']) => {
    switch (status) {
      case 'online':
        return 'bg-status-online';
      case 'offline':
        return 'bg-status-offline';
      case 'warning':
        return 'bg-status-warning';
    }
  };

  const getUsageColor = (value: number) => {
    if (value >= 90) return 'bg-status-offline';
    if (value >= 70) return 'bg-status-warning';
    return 'bg-primary';
  };

  return (
    <div className="glass-card p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <h2 className="font-semibold text-lg">Infrastructure Status</h2>
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search hosts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input pl-10"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Status
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Hostname
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                CPU
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                RAM
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Uptime
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredHosts.map((host) => (
              <tr
                key={host.id}
                className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
              >
                <td className="py-3 px-4">
                  <span className={cn('status-dot inline-block', getStatusDot(host.status))} />
                </td>
                <td className="py-3 px-4">
                  <span className="font-mono text-sm font-medium">{host.hostname}</span>
                </td>
                <td className="py-3 px-4">
                  {host.status === 'offline' ? (
                    <span className="text-muted-foreground text-sm">OFFLINE</span>
                  ) : (
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div
                          className={cn('h-full rounded-full', getUsageColor(host.cpu))}
                          style={{ width: `${host.cpu}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground w-8">{host.cpu}%</span>
                    </div>
                  )}
                </td>
                <td className="py-3 px-4">
                  {host.status === 'offline' ? (
                    <span className="text-muted-foreground text-sm">—</span>
                  ) : (
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div
                          className={cn('h-full rounded-full', getUsageColor(host.ram))}
                          style={{ width: `${host.ram}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground w-8">{host.ram}%</span>
                    </div>
                  )}
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm text-muted-foreground">{host.uptime}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="flex items-center gap-1 mt-4 text-sm text-primary hover:text-primary/80 transition-colors">
        View All Hosts
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
