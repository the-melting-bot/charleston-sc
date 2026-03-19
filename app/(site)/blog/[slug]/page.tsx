import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import BlogPostCard from "@/components/BlogPostCard";
import { blogPosts } from "@/data/blog-posts";

const SITE_URL = "https://www.lowcountryparks.com";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [{ url: post.image, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Lowcountry Parks",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* Hero — image only; title lives in card below so nothing clips */}
      <div className="relative h-[38vh] min-h-[220px] max-h-[420px] w-full overflow-hidden sm:min-h-[260px] sm:max-h-[460px]">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Article header + content */}
      <article className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <header className="relative z-10 -mt-14 mb-10 sm:-mt-16 lg:-mt-20">
          <div
            className="rounded-2xl border border-slate-200/90 bg-white px-5 py-6 shadow-lg shadow-slate-900/[0.06] ring-1 ring-slate-900/[0.04] sm:px-8 sm:py-8"
          >
            <span className="inline-flex rounded-full bg-coastal-700 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              {post.category}
            </span>
            <h1 className="mt-4 text-balance text-3xl font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl sm:leading-[1.1] lg:text-[2.65rem] lg:leading-[1.08]">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 border-t border-slate-100 pt-5 text-sm text-slate-600">
              <span className="font-medium text-slate-800">{post.author}</span>
              <span aria-hidden="true" className="select-none text-slate-300">
                &middot;
              </span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span aria-hidden="true" className="select-none text-slate-300">
                &middot;
              </span>
              <span className="text-slate-500">{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div
          className="blog-prose -mt-2 mb-16"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              More from the Blog
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related, index) => (
                <FadeIn key={related.slug} delay={index * 100}>
                  <BlogPostCard post={related} />
                </FadeIn>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 rounded-lg border border-coastal-200 bg-white px-5 py-2.5 text-sm font-medium text-coastal-700 transition-colors hover:bg-coastal-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coastal-500 focus-visible:ring-offset-2"
              >
                View All Guides
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
