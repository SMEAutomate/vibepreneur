import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
        404
      </p>
      <h1 className="mt-4 text-display-sm">Page not found</h1>
      <p className="mt-4 max-w-md text-neutral-600">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
        >
          Back to Home
        </Link>
        <Link
          href="/blog"
          className="rounded-lg border border-neutral-200 px-6 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
        >
          Read the Blog
        </Link>
      </div>
    </div>
  );
}
