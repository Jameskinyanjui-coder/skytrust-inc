'use client';

import { useState } from 'react';
import { ShieldCheck, Lock, FileCheck, Server, CheckCircle2 } from 'lucide-react';
import styles from './SecurityMatrix.module.css';

const pillars = [
  {
    id: 'zerotrust',
    label: 'Zero Trust Security',
    icon: Lock,
    title: 'Zero Trust Architecture (ZTA)',
    desc: 'Eliminate implicit trust across your entire infrastructure. Every user, device, and API request is authenticated, authorized, and continuously validated.',
    features: [
      'Micro-segmentation for network isolation',
      'Identity-first access control (IAM & PAM)',
      'Continuous threat & anomaly evaluation',
      'Encrypted transit & resting data tunnels',
    ],
    highlights: [
      { num: '01', title: 'Identity-First', desc: 'Every request verified before access is granted' },
      { num: '02', title: 'Network Isolation', desc: 'Micro-segmented zones prevent lateral movement' },
      { num: '03', title: 'Continuous Validation', desc: 'Ongoing re-authentication throughout sessions' },
      { num: '04', title: 'Instant Enforcement', desc: 'Policies applied at the network edge in real time' },
    ],
  },
  {
    id: 'compliance',
    label: 'Compliance Readiness',
    icon: FileCheck,
    title: 'Regulatory & Audit Compliance',
    desc: 'Streamline regulatory audits with pre-mapped security controls, automated evidence collection, and ongoing audit readiness.',
    features: [
      'SOC 2 Type II & ISO 27001 readiness',
      'HIPAA & PHI patient data safeguards',
      'PCI-DSS cardholder environment segmentation',
      'Automated audit report generation',
    ],
    highlights: [
      { num: '01', title: 'SOC 2 Type II', desc: 'Full AICPA audit readiness & certification support' },
      { num: '02', title: 'HIPAA Assured', desc: 'PHI protection and breach notification protocols' },
      { num: '03', title: 'PCI-DSS Level 1', desc: 'Cardholder environment segmentation & scanning' },
      { num: '04', title: 'Auto Reporting', desc: 'Automated evidence packs generated on demand' },
    ],
  },
  {
    id: 'threats',
    label: 'Threat Monitoring',
    icon: ShieldCheck,
    title: 'Proactive SOC & Threat Hunting',
    desc: 'Our 24/7 Security Operations Center monitors your ecosystem around the clock to detect, isolate, and neutralize advanced threats before impact.',
    features: [
      'Real-time SIEM log correlation',
      'Endpoint Detection & Response (EDR)',
      'Threat intel feed integration',
      '15-minute response SLA',
    ],
    highlights: [
      { num: '01', title: 'Always-On SOC', desc: 'Round-the-clock threat detection & analyst review' },
      { num: '02', title: 'Rapid Response', desc: 'Confirmed incidents triaged within 15 minutes' },
      { num: '03', title: 'Threat Intel', desc: 'Global feeds enrich detection with attacker TTPs' },
      { num: '04', title: 'EDR Coverage', desc: 'Endpoint telemetry correlated with network data' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud Resilience',
    icon: Server,
    title: 'Multi-Cloud Security Posture',
    desc: 'Harden your infrastructure across AWS, Azure, and GCP. We eliminate misconfigurations and secure cloud-native container workloads.',
    features: [
      'Cloud Security Posture Management (CSPM)',
      'Kubernetes & Docker container hardening',
      'Infrastructure as Code (IaC) auditing',
      'Disaster recovery & immutable backups',
    ],
    highlights: [
      { num: '01', title: 'Multi-Cloud', desc: 'Unified security posture across AWS, Azure & GCP' },
      { num: '02', title: 'Container Security', desc: 'Kubernetes & Docker runtime hardening' },
      { num: '03', title: 'IaC Auditing', desc: 'Security gates embedded in Terraform pipelines' },
      { num: '04', title: 'Immutable Backups', desc: 'Air-gapped, encrypted disaster recovery snapshots' },
    ],
  },
];

export default function SecurityMatrix() {
  const [activeTab, setActiveTab] = useState('zerotrust');
  const activePillar = pillars.find(p => p.id === activeTab) || pillars[0];
  const IconComponent = activePillar.icon;

  return (
    <section className={styles.section} aria-label="Cybersecurity and Compliance Framework">
      <div className="container">
        <div className={styles.header}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Defense Architecture</div>
          <h2 className="section-title">Enterprise Cybersecurity &amp; Compliance Framework</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Engineered to meet rigorous regulatory mandates (SOC 2, ISO 27001, HIPAA, PCI-DSS) and protect mission-critical cloud infrastructure against advanced threats.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={styles.tabNav} role="tablist">
          {pillars.map(p => {
            const PIcon = p.icon;
            return (
              <button
                key={p.id}
                role="tab"
                aria-selected={activeTab === p.id}
                className={`${styles.tabBtn} ${activeTab === p.id ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(p.id)}
              >
                <PIcon size={18} />
                <span>{p.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Grid */}
        <div className={styles.displayGrid}>
          {/* Main Pillar Card */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <IconComponent size={28} />
            </div>
            <h3 className={styles.cardTitle}>{activePillar.title}</h3>
            <p className={styles.cardDesc}>{activePillar.desc}</p>
            <div className={styles.featureList}>
              {activePillar.features.map((feat, idx) => (
                <div key={idx} className={styles.featureItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights Panel */}
          <div className={styles.badgeGrid}>
            {activePillar.highlights.map((h, idx) => (
              <div key={idx} className={styles.badgeBox}>
                <span className={styles.badgeNum}>{h.num}</span>
                <span className={styles.badgeStat}>{h.title}</span>
                <span className={styles.badgeLabel}>{h.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
