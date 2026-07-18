import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 py-10 md:flex-row md:px-6">
        <div className="text-center md:text-left">
          <p className="font-handwritten text-2xl text-foreground">
            Achini Subasinghe
          </p>
          <p className="mt-1 text-sm font-medium tracking-wide text-muted">
            Software Engineer
          </p>
        </div>

        <SocialLinks />

        <div className="flex flex-col items-center gap-2 text-center md:items-end md:text-right">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Achini Subasinghe
          </p>
          <Link
            href="/contact"
            className="text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </footer>
  );
}
