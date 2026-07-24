import { Metadata } from 'next';
import { Globe } from 'lucide-react';
import { teamMembers } from '@/lib/data';
import CtaBanner from '@/components/layout/CtaBanner/CtaBanner';
import styles from './Team.module.css';

export const metadata: Metadata = {
  title: 'Our Team | SkyTrust',
  description: 'Meet the cybersecurity experts, analysts, and engineers defending SkyTrust clients.',
};

export default function TeamPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Leadership & Experts</div>
            <h1 className={styles.title}>Defenders, Not Just Consultants</h1>
            <p className={styles.subtitle}>
              Our team consists of former intelligence officers, enterprise CISOs, and elite threat hunters who have defended the world's most targeted networks.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {teamMembers.map((member) => (
              <div key={member.name} className={styles.card}>
                <div className={styles.avatarWrap}>
                  {member.image ? (
                    <img src={member.image} alt={member.name} className={styles.avatarImage} />
                  ) : (
                    <div className={styles.avatarPlaceholder}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <div className={styles.title}>{member.title}</div>
                  <p className={styles.bio}>{member.bio}</p>
                  
                  <a href={member.linkedin} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                    <Globe size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
