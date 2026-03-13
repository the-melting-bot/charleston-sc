import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import BlogPostCard from "@/components/BlogPostCard";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog & Guides",
  description:
    "Tips, guides, and local knowledge for exploring Charleston's parks and outdoor spaces.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        title="Blog & Guides"
        description="Tips, guides, and local knowledge for exploring Charleston's parks and outdoor spaces."
        backgroundImage="/images/blog/blog-hero.webp"
        backgroundAlt="Oak tree pathway with Spanish moss in the Lowcountry"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-2">
          {blogPosts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 100}>
              <BlogPostCard post={post} />
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
