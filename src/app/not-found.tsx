import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-24 pb-20 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl sm:text-8xl font-light tracking-tight mb-6 text-accent/20">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-light tracking-wide mb-6">
            Page Not Found
          </h2>
          <p className="text-accent/80 mb-12 max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="inline-block px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 text-sm font-light tracking-wide"
            >
              Return Home
            </Link>
            <Link
              href="/portfolio"
              className="inline-block px-8 py-3 text-accent hover:text-foreground transition-colors duration-300 text-sm font-light tracking-wide"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
