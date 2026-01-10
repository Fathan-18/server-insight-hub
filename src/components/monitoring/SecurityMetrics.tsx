import { Shield, Zap, KeyRound } from 'lucide-react';
import { SecurityMetrics as SecurityMetricsType } from '@/types/monitoring';

interface SecurityMetricsProps {
  metrics: SecurityMetricsType;
}

export function SecurityMetrics({ metrics }: SecurityMetricsProps) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="metric-card">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground uppercase tracking-wide">Brute Force</span>
          <Shield className="w-4 h-4 text-muted-foreground" />
        </div>
        <p className={`text-3xl font-bold ${metrics.bruteForce > 100 ? 'text-status-warning' : 'text-foreground'}`}>
          {metrics.bruteForce}
        </p>
      </div>

      <div className="metric-card">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground uppercase tracking-wide">DDoS Detect</span>
          <Zap className="w-4 h-4 text-muted-foreground" />
        </div>
        <p className={`text-3xl font-bold ${metrics.ddosDetect > 0 ? 'text-status-offline' : 'text-status-online'}`}>
          {metrics.ddosDetect}
        </p>
      </div>

      <div className="metric-card">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground uppercase tracking-wide">Auth Fails</span>
          <KeyRound className="w-4 h-4 text-muted-foreground" />
        </div>
        <p className={`text-3xl font-bold ${metrics.authFails > 10 ? 'text-status-warning' : 'text-foreground'}`}>
          {metrics.authFails}
        </p>
      </div>
    </div>
  );
}
