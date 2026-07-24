import { Metadata } from 'next';
import Link from 'next/link';
import { Clock } from 'lucide-react';
import { blogPosts } from '@/lib/data';
import CtaBanner from '@/components/layout/CtaBanner/CtaBanner';
import styles from './BlogList.module.css';

export const metadata: Metadata = {
  title: 'Security Blog | SkyTrust',
  description: 'Threat intelligence, technical guides, and security best practices from the experts at SkyTrust.',
};

export default function BlogListPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className="section-label" style={{ justifyContent: 'center' }}>SkyTrust Labs</div>
            <h1 className={styles.title}>Research & Insights</h1>
            <p className={styles.subtitle}>
              Actionable threat intel and engineering deep dives from our front-line analysts.
            </p>
          </div>
        </div>
        <div className={styles.heroGlow} />
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/resources/blog/${post.slug}`} className={styles.card}>
                <div className={styles.imageWrap}>
                  <div className={styles.imagePlaceholder}>
                    <span className={styles.category}>{post.category}</span>
                  </div>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <div className={styles.meta}>
                    <div className={styles.author}>{post.author}</div>
                    <div className={styles.time}>
                      <Clock size={12} /> {post.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
