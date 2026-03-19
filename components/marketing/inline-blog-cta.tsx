import Link from "next/link";

export function InlineBlogCta() {
  return (
    <div className="my-12 rounded-xl border border-brand-100 bg-brand-50 p-6">
      <p className="text-sm font-semibold text-brand-800">
        Turn what you know into what you own.
      </p>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600">
        Vibepreneur builds structured ventures from professional expertise, with
        positioning, launch assets, and growth systems included.
      </p>
      <Link
        href="/waitlist"
        className="mt-4 inline-block rounded-lg bg-brand-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700"
      >
        Join the Waitlist
      </Link>
    </div>
  );
}
