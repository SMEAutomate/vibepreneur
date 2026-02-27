import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-white">
      <div className="container-content px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-neutral-900"
            >
              vibepreneur
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-500">
              Transform real-world experience into scalable solutions with
              structured go-to-market and growth systems built in.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-900">Platform</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-sm text-neutral-500 hover:text-neutral-700"
                >
                  How it Works
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-neutral-500 hover:text-neutral-700"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/roadmap"
                  className="text-sm text-neutral-500 hover:text-neutral-700"
                >
                  Roadmap
                </Link>
              </li>
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
              <li>
                <Link
                  href="/roadmap"
                  className="text-sm text-neutral-500 hover:text-neutral-700"
                >
                  Building in Public
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-100 pt-8">
          <p className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} Vibepreneur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
