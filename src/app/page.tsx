import AosInit from './components/AosInit'
import UtilityBar from './components/UtilityBar'
import Header from './components/Header'
import Hero from './components/Hero'
import { LegacyBand, Marquee, Manifesto, Industries } from './components/Sections1'
import { Services, Work, Process } from './components/Sections2'
import { Products, Alumnyo, Osciva, Impact, GovtBand, TechStack } from './components/Sections3'
import { Testimonials, Insights, BigCTA, Footer } from './components/Sections4'
import Link from "next/link";

import { getHomeData } from "../lib/home";

import type { Metadata } from "next";
import { getSeo } from "../lib/seo";

const storageUrl = process.env.NEXT_PUBLIC_STORAGE_URL;

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeo("home");

  if (!seo) {
    return {
      title: "Adyatech Solutions — Custom Web, Software & AI Development",
      description: "16-year studio building custom web, software, AI and mobile experiences for ambitious teams worldwide.",
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

export default async function Home() {

  const home = await getHomeData();

  return (
    <>
      <AosInit />
      <UtilityBar />
      <Header />
      <main>
        <Hero featuredProjects={home.hero_projects} />
        <LegacyBand />
        <Marquee />
        <Manifesto />
        <Industries />
        <Services services={home.services} />
        <Work projects={home.projects} />
        <Process />
        <Products products={home.products} />
        <Alumnyo />
        <Osciva />
        <Impact />
        <GovtBand />
        <TechStack />
        <Testimonials testimonials={home.testimonials} />
        <Insights articles={home.articles} />
        <BigCTA />
      </main>
      <Footer />
      <Link href="#contact" className="fab">Let's talk →</Link>
    </>
  )
}