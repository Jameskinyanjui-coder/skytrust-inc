'use client';

import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '@/lib/data';
import styles from './BlogPreview.module.css';

export default function BlogPreview() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="section" aria-label="Cybersecurity Research & Insights">
      <div className="container">
        <div className={styles.header}>
          <div>
            <div className="section-label">Security Intelligence</div>
            <h2 className="section-title" style={{ marginBottom: '8px' }}>Cybersecurity Research &amp; Insights</h2>
            <p className="section-desc" style={{ marginBottom: 0 }}>
              Stay ahead of emerging threats with actionable research, compliance frameworks, and technical playbooks from SkyTrust Security Labs.
            </p>
          </div>
          <Link href="/resources/blog" className="btn btn-secondary" style={{ flexShrink: 0 }}>
            View All Research <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.grid}>
          {latestPosts.map((post) => (
            <Link key={post.slug} href={`/resources/blog/${post.slug}`} className={styles.card}>
              <div className={styles.imageWrap}>
                {post.image ? (
                  <img src={post.image} alt={post.title} className={styles.image} />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <span className={styles.category}>{post.category}</span>
                  </div>
                )}
                <span className={styles.categoryBadge}>{post.category}</span>
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{post.title}</h3>
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
  );
}
