import Image from "next/image";
import Link from "next/link";

const platformLinks = [
  { label: "How it Works", href: "/how-it-works" },
  { label: "The System", href: "/the-system" },
  { label: "Pricing", href: "/pricing" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Daily Brief", href: "/daily-brief" },
];

const useCaseLinks = [
  { label: "For Consultants", href: "/for-consultants" },
  { label: "For Operators", href: "/for-operators" },
  {
    label: "For Corporate Professionals",
    href: "/for-corporate-professionals",
  },
  { label: "For Marketers", href: "/for-marketers" },
];

const resourceLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Showcase", href: "/showcase" },
  { label: "Building in Public", href: "/roadmap" },
  { label: "About", href: "/about" },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-white">
      <div className="container-content px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-6">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-landscape.png"
                alt="Vibepreneur home"
                width={859}
                height={260}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-500">
              The venture operating system for professionals turning expertise
              into structured, scalable businesses.
            </p>
            <div className="mt-4 flex gap-3">
              {/* TODO: Replace # with actual social URLs when accounts are created */}
              <a
                href="#"
                aria-label="Follow on X"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Follow on LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-900">Platform</h4>
            <ul className="mt-4 space-y-3">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-500 hover:text-neutral-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-900">
              Use Cases
            </h4>
            <ul className="mt-4 space-y-3">
              {useCaseLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-500 hover:text-neutral-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-900">
              Resources
            </h4>
            <ul className="mt-4 space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-500 hover:text-neutral-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-900">
              Get Started
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/waitlist"
                  className="text-sm text-neutral-500 hover:text-neutral-700"
                >
                  Join Waitlist
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-100 pt-8">
          <p className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} Vibepreneur. All rights reserved.{" "}
            <span className="mx-1">&middot;</span>
            <Link href="/privacy" className="hover:text-neutral-600">
              Privacy
            </Link>
            <span className="mx-1">&middot;</span>
            <Link href="/terms" className="hover:text-neutral-600">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
