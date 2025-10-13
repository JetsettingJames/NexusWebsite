import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
            >
              AI Nexus
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              London • San Francisco • Boston
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/ainexus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="https://twitter.com/ainexus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/company/ainexus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          <div />
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AI Nexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
