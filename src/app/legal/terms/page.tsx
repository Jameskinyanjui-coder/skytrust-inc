import { Metadata } from 'next';
import styles from '../privacy/Legal.module.css'; // Reusing the same CSS

export const metadata: Metadata = {
  title: 'Terms of Service | SkyTrust',
  description: 'SkyTrust Terms of Service and acceptable use policy.',
};

export default function TermsOfServicePage() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.lastUpdated}>Last Updated: October 1, 2023</p>
        </div>
        
        <div className={styles.content}>
          <h2>1. Agreement to Terms</h2>
          <p>
            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and SkyTrust Inc. ("SkyTrust", "we", "us", or "our"), concerning your access to and use of the skytrust.com website as well as any other media form, media channel, mobile website, or mobile application related, linked, or otherwise connected thereto.
          </p>
          
          <h2>2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the Site and Services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
          </p>

          <h2>3. Acceptable Use</h2>
          <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
          <p>As a user of the Site, you agree not to:</p>
          <ul>
            <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
            <li>Circumvent, disable, or otherwise interfere with security-related features of the Site.</li>
            <li>Use any information obtained from the Site in order to harass, abuse, or harm another person.</li>
            <li>Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
            <li>Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.</li>
          </ul>
          
          <h2>4. Modifications and Interruptions</h2>
          <p>
            We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.
          </p>

          <h2>5. Contact Us</h2>
          <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</p>
          <p>
            SkyTrust Inc.<br />
            100 Security Plaza, Suite 400<br />
            Austin, TX 78701<br />
            Email: legal@skytrust.com
          </p>
        </div>
      </div>
    </section>
  );
}
