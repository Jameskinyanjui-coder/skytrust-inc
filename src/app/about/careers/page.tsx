import { Metadata } from 'next';
import { ArrowRight, MapPin } from 'lucide-react';
import { openRoles } from '@/lib/data';
import styles from './Careers.module.css';

export const metadata: Metadata = {
  title: 'Careers | Join SkyTrust',
  description: 'Join the team defending the digital frontier. Explore open positions at SkyTrust.',
};

export default function CareersPage() {
  // Group roles by department
  const rolesByDept = openRoles.reduce((acc, role) => {
    if (!acc[role.department]) acc[role.department] = [];
    acc[role.department].push(role);
    return acc;
  }, {} as Record<string, typeof openRoles>);

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Careers</div>
            <h1 className={styles.title}>Do the Most Meaningful Work of Your Career</h1>
            <p className={styles.subtitle}>
              We are a team of builders, researchers, and defenders united by a single mission: to protect the organizations that power our world.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <h3>Remote First, Always</h3>
              <p>Work from anywhere in the US or UK. We care about outcomes, not office hours.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>20% Research Time</h3>
              <p>Analysts and engineers dedicate one day a week to research, training, and open-source contribution.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Comprehensive Care</h3>
              <p>100% covered premiums for medical, dental, and vision. Unlimited PTO (mandatory 3 weeks minimum).</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '64px' }}>
            <h2 className="section-title">Open Positions</h2>
          </div>
          
          <div className={styles.rolesContainer}>
            {Object.entries(rolesByDept).map(([dept, roles]) => (
              <div key={dept} className={styles.deptSection}>
                <h3 className={styles.deptTitle}>{dept}</h3>
                <div className={styles.roleList}>
                  {roles.map(role => (
                    <a key={role.title} href="#" className={styles.roleCard}>
                      <div className={styles.roleInfo}>
                        <h4 className={styles.roleTitle}>{role.title}</h4>
                        <div className={styles.roleMeta}>
                          <span className={styles.roleType}>{role.type}</span>
                          <span className={styles.roleLocation}>
                            <MapPin size={14} /> {role.location}
                          </span>
                        </div>
                      </div>
                      <div className={styles.roleAction}>
                        Apply <ArrowRight size={16} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
