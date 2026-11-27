import { notFound } from "next/navigation";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Hero } from "@/components/sections/Hero";
import { Learning } from "@/components/sections/Learning";
import { Projects } from "@/components/sections/Projects";
import { PersonJsonLd } from "@/components/seo/PersonJsonLd";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const newTabHint = dict.common.newTab;

  return (
    <main id="main" tabIndex={-1} className="flex-1 outline-none">
      <Hero locale={locale} dict={dict.hero} />
      <About locale={locale} dict={dict.about} />
      <Education locale={locale} dict={dict.education} />
      <Projects locale={locale} dict={dict.projects} newTabHint={newTabHint} />
      <Learning locale={locale} dict={dict.learning} />
      <Contact dict={dict.contact} newTabHint={newTabHint} />
      <PersonJsonLd locale={locale} />
    </main>
  );
}
