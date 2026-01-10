import { useState } from 'react';
import { AlertTriangle, Search, Clock } from 'lucide-react';
import { ZabbixProblem } from '@/types/monitoring';
import { SeverityBadge } from './SeverityBadge';

interface ActiveAlertsProps {
  problems: ZabbixProblem[];
}

export function ActiveAlerts({ problems }: ActiveAlertsProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProblems = problems.filter(
    (p) =>
      p.host.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.problem.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const criticalCount = problems.filter((p) => p.severity === 'disaster' || p.severity === 'high').length;

  return (
    <div className="glass-card p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-status-warning" />
          <h2 className="font-semibold text-lg">Active Alerts</h2>
        </div>
        {criticalCount > 0 && (
          <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-status-offline/20 text-status-offline border border-status-offline/30">
            {criticalCount} CRIT
          </span>
        )}
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search problems..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input pl-10"
        />
      </div>

      {/* Alert List */}
      <div className="flex-1 overflow-y-auto scrollbar-thin space-y-3">
        {filteredProblems.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No problems found
          </div>
        ) : (
          filteredProblems.map((problem) => (
            <div
              key={problem.id}
              className="p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors border border-border/50"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <SeverityBadge severity={problem.severity} />
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {problem.timestamp}
                    </span>
                  </div>
                  <p className="font-mono text-sm font-medium text-primary truncate">
                    {problem.host}
                  </p>
                  <p className="text-sm text-foreground mt-0.5">{problem.problem}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
