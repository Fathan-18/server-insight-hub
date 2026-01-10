import { ElasticLog } from '@/types/monitoring';
import { cn } from '@/lib/utils';

interface LogLevelBadgeProps {
  level: ElasticLog['level'];
}

const levelConfig: Record<ElasticLog['level'], { className: string }> = {
  INFO: { className: 'text-blue-400' },
  WARN: { className: 'text-yellow-400' },
  CRIT: { className: 'text-red-400' },
  ERROR: { className: 'text-red-400' },
};

export function LogLevelBadge({ level }: LogLevelBadgeProps) {
  const config = levelConfig[level];

  return (
    <span className={cn('font-bold font-mono text-xs', config.className)}>
      {level}
    </span>
  );
}
