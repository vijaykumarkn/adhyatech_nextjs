import UtilityBar from '../components/UtilityBar'
import Header from '../components/Header'
import PageHero from '../components/PageHero'
import { Footer } from '../components/Sections4'
import ContactContent from "../components/ContactContent";

import type { Metadata } from "next";
import { getSeo } from "../../lib/seo";

const storageUrl = process.env.NEXT_PUBLIC_STORAGE_URL;

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeo("contact");

  if (!seo) {
    return {
      title: "Contact Us — Adyatech Solutions",
      description: "Get in touch with our team. We respond within one business day with real assessments, not sales pitches.",
    };
  }

  return {
    title: seo.meta_title,
    description: seo.meta_description,
    keywords: seo.meta_keywords?.split(","),
    robots: seo.meta_robots,
    openGraph: {
      title: seo.og_title || seo.meta_title,
      description: seo.og_description || seo.meta_description,
      images: seo.meta_image
        ? [`${storageUrl}/${seo.meta_image}`]
        : [],
    },
  };
}

export default async function ContactPage() {

  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <PageHero
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
          title={<>Let's <em>talk</em>.</>}
          lede={<>Tell us what you're trying to build. We respond within <strong>one business day</strong> with a real assessment — not a sales pitch. Or if a quote is what you need, the <a href="/quote" style={{ color: 'var(--brand-gold)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>quote form</a> walks through your project step by step.</>}
        />
        <ContactContent />
      </main>
      <Footer />
    </>
  )
}
