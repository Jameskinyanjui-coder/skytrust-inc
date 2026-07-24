import { Metadata } from 'next';
import { Mail, Phone, MapPin, ShieldAlert } from 'lucide-react';
import styles from './Contact.module.css';

export const metadata: Metadata = {
  title: 'Contact Us | SkyTrust Inc.',
  description: 'Get in touch with SkyTrust Inc. for sales inquiries, software consultation, or 24/7 emergency incident support.',
};

export default function ContactPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Contact Us</div>
            <h1 className={styles.title}>Let's Secure Your Future</h1>
            <p className={styles.subtitle}>
              Whether you need a consultation or immediate help with an active security breach, our team is ready to respond.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.grid}>
            
            {/* Contact Form */}
            <div className={styles.formPanel}>
              <h2 className={styles.panelTitle}>Request Free Consultation</h2>
              <form className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name *</label>
                    <input type="text" id="firstName" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name *</label>
                    <input type="text" id="lastName" required />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="company">Company *</label>
                  <input type="text" id="company" required />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Work Email *</label>
                    <input type="email" id="email" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={4} placeholder="Tell us about your security or software needs..."></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>
                  Request Free Consultation
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className={styles.infoPanel}>
              
              {/* Phone */}
              <div className={styles.contactDetails}>
                <div className={styles.detailItem}>
                  <div className={styles.iconWrap}><Phone size={22} /></div>
                  <div>
                    <div className={styles.detailLabel}>Phone</div>
                    <a href="tel:469-267-5806" className={styles.detailValue}>469-267-5806</a>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>24/7 Emergency Support</div>
                  </div>
                </div>
                
                {/* Email */}
                <div className={styles.detailItem}>
                  <div className={styles.iconWrap}><Mail size={22} /></div>
                  <div>
                    <div className={styles.detailLabel}>Email</div>
                    <a href="mailto:info@skytrustinc.com" className={styles.detailValue}>info@skytrustinc.com</a>
                  </div>
                </div>
                
                {/* Office */}
                <div className={styles.detailItem}>
                  <div className={styles.iconWrap}><MapPin size={22} /></div>
                  <div>
                    <div className={styles.detailLabel}>Office</div>
                    <div className={styles.detailValue}>
                      11498 Luna Rd, Suite 104<br />
                      Farmers Branch, TX 75234
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Box */}
              <div className={styles.emergencyBox} style={{ marginTop: '24px' }}>
                <ShieldAlert size={24} className={styles.emergencyIcon} />
                <div>
                  <h3 className={styles.emergencyTitle}>Active Emergency?</h3>
                  <p className={styles.emergencyText}>Call our 24/7 hotline for immediate incident response.</p>
                  <a href="tel:469-267-5806" className={styles.emergencyNumber}>469-267-5806</a>
                </div>
              </div>

            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
