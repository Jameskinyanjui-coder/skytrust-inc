import { Metadata } from 'next';
import Image from 'next/image';
import { Shield, Users, Globe, Award } from 'lucide-react';
import CtaBanner from '@/components/layout/CtaBanner/CtaBanner';
import styles from './Company.module.css';

export const metadata: Metadata = {
  title: 'About SkyTrust | Our Mission & History',
  description: 'Learn about SkyTrust\'s mission to democratize enterprise-grade cybersecurity for organizations of all sizes.',
};

const stats = [
  { value: '250+', label: 'Enterprise Clients', icon: Building2 }, // wait, imported wrong icon
  { value: '800M+', label: 'Events Analyzed Daily', icon: Activity },
  { value: '11min', label: 'Avg. Response Time', icon: Clock },
  { value: 'Zero', label: 'Breaches on Our Watch', icon: ShieldCheck },
];
// Wait, I should import these. Let me fix the imports.
import { Building2, Activity, Clock, ShieldCheck } from 'lucide-react';

export default function CompanyPage() {
  const correctStats = [
    { value: '250+', label: 'Enterprise Clients', icon: Building2 },
    { value: '800M+', label: 'Events Analyzed Daily', icon: Activity },
    { value: '11min', label: 'Avg. Response Time', icon: Clock },
    { value: 'Zero', label: 'Breaches on Our Watch', icon: ShieldCheck },
  ];

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className="section-label" style={{ justifyContent: 'center' }}>About SkyTrust</div>
            <h1 className={styles.title}>Securing the Digital<br/>Frontier</h1>
            <p className={styles.subtitle}>
              We believe that enterprise-grade cybersecurity should not be a luxury reserved for the Fortune 500. It is a fundamental requirement for operating in the modern economy.
            </p>
          </div>
        </div>
        <div className={styles.heroGlow} />
      </section>

      {/* Stats Row */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {correctStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className={styles.statBox}>
                  <Icon size={24} className={styles.statIcon} />
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <h2 className={styles.sectionTitle}>The SkyTrust Story</h2>
              <p>
                Founded in 2018 by former intelligence community analysts and enterprise CISOs, SkyTrust was built to solve a critical market failure.
              </p>
              <p>
                As attackers became increasingly sophisticated, deploying automated ransomware and exploiting zero-days, the defense industry responded by creating highly complex, expensive point solutions. As a result, only the largest corporations with massive security budgets and sprawling SOC teams could defend themselves effectively.
              </p>
              <p>
                Mid-market and growing enterprises were left behind, forced to rely on consumer-grade antivirus and IT managed service providers (MSPs) who lacked true cybersecurity expertise.
              </p>
              <p>
                <strong>We built SkyTrust to level the playing field.</strong>
              </p>
              <p>
                By combining an elite team of security practitioners with a highly automated, AI-augmented SOC platform, we deliver Fortune 500 security capabilities as a predictable, scalable service. Today, we protect over 250 organizations, securing billions of dollars in revenue and millions of patient records.
              </p>
            </div>
            
            <div className={styles.imageGrid}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.imageText}>HQ Office</span>
              </div>
              <div className={styles.imagePlaceholderAlt}>
                <span className={styles.imageText}>SOC Floor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '64px' }}>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <Shield size={32} className={styles.valueIcon} />
              <h3>Assume Breach</h3>
              <p>We design defenses under the assumption that the perimeter has already fallen. Zero Trust isn't just a buzzword; it's our architectural foundation.</p>
            </div>
            <div className={styles.valueCard}>
              <Users size={32} className={styles.valueIcon} />
              <h3>Partnership Over Profit</h3>
              <p>We do not upsell unnecessary tools. We recommend only the controls that measurably reduce your specific risk profile.</p>
            </div>
            <div className={styles.valueCard}>
              <Globe size={32} className={styles.valueIcon} />
              <h3>Radical Transparency</h3>
              <p>In an industry filled with FUD (Fear, Uncertainty, Doubt) and jargon, we communicate plainly. You always know exactly what we are doing and why.</p>
            </div>
            <div className={styles.valueCard}>
              <Award size={32} className={styles.valueIcon} />
              <h3>Continuous Excellence</h3>
              <p>Threat actors constantly evolve. So do we. We dedicate 20% of our analysts' time to training, research, and offensive skill development.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
