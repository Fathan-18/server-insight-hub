import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

interface SecurityChartProps {
  data: { hour: string; events: number }[];
}

export function SecurityChart({ data }: SecurityChartProps) {
  const maxEvents = Math.max(...data.map((d) => d.events));
  const spikeIndex = data.findIndex((d) => d.events === maxEvents);

  return (
    <div className="glass-card p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="font-semibold text-lg">Security Events</h2>
          <p className="text-xs text-muted-foreground">Last 24 Hours</p>
        </div>
        <div className="flex items-center gap-1.5 text-status-online text-sm">
          <TrendingUp className="w-4 h-4" />
          <span>+12% Trend</span>
        </div>
      </div>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorEvents" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="hour"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(215, 20%, 55%)', fontSize: 10 }}
              interval="preserveStartEnd"
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(222, 47%, 11%)',
                border: '1px solid hsl(217, 33%, 20%)',
                borderRadius: '8px',
                color: 'hsl(210, 40%, 98%)',
              }}
              labelStyle={{ color: 'hsl(215, 20%, 55%)' }}
            />
            <Area
              type="monotone"
              dataKey="events"
              stroke="hsl(217, 91%, 60%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorEvents)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {spikeIndex >= 0 && (
        <div className="mt-2 text-xs text-muted-foreground">
          <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2" />
          {data[spikeIndex].hour} - Spike Detected ({maxEvents} events)
        </div>
      )}
    </div>
  );
}
