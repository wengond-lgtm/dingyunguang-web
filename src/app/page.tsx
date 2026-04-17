import { getAllWorks } from "@/lib/notion";
import Hero from "@/components/sections/Hero";
import FeaturedWorks from "@/components/sections/FeaturedWorks";
import AboutTeaser from "@/components/sections/AboutTeaser";
import ContactCTA from "@/components/sections/ContactCTA";

export const revalidate = 60;

export default async function Home() {
  const featuredWorks = await getAllWorks({ featuredOnly: true });

  return (
    <main className="flex flex-col">
      <Hero />
      <FeaturedWorks works={featuredWorks} />
      <AboutTeaser />
      <ContactCTA />
    </main>
  );
}
