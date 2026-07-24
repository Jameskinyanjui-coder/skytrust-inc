'use client';

import { Search, ClipboardCheck, Eye, ShieldCheck } from 'lucide-react';
import styles from './ProcessSection.module.css';

const steps = [
  {
    icon: Search,
    title: 'Assess & Audit',
    number: '01',
    desc: 'Perform comprehensive security posture reviews, penetration tests, and vulnerability assessments across cloud infrastructure and codebases.',
  },
  {
    icon: ShieldCheck,
    title: 'Harden & Protect',
    number: '02',
    desc: 'Deploy Zero Trust architectures, network firewalls, endpoint protection (EDR), and identity governance (IAM) tailored to your environment.',
  },
  {
    icon: Eye,
    title: '24/7 SOC Monitor',
    number: '03',
    desc: 'Continuous real-time SIEM monitoring, behavioral threat detection, and telemetry tracking by certified Security Operations Center analysts.',
  },
  {
    icon: ClipboardCheck,
    title: 'Respond & Recover',
    number: '04',
    desc: 'Under 15-minute SLA incident containment, threat eradication, forensic reporting, and disaster recovery execution when incidents arise.',
  },
];

const stepThemes = [
  styles.stepBlue,
  styles.stepPurple,
  styles.stepEmerald,
  styles.stepRose,
];

export default function ProcessSection() {
  return (
    <section className="section" aria-label="Our Cybersecurity Methodology">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '48px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Our Methodology</div>
          <h2 className="section-title">A Proven 4-Phase Cybersecurity Lifecycle</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Continuous, end-to-end security management that adapts dynamically as your cloud environment and threat vectors evolve.
          </p>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const themeClass = stepThemes[idx % stepThemes.length];
            return (
              <div key={step.title} className={`${styles.step} ${themeClass}`}>
                <div className={styles.stepHeader}>
                  <div className={styles.iconWrap}>
                    <Icon size={24} />
                  </div>
                  <div className={styles.stepNumber}>{step.number}</div>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
