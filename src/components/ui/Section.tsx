import type { ReactNode } from "react";
import type { SectionId } from "@/content/sections";
import { Container } from "./Container";

type SectionProps = {
  id: SectionId;
  title: string;
  children: ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  const headingId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={headingId} className="border-t border-border py-14 sm:py-20">
      <Container>
        <h2 id={headingId} className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {children}
      </Container>
    </section>
  );
}
