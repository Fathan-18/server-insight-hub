export type SeverityLevel = 'disaster' | 'high' | 'warning' | 'info' | 'ok';

export interface ZabbixProblem {
  id: string;
  host: string;
  problem: string;
  severity: SeverityLevel;
  timestamp: string;
  duration: string;
}

export interface ElasticLog {
  id: string;
  timestamp: string;
  level: 'INFO' | 'WARN' | 'CRIT' | 'ERROR';
  message: string;
  source?: string;
}

export interface HostStatus {
  id: string;
  hostname: string;
  status: 'online' | 'offline' | 'warning';
  cpu: number;
  ram: number;
  uptime: string;
}

export interface SecurityMetrics {
  bruteForce: number;
  ddosDetect: number;
  authFails: number;
}

export interface DashboardStats {
  totalHosts: number;
  serversUp: number;
  serversDown: number;
  upPercentage: number;
}
