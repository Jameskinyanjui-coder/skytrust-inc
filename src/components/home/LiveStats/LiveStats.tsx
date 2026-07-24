'use client';

import styles from './LiveStats.module.css';

const items = [
  { name: 'SOC 2 Type II', icon: '🛡️', issuer: 'AICPA', theme: styles.cardBlue },
  { name: 'Microsoft Partner', icon: '💻', issuer: 'Cloud Solutions', theme: styles.cardIndigo },
  { name: 'ISO 27001', icon: '🔒', issuer: 'Certified Security', theme: styles.cardPurple },
  { name: 'AWS Advanced', icon: '☁️', issuer: 'Cloud Architecture', theme: styles.cardAmber },
  { name: 'GDPR Compliant', icon: '🇪🇺', issuer: 'EU Regulation', theme: styles.cardCyan },
  { name: 'Google Cloud', icon: '⚡', issuer: 'Enterprise Partner', theme: styles.cardBlue },
  { name: 'PCI DSS Level 1', icon: '💳', issuer: 'Payment Security', theme: styles.cardEmerald },
  { name: 'HIPAA Ready', icon: '🏥', issuer: 'Healthcare PHI', theme: styles.cardRose },
  { name: 'CrowdStrike', icon: '🦅', issuer: 'Falcon Partner', theme: styles.cardPurple },
  { name: 'NIST CSF', icon: '🏛️', issuer: 'Framework Aligned', theme: styles.cardAmber },
  { name: 'CMMC 2.0', icon: '⚙️', issuer: 'DoD Certified', theme: styles.cardIndigo },
];

// Duplicate array for infinite marquee
const track = [...items, ...items];

export default function LiveStats() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.marqueeWrapper} aria-label="Trusted partners and compliance certifications">
        <div className={styles.marqueeTrack}>
          {track.map((item, i) => (
            <div key={i} className={`${styles.certCard} ${item.theme}`}>
              <span className={styles.certIcon} aria-hidden="true">{item.icon}</span>
              <div className={styles.certText}>
                <span className={styles.certName}>{item.name}</span>
                <span className={styles.certIssuer}>{item.issuer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
