'use client';

import Link from 'next/link';
import { ArrowRight, ChevronRight, ShieldCheck, Code2 } from 'lucide-react';
import styles from './Hero.module.css';

const trustedBy = [
  'Microsoft', 'Amazon Web Services', 'Google Cloud', 'Cisco', 'IBM',
  'Oracle', 'Salesforce', 'Dell Technologies', 'Palo Alto Networks', 'CrowdStrike',
];

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Enterprise Cybersecurity and Software Engineering">
      <div className={`container ${styles.inner}`}>
        {/* Left: Headline & Actions */}
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Enterprise Cybersecurity &amp;<br />
            <span className="text-gradient">Software Engineering Services</span>
          </h1>

          <p className={styles.subtitle}>
            SkyTrust Global Services Inc delivers managed 24/7 cybersecurity operations, cloud architecture, compliance consulting (SOC 2, ISO 27001), and custom enterprise software development, built with zero compromise.
          </p>

          <div className={styles.ctas}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Get Free Security Assessment <ArrowRight size={18} />
            </Link>
            <Link href="/services" className="btn btn-secondary btn-lg">
              Explore Our Services <ChevronRight size={16} />
            </Link>
          </div>
        </div>

        {/* Right: Hero Image Container */}
        <div className={styles.imageWrap}>
          <div className={styles.imageCard}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="SkyTrust Enterprise Cybersecurity & Software Engineering Team"
              className={styles.image}
            />
            <div className={styles.imageOverlay} />

            {/* Overlay feature badges */}
            <div className={`${styles.badge} ${styles.badgeTop}`}>
              <ShieldCheck size={16} className={styles.badgeIcon} />
              <span>SOC 2 Type II Certified</span>
            </div>

            <div className={`${styles.badge} ${styles.badgeBottom}`}>
              <Code2 size={16} className={styles.badgeIcon} />
              <span>ISO 27001 Aligned Engineering</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
