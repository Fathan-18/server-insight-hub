import { useState, useEffect } from 'react';
import { Settings, Server, Database } from 'lucide-react';

export function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <header className="glass-card p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Server className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-semibold">Server Monitor</h1>
          </div>
          <span className="text-muted-foreground">|</span>
          <span className="text-sm font-medium text-muted-foreground">Dashboard</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="status-dot status-online" />
              <span className="text-muted-foreground">ZB:</span>
              <span className="text-status-online font-medium">ONLINE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="status-dot status-online" />
              <span className="text-muted-foreground">ES:</span>
              <span className="text-status-online font-medium">ONLINE</span>
            </div>
          </div>

          <div className="text-right">
            <div className="font-mono text-2xl font-semibold tracking-wider">
              {formatTime(time)}
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide">
              {formatDate(time)} (UTC)
            </div>
          </div>

          <button className="p-2 hover:bg-accent rounded-lg transition-colors">
            <Settings className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
}
