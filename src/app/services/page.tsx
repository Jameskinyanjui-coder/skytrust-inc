import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Shield, Cloud, FileCheck, Activity, Target, Zap, Code, Server } from 'lucide-react';
import { services } from '@/lib/data';
import CtaBanner from '@/components/layout/CtaBanner/CtaBanner';
import styles from './Services.module.css';

export const metadata: Metadata = {
  title: 'All Services | SkyTrust Inc.',
  description: 'Explore SkyTrust\'s comprehensive suite of software engineering and cybersecurity services, from custom development to 24/7 threat monitoring.',
};

const iconMap: Record<string, React.ElementType> = {
  Shield, Cloud, FileCheck, Activity, Target, Zap, Code, Server,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Services</div>
            <h1 className={styles.title}>Software & Cybersecurity<br />Services Built for Scale</h1>
            <p className={styles.subtitle}>
              From custom software engineering to enterprise-grade security operations, SkyTrust delivers end-to-end solutions tailored to your business.
            </p>
          </div>
        </div>
        <div className={styles.heroGlow} />
      </section>

      {/* Services List */}
      <section className="section">
        <div className="container">
          <div className={styles.servicesList}>
            {services.map((svc, index) => {
              const Icon = iconMap[svc.icon] || Shield;
              const isEven = index % 2 === 0;
              
              return (
                <div key={svc.slug} className={`${styles.serviceItem} ${isEven ? '' : styles.serviceItemReverse}`}>
                  <div className={styles.serviceContent}>
                    <div className={styles.iconWrap}>
                      <Icon size={28} />
                    </div>
                    <h2 className={styles.serviceName}>{svc.name}</h2>
                    <div className={styles.serviceTagline}>{svc.tagline}</div>
                    <p className={styles.serviceDesc}>{svc.description}</p>
                    
                    <ul className={styles.featureList}>
                      {svc.features.slice(0, 4).map((feat, i) => (
                        <li key={i} className={styles.featureItem}>
                          <span className="accent-dot" style={{ flexShrink: 0 }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={`/services/${svc.slug}`} className="btn btn-primary" style={{ marginTop: '32px' }}>
                      Explore {svc.name} <ArrowRight size={16} />
                    </Link>
                  </div>
                  
                  <div className={styles.serviceVisual}>
                    <div className={styles.visualCard}>
                      <div className={styles.visualPlaceholder}>
                        <Icon size={64} style={{ opacity: 0.1 }} />
                        <div className={styles.visualPattern} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

