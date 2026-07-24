import { Metadata } from 'next';
import { faqData } from '@/lib/data';
import CtaBanner from '@/components/layout/CtaBanner/CtaBanner';
import styles from './Faq.module.css';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | SkyTrust',
  description: 'Answers to common questions about SkyTrust services, pricing, and compliance.',
};

export default function FaqPage() {
  const sections = [
    { id: 'general', title: 'General & Onboarding', data: faqData.general },
    { id: 'pricing', title: 'Pricing & Plans', data: faqData.pricing },
    { id: 'technical', title: 'Technical Details', data: faqData.technical },
    { id: 'compliance', title: 'Compliance & Audits', data: faqData.compliance },
  ];

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Support</div>
            <h1 className={styles.title}>Frequently Asked Questions</h1>
            <p className={styles.subtitle}>
              Everything you need to know about partnering with SkyTrust.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            
            {/* Sidebar Nav */}
            <nav className={styles.sidebar}>
              <div className={styles.sidebarSticky}>
                <h3 className={styles.navTitle}>Categories</h3>
                <ul className={styles.navList}>
                  {sections.map(sec => (
                    <li key={sec.id}>
                      <a href={`#${sec.id}`} className={styles.navLink}>{sec.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            {/* Content */}
            <div className={styles.content}>
              {sections.map(sec => (
                <div key={sec.id} id={sec.id} className={styles.faqSection}>
                  <h2 className={styles.sectionTitle}>{sec.title}</h2>
                  <div className={styles.qnaList}>
                    {sec.data.map((item, i) => (
                      <div key={i} className={styles.qnaItem}>
                        <h3 className={styles.question}>{item.q}</h3>
                        <p className={styles.answer}>{item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
