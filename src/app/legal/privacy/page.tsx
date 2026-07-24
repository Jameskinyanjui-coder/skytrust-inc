import { Metadata } from 'next';
import Link from 'next/link';
import styles from './Legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | SkyTrust',
  description: 'SkyTrust Privacy Policy and data handling practices.',
};

export default function PrivacyPolicyPage() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last Updated: October 1, 2023</p>
        </div>
        
        <div className={styles.content}>
          <h2>1. Introduction</h2>
          <p>
            SkyTrust Inc. ("SkyTrust", "we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website skytrust.com, use our services, or engage with us in any way.
          </p>
          
          <h2>2. Information We Collect</h2>
          <h3>Personal Data</h3>
          <p>We may collect personally identifiable information, such as your name, email address, telephone number, and company details when you voluntarily provide it to us through contact forms, newsletter signups, or when requesting an assessment.</p>
          
          <h3>Security Telemetry (For Clients)</h3>
          <p>For organizations using our Managed SOC or incident response services, we collect security telemetry (logs, network traffic metadata, endpoint telemetry) strictly for the purpose of threat detection and mitigation. This data is handled according to our Master Services Agreement (MSA) and Data Processing Addendum (DPA).</p>

          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To provide and maintain our services</li>
            <li>To respond to customer service requests and support needs</li>
            <li>To send administrative information, such as updates to our terms or policies</li>
            <li>To detect, prevent, and address technical or security issues</li>
          </ul>
          
          <h2>4. Data Sharing and Disclosure</h2>
          <p>
            We do not sell your personal data. We may share information with trusted third-party service providers who assist us in operating our website and conducting our business, so long as those parties agree to keep this information confidential and comply with applicable data protection laws.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
          </p>
          
          <h2>6. Contact Us</h2>
          <p>If you have questions or comments about this Privacy Policy, please contact our Data Protection Officer at:</p>
          <p>
            SkyTrust Inc.<br />
            100 Security Plaza, Suite 400<br />
            Austin, TX 78701<br />
            Email: privacy@skytrust.com
          </p>
        </div>
      </div>
    </section>
  );
}
