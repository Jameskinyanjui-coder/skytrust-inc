import { Metadata } from 'next';
import { solutions } from '@/lib/data';
import SolutionTemplate from '@/components/solutions/SolutionTemplate/SolutionTemplate';

export const metadata: Metadata = {
  title: 'Financial Services Cybersecurity',
  description: 'Bank-grade security and regulatory compliance for financial institutions and fintechs.',
};

export default function FinancePage() {
  const solution = solutions.find(s => s.slug === 'finance');

  const narrative = (
    <>
      <p>
        Financial institutions are high-value targets facing an onslaught of advanced threats, from state-sponsored actors attempting SWIFT network compromises to organized crime syndicates deploying targeted ransomware and business email compromise (BEC) campaigns.
      </p>
      <p>
        Simultaneously, the regulatory burden has never been heavier. Banks, credit unions, and fintechs must navigate a labyrinth of compliance frameworks including PCI-DSS, GLBA, NYDFS, and SEC cybersecurity guidelines. Failing to maintain these standards results in crippling fines and catastrophic reputational damage.
      </p>
      <p>
        SkyTrust delivers the bank-grade security required to protect highly sensitive financial data. We architect secure, segmented networks for Cardholder Data Environments (CDE), deploy advanced fraud detection heuristics, and provide the meticulous audit trails required by financial regulators.
      </p>
    </>
  );

  const benefits = [
    { title: 'Streamlined Compliance', desc: 'Reduce the cost and friction of regulatory audits. We map our security controls directly to PCI-DSS, GLBA, and SEC requirements.' },
    { title: 'Fraud & BEC Prevention', desc: 'Stop wire fraud before it happens. We implement advanced email security, DMARC enforcement, and behavioral analytics to catch compromised accounts.' },
    { title: 'Secure Digital Transformation', desc: 'Safely migrate legacy banking applications to the cloud and secure your open banking APIs against exploitation.' },
  ];

  return (
    <SolutionTemplate 
      solution={solution}
      narrative={narrative}
      benefits={benefits}
    />
  );
}
