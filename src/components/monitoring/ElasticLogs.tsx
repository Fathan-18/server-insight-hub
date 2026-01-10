import { useState } from 'react';
import { Search, Radio } from 'lucide-react';
import { ElasticLog } from '@/types/monitoring';
import { LogLevelBadge } from './LogLevelBadge';

interface ElasticLogsProps {
  logs: ElasticLog[];
}

export function ElasticLogs({ logs }: ElasticLogsProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLogs = logs.filter((log) =>
    log.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="glass-card p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Radio className="w-5 h-5 text-primary animate-pulse" />
          <h2 className="font-semibold text-lg">Elasticsearch Feed</h2>
          <span className="text-xs text-primary font-mono">// LIVE</span>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="grep logs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input pl-10 font-mono"
        />
      </div>

      {/* Log Feed */}
      <div className="flex-1 overflow-y-auto scrollbar-thin bg-background/50 rounded-lg border border-border/50">
        {filteredLogs.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground font-mono text-sm">
            No logs matching query
          </div>
        ) : (
          filteredLogs.map((log) => (
            <div key={log.id} className="log-entry flex items-start gap-3">
              <span className="text-muted-foreground font-mono text-xs shrink-0">
                [{log.timestamp}]
              </span>
              <LogLevelBadge level={log.level} />
              <span className="text-sm text-foreground/90 break-all">
                {log.message}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
