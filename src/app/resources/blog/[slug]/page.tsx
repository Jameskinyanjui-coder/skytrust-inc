import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Clock, Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import CtaBanner from '@/components/layout/CtaBanner/CtaBanner';
import styles from './BlogPost.module.css';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | SkyTrust Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const dateObj = new Date(post.date);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(dateObj);

  return (
    <>
      <article className={styles.article}>
        {/* Post Header */}
        <header className={styles.header}>
          <div className="container">
            <div className={styles.headerInner}>
              <Link href="/resources/blog" className={styles.backLink}>
                <ArrowLeft size={16} /> Back to all posts
              </Link>

              <div className={styles.categoryBadge}>{post.category}</div>
              <h1 className={styles.title}>{post.title}</h1>

              <div className={styles.meta}>
                <div className={styles.metaItem}>
                  <div className={styles.avatar}>
                    <User size={20} />
                  </div>
                  <div>
                    <div className={styles.metaLabel}>Author</div>
                    <div className={styles.metaValue}>{post.author}</div>
                  </div>
                </div>
                <div className={styles.metaItem}>
                  <div className={styles.metaIconWrap}><Calendar size={18} /></div>
                  <div>
                    <div className={styles.metaLabel}>Published</div>
                    <div className={styles.metaValue}>{formattedDate}</div>
                  </div>
                </div>
                <div className={styles.metaItem}>
                  <div className={styles.metaIconWrap}><Clock size={18} /></div>
                  <div>
                    <div className={styles.metaLabel}>Reading Time</div>
                    <div className={styles.metaValue}>{post.readTime}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.headerGlow} />
        </header>

        {/* Post Content */}
        <div className="container">
          <div className={styles.contentWrap}>
            <div className={styles.heroImagePlaceholder}>
              <span className={styles.heroImageText}>{post.title}</span>
            </div>

            <div className={styles.prose}>
              <p className={styles.lead}>{post.excerpt}</p>

              <h2>Understanding the Landscape</h2>
              <p>In modern enterprise environments, the perimeter is porous. With the shift to cloud infrastructure, SaaS applications, and remote work, traditional hub-and-spoke security models fail to provide adequate protection. Threat actors have adapted, focusing heavily on credential compromise and social engineering to bypass perimeter defenses.</p>

              <p>According to recent telemetry from SkyTrust Labs, over 70% of successful breaches in the past year involved valid accounts being used maliciously, rather than software vulnerabilities being exploited.</p>

              <h3>The Technical Reality</h3>
              <p>Once an attacker gains a foothold via a compromised credential, their next goal is lateral movement. In a flat network, this is trivial. They map the environment, identify high-value targets (like domain controllers or sensitive databases), and escalate privileges.</p>

              <blockquote>
                "The assumption of breach is the only safe starting point for security architecture. If you assume the attacker is already inside, your design decisions change fundamentally." — {post.author}
              </blockquote>

              <p>Implementing controls like micro-segmentation, Just-In-Time (JIT) access, and continuous behavioral monitoring are critical in reducing the blast radius of any single compromised endpoint or identity.</p>

              <h3>Strategic Recommendations</h3>
              <ul>
                <li><strong>Enforce MFA everywhere:</strong> Not just at the perimeter, but for lateral movement between secure zones.</li>
                <li><strong>Audit service accounts:</strong> Non-human identities often have excessive permissions and are rarely rotated.</li>
                <li><strong>Assume breach:</strong> Design your monitoring strategy to detect anomalies originating from inside the trusted network.</li>
              </ul>

              <p>By shifting from a perimeter-centric model to an identity-centric, Zero Trust architecture, organizations can significantly increase the cost and complexity for attackers attempting to execute their objectives.</p>
            </div>

            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>

            <hr className={styles.divider} />

            <div className={styles.authorBox}>
              <div className={styles.authorAvatarLg}>
                <User size={32} />
              </div>
              <div>
                <div className={styles.authorName}>{post.author}</div>
                <div className={styles.authorTitle}>{post.authorTitle}</div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <CtaBanner />
    </>
  );
}
