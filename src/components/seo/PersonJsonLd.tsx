import { about } from "@/content/about";
import { profile } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import { getSiteUrl } from "@/lib/seo";

type PersonJsonLdProps = {
  locale: Locale;
};

/** schema.org Person: helps search engines connect the page with the person and profiles. */
export function PersonJsonLd({ locale }: PersonJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name[locale],
    jobTitle: profile.role[locale],
    description: profile.tagline[locale],
    email: `mailto:${profile.email}`,
    url: new URL(`/${locale}`, getSiteUrl()).toString(),
    sameAs: profile.links.map((link) => link.href),
    knowsAbout: about.interests.map((interest) => interest[locale]),
  };

  return (
    <script
      type="application/ld+json"
      // Escape "<" so content can never close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
