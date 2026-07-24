import HeroSection from '@/components/home/HeroSection/HeroSection';
import LiveStats from '@/components/home/LiveStats/LiveStats';
import ServicesGrid from '@/components/home/ServicesGrid/ServicesGrid';
import SecurityMatrix from '@/components/home/SecurityMatrix/SecurityMatrix';
import WhySkyTrust from '@/components/home/WhySkyTrust/WhySkyTrust';
import ProcessSection from '@/components/home/ProcessSection/ProcessSection';
import Testimonials from '@/components/home/Testimonials/Testimonials';
import BlogPreview from '@/components/home/BlogPreview/BlogPreview';
import CtaBanner from '@/components/layout/CtaBanner/CtaBanner';

export const metadata = {
  title: 'SkyTrust Global Services Inc — Enterprise Cybersecurity & Software Engineering',
  description:
    'SkyTrust is a leading managed cybersecurity and enterprise software engineering firm. We deliver SOC 2-certified threat monitoring, cloud security, compliance consulting, penetration testing, and custom software development 24/7.',
  keywords: [
    'enterprise cybersecurity',
    'managed security services',
    'MSSP',
    'SOC 2 compliance',
    'penetration testing',
    'cloud security',
    'software development',
    'DevOps',
    'incident response',
    'compliance consulting',
    'zero trust security',
    'network security',
    'HIPAA compliance',
    'threat monitoring',
    'cybersecurity company',
  ],
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <LiveStats />
      <ServicesGrid />
      <SecurityMatrix />
      <WhySkyTrust />
      <ProcessSection />
      <Testimonials />
      <BlogPreview />
      <CtaBanner />
    </>
  );
}
