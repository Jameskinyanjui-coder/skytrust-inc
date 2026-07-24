'use client';

import { Shield, ShieldAlert, ShieldCheck, CheckCircle } from 'lucide-react';
import styles from './TrustBar.module.css';

const logos = [
  { name: 'Acme Corp', icon: Shield },
  { name: 'Global Tech', icon: ShieldAlert },
  { name: 'Finance Hub', icon: ShieldCheck },
  { name: 'HealthPlus', icon: Shield },
  { name: 'CloudNet', icon: ShieldAlert },
  { name: 'SecureSystems', icon: ShieldCheck },
];

const badges = ['SOC 2 Type II', 'ISO 27001', 'HIPAA', 'PCI-DSS', 'GDPR Ready'];

export default function TrustBar() {
  return (
    <div className={styles.trustBar}>
      <div className="container">
        <div className={styles.inner}>
          
          <div className={styles.label}>
            Trusted by security-conscious organizations
          </div>

          <div className={styles.carouselWrap}>
            <div className={styles.carousel}>
              {/* Double array for seamless infinite scroll */}
              {[...logos, ...logos].map((logo, i) => {
                const Icon = logo.icon;
                return (
                  <div key={i} className={styles.logoItem}>
                    <Icon size={20} className={styles.logoIcon} />
                    <span className={styles.logoText}>{logo.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.badges}>
            {badges.map(badge => (
              <div key={badge} className={styles.badgeItem}>
                <CheckCircle size={14} className={styles.badgeIcon} />
                <span>{badge}</span>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}
