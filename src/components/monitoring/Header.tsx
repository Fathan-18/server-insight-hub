import { useState, useEffect } from 'react';
import { Server, Sun, Moon, RefreshCw, LayoutGrid } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export function Header() {
  const [time, setTime] = useState(new Date());
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('id-ID', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).replace(/:/g, '.');
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <header className="flex items-center justify-between py-4 mb-6">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Server className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Server Monitor</h1>
            <p className="text-xs text-muted-foreground">Real-time Infrastructure Monitoring</p>
          </div>
        </div>

        <div className="flex items-center gap-4 ml-6">
          <div className="flex items-center gap-2 text-sm">
            <span className="status-dot status-online" />
            <span className="text-muted-foreground">Elasticsearch</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="status-dot status-online" />
            <span className="text-muted-foreground">Zabbix API</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <select className="bg-card border border-border rounded-lg px-3 py-2 text-sm">
          <option>30s</option>
          <option>1m</option>
          <option>5m</option>
        </select>

        <div className="flex items-center gap-1 border border-border rounded-lg p-1">
          <button className="p-2 hover:bg-accent rounded-md transition-colors">
            <LayoutGrid className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="p-2 hover:bg-accent rounded-md transition-colors">
            <RefreshCw className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        <button
          onClick={toggleTheme}
          className="p-2 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-slate-600" />
          )}
        </button>
      </div>
    </header>
  );
}
