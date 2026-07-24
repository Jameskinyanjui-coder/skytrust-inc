'use client';

import { useEffect, useRef, useState } from 'react';
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { AlertTriangle, CheckCircle, Globe } from 'lucide-react';
import styles from './ThreatWidget.module.css';

// Generate mock health data for last 24h
function generateVelocityData() {
  return Array.from({ length: 24 }, (_, i) => ({
    hour: `${i}:00`,
    metrics: Math.floor(Math.random() * 50 + 20 + (i > 8 && i < 18 ? 40 : 0)),
  }));
}

const logTemplates = [
  'Database backup completed successfully',
  'New node provisioned in us-east-1',
  'Deployment successful (v2.4.1)',
  'Auto-scaling triggered (high load)',
  'Cache hit ratio 99.4%',
  'Latency stabilized <40ms',
  'Zero-downtime migration finished',
  'SSL certificates rotated',
  'Memory usage optimized',
  'API rate limits adjusted',
];

const origins = ['US-East', 'EU-West', 'AP-South', 'US-West', 'EU-Central', 'AP-East'];
const severities: Array<'success' | 'info' | 'warning'> = ['success', 'info', 'warning'];

function randomLog() {
  return {
    id: Math.random(),
    msg: logTemplates[Math.floor(Math.random() * logTemplates.length)],
    origin: origins[Math.floor(Math.random() * origins.length)],
    severity: severities[Math.floor(Math.random() * severities.length)],
    time: `${Math.floor(Math.random() * 59)}s ago`,
  };
}

export default function ThreatWidget() {
  const [data, setData] = useState<any[]>([]);
  const [logs, setLogs] = useState<any[]>([]);
  const [totalMetrics, setTotalMetrics] = useState(1450);
  const [isMounted, setIsMounted] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setIsMounted(true);
    setData(generateVelocityData());
    setLogs(Array.from({ length: 5 }, randomLog));
    
    intervalRef.current = setInterval(() => {
      setLogs(prev => [randomLog(), ...prev.slice(0, 4)]);
      setTotalMetrics(prev => prev + Math.floor(Math.random() * 2 + 1));
    }, 2500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '48px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Live Operations</div>
          <h2 className="section-title">System Health & Velocity</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Our global infrastructure and deployment pipelines operate 24/7. Here's a live view of our systems at work.
          </p>
        </div>

        {!isMounted ? (
          <div style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)' }}>
            <span style={{ color: 'var(--color-text-muted)' }}>Loading live telemetry...</span>
          </div>
        ) : (
          <div className={styles.dashboard}>
          {/* Header bar */}
          <div className={styles.dashHeader}>
            <div className={styles.dashTitle}>
              <span className="pulse-dot" />
              <span>Live Infrastructure Monitor</span>
            </div>
            <div className={styles.dashStats}>
              <div className={styles.dashStat}>
                <span className={styles.dashStatVal} style={{ color: 'var(--color-accent)' }}>{totalMetrics.toLocaleString()}</span>
                <span className={styles.dashStatLabel}>Deployments Today</span>
              </div>
              <div className={styles.dashStat}>
                <span className={styles.dashStatVal} style={{ color: 'var(--color-success)' }}>99.99%</span>
                <span className={styles.dashStatLabel}>Uptime</span>
              </div>
              <div className={styles.dashStat}>
                <span className={styles.dashStatVal}>32ms</span>
                <span className={styles.dashStatLabel}>Avg. Latency</span>
              </div>
            </div>
          </div>

          <div className={styles.dashBody}>
            {/* Chart */}
            <div className={styles.chartSection}>
              <div className={styles.chartLabel}>System Activity — Last 24h</div>
              <div className={styles.chart}>
                <ResponsiveContainer width="100%" height={180}>
                  <LineChart data={data}>
                    <XAxis dataKey="hour" tick={{ fill: 'var(--color-text-muted)', fontSize: 10 }} interval={3} axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{ background: 'var(--color-bg-primary)', border: '1px solid var(--color-border)', borderRadius: '8px', color: 'var(--color-text-primary)' }}
                      labelStyle={{ color: 'var(--color-text-secondary)' }}
                    />
                    <Line type="monotone" dataKey="metrics" stroke="var(--color-accent)" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Log feed */}
            <div className={styles.logSection}>
              <div className={styles.chartLabel}>Live System Feed</div>
              <div className={styles.logs}>
                {logs.map((log) => (
                  <div key={log.id} className={`${styles.logEntry} ${styles[log.severity]}`}>
                    <div className={styles.logLeft}>
                      {log.severity === 'warning' ? (
                        <AlertTriangle size={14} style={{ color: 'var(--color-warning)', flexShrink: 0 }} />
                      ) : (
                        <CheckCircle size={14} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                      )}
                      <span className={styles.logMsg}>{log.msg}</span>
                    </div>
                    <div className={styles.logRight}>
                      <Globe size={12} />
                      <span className={styles.logOrigin}>{log.origin}</span>
                      <span className={styles.logTime}>{log.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* World map dots mock */}
            <div className={styles.mapSection}>
              <div className={styles.chartLabel}>Global Edge Network</div>
              <div className={styles.mapMock}>
                <svg viewBox="0 0 400 220" className={styles.mapSvg} aria-hidden="true">
                  <rect width="400" height="220" fill="transparent" />
                  {/* Simple continent blobs */}
                  <ellipse cx="100" cy="100" rx="60" ry="40" fill="var(--color-border-light)" opacity="0.6" />
                  <ellipse cx="200" cy="95" rx="80" ry="50" fill="var(--color-border-light)" opacity="0.6" />
                  <ellipse cx="310" cy="100" rx="55" ry="45" fill="var(--color-border-light)" opacity="0.6" />
                  <ellipse cx="200" cy="160" rx="30" ry="20" fill="var(--color-border-light)" opacity="0.6" />
                  <ellipse cx="130" cy="140" rx="20" ry="15" fill="var(--color-border-light)" opacity="0.5" />
                  {/* Active nodes */}
                  {[
                    { cx: 310, cy: 90 }, { cx: 285, cy: 80 }, { cx: 170, cy: 80 }, { cx: 195, cy: 75 },
                    { cx: 220, cy: 100 }, { cx: 100, cy: 95 }, { cx: 315, cy: 110 }, { cx: 150, cy: 105 },
                  ].map((d, i) => (
                    <g key={i}>
                      <circle cx={d.cx} cy={d.cy} r="3" fill="var(--color-accent)" opacity="0.9">
                        <animate attributeName="r" values="3;7;3" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.9;0.2;0.9" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
                      </circle>
                      <circle cx={d.cx} cy={d.cy} r="2" fill="var(--color-accent)" />
                    </g>
                  ))}
                  {/* Primary Data Center */}
                  <circle cx="110" cy="95" r="5" fill="var(--color-success)">
                    <animate attributeName="r" values="5;9;5" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="110" cy="95" r="3" fill="var(--color-success)" />
                </svg>
                <div className={styles.mapLegend}>
                  <span><span style={{ color: 'var(--color-accent)' }}>●</span> Edge Node</span>
                  <span><span style={{ color: 'var(--color-success)' }}>●</span> Primary Cluster</span>
                </div>
              </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
