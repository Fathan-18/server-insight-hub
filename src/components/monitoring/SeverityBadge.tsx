import { SeverityLevel } from '@/types/monitoring';
import { cn } from '@/lib/utils';

interface SeverityBadgeProps {
  severity: SeverityLevel;
  className?: string;
}

const severityConfig: Record<SeverityLevel, { label: string; className: string }> = {
  disaster: { label: 'Disaster', className: 'severity-disaster' },
  high: { label: 'High', className: 'severity-high' },
  warning: { label: 'Warning', className: 'severity-warning' },
  info: { label: 'Info', className: 'severity-info' },
  ok: { label: 'OK', className: 'severity-ok' },
};

export function SeverityBadge({ severity, className }: SeverityBadgeProps) {
  const config = severityConfig[severity];

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border',
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
