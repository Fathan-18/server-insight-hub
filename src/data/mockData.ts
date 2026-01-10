import { ZabbixProblem, ElasticLog, HostStatus, SecurityMetrics, DashboardStats } from '@/types/monitoring';

export const mockStats: DashboardStats = {
  totalHosts: 48,
  serversUp: 46,
  serversDown: 2,
  upPercentage: 96,
};

export const mockSecurityMetrics: SecurityMetrics = {
  bruteForce: 124,
  ddosDetect: 0,
  authFails: 15,
};

export const mockProblems: ZabbixProblem[] = [
  {
    id: '1',
    host: 'API-GW-02',
    problem: 'High Latency (>5s)',
    severity: 'disaster',
    timestamp: '14m ago',
    duration: '14m',
  },
  {
    id: '2',
    host: 'WEB03-FRONT',
    problem: 'High CPU Load (89%)',
    severity: 'high',
    timestamp: '45m ago',
    duration: '45m',
  },
  {
    id: '3',
    host: 'DB-MASTER-01',
    problem: 'Disk Usage > 80%',
    severity: 'warning',
    timestamp: '1h ago',
    duration: '1h',
  },
  {
    id: '4',
    host: 'CACHE-NODE-03',
    problem: 'Memory Usage High',
    severity: 'warning',
    timestamp: '2h ago',
    duration: '2h',
  },
  {
    id: '5',
    host: 'BACKUP-SRV-01',
    problem: 'Backup Job Delayed',
    severity: 'info',
    timestamp: '3h ago',
    duration: '3h',
  },
];

export const mockLogs: ElasticLog[] = [
  {
    id: '1',
    timestamp: '14:02:44',
    level: 'INFO',
    message: 'Heartbeat received from node-alpha-04',
  },
  {
    id: '2',
    timestamp: '14:02:42',
    level: 'WARN',
    message: 'Failed SSH Login attempt root@192.168.1.45',
  },
  {
    id: '3',
    timestamp: '14:02:30',
    level: 'INFO',
    message: 'Elasticsearch index rotated [logs-2024-01]',
  },
  {
    id: '4',
    timestamp: '14:01:55',
    level: 'CRIT',
    message: 'Firewall dropped packet from blocked IP 203.0.113.5',
  },
  {
    id: '5',
    timestamp: '14:01:12',
    level: 'INFO',
    message: 'User admin authenticated successfully',
  },
  {
    id: '6',
    timestamp: '14:00:58',
    level: 'WARN',
    message: 'High memory usage detected on process java',
  },
  {
    id: '7',
    timestamp: '14:00:45',
    level: 'INFO',
    message: 'Scheduled backup started',
  },
  {
    id: '8',
    timestamp: '13:59:22',
    level: 'INFO',
    message: 'Connection established to Zabbix Server',
  },
  {
    id: '9',
    timestamp: '13:58:10',
    level: 'WARN',
    message: 'SSL certificate expiring in 7 days for api.example.com',
  },
  {
    id: '10',
    timestamp: '13:57:33',
    level: 'ERROR',
    message: 'Database connection timeout on db-replica-02',
  },
];

export const mockHosts: HostStatus[] = [
  {
    id: '1',
    hostname: 'srv-alpha-01',
    status: 'online',
    cpu: 45,
    ram: 68,
    uptime: '14d 2h',
  },
  {
    id: '2',
    hostname: 'db-cluster-04',
    status: 'online',
    cpu: 22,
    ram: 85,
    uptime: '45d 12h',
  },
  {
    id: '3',
    hostname: 'sql-worker-02',
    status: 'offline',
    cpu: 0,
    ram: 0,
    uptime: '-',
  },
  {
    id: '4',
    hostname: 'web-lb-01',
    status: 'online',
    cpu: 78,
    ram: 49,
    uptime: '3d 4h',
  },
  {
    id: '5',
    hostname: 'cache-redis-01',
    status: 'online',
    cpu: 12,
    ram: 34,
    uptime: '28d 6h',
  },
  {
    id: '6',
    hostname: 'api-gateway-01',
    status: 'warning',
    cpu: 91,
    ram: 72,
    uptime: '7d 8h',
  },
];

export const mockSecurityEvents = [
  { hour: '18:00', events: 12 },
  { hour: '19:00', events: 8 },
  { hour: '20:00', events: 15 },
  { hour: '21:00', events: 22 },
  { hour: '22:00', events: 45 },
  { hour: '23:00', events: 28 },
  { hour: '00:00', events: 18 },
  { hour: '01:00', events: 10 },
  { hour: '02:00', events: 6 },
  { hour: '03:00', events: 4 },
  { hour: '04:00', events: 8 },
  { hour: '05:00', events: 14 },
];
