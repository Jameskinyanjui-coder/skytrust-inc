import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/lib/data';
import ServiceTemplate from '@/components/services/ServiceTemplate/ServiceTemplate';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.name} | SkyTrust Inc.`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug) as any;

  if (!service) {
    notFound();
  }

  const problemNarrative = (
    <>
      <p>
        {service.problemNarrative || service.description}
      </p>
      <p>
        SkyTrust's <strong>{service.name}</strong> solution takes an engineering-first approach to solving these challenges. Our teams integrate directly with your business objectives to deliver robust, scalable architectures and continuous operational excellence.
      </p>
    </>
  );

  const methodology = service.methodology || [
    {
      title: 'Discovery & Assessment',
      desc: `We analyze your existing setup for ${service.name} and define strategic objectives.`,
    },
    {
      title: 'Implementation & Integration',
      desc: 'Our specialized engineers implement tailored solutions aligned with enterprise security standards.',
    },
    {
      title: 'Continuous Monitoring & Optimization',
      desc: 'Post-deployment, we continuously monitor, optimize, and scale the solution for peak performance.',
    },
  ];

  return (
    <ServiceTemplate
      service={service}
      problemNarrative={problemNarrative}
      methodology={methodology}
    />
  );
}
