import type { Metadata } from "next";
import { personal } from "@/data/personal";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { SocialLinks } from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "Contact | Achini Subasinghe",
  description: "Get in touch with Achini Subasinghe",
};

export default function ContactPage() {
  return (
    <div>
      <header className="mb-10 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Say hello
        </p>
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">Contact</h1>
      </header>

      <div className="flex flex-col gap-10 md:flex-row">
        <div className="w-full md:w-3/5">
          <ContactForm />
        </div>

        <div className="flex w-full flex-col gap-6 md:w-2/5">
          <Section>
            <h2 className="mb-5 text-lg font-medium tracking-tight">Details</h2>
            <ul className="space-y-5 text-base">
              <li className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  Email
                </span>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-foreground underline-offset-4 hover:text-accent hover:underline"
                >
                  {personal.email}
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  Phone
                </span>
                <span>{personal.phone}</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  Location
                </span>
                <span>{personal.location}</span>
              </li>
            </ul>
          </Section>

          <div className="flex justify-center md:justify-start">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
