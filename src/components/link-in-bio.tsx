import { useState } from "react";
import { ArrowUpRight, Check, Share2 } from "lucide-react";
import { LinkKindIcon } from "@/components/brand-icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/lib/profile";
import { cn } from "@/lib/utils";

export function LinkInBio() {
  const [copied, setCopied] = useState(false);

  async function shareProfile() {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
      return;
    } catch {
      /* clipboard blocked — try the system share sheet */
    }
    try {
      if (typeof navigator.share === "function") {
        await navigator.share({ title: profile.name, text: profile.title, url });
      }
    } catch {
      /* cancelled */
    }
  }

  return (
    <div className="page-grain relative min-h-dvh overflow-x-hidden bg-bg text-fg">
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-96" />
      <div
        aria-hidden="true"
        className="stripe pointer-events-none absolute inset-y-0 left-8 hidden w-px sm:block"
      />
      <div
        aria-hidden="true"
        className="stripe-soft pointer-events-none absolute inset-y-0 left-10 hidden w-px sm:block"
      />
      <div
        aria-hidden="true"
        className="stripe pointer-events-none absolute inset-y-0 right-8 hidden w-px sm:block"
      />
      <div
        aria-hidden="true"
        className="stripe-soft pointer-events-none absolute inset-y-0 right-10 hidden w-px sm:block"
      />

      <header className="relative z-10 mx-auto flex w-full max-w-md items-center justify-end px-5 pt-5">
        <ThemeToggle />
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center px-5 pt-2 pb-16">
        <div className="reveal reveal-1 mb-5">
          <div className="avatar-frame rounded-full bg-accent p-0.5">
            <div className="rounded-full bg-bg p-0.5">
              <img
                src={profile.avatarSrc}
                alt={profile.avatarAlt}
                width={128}
                height={128}
                className="size-32 rounded-full object-cover object-center outline outline-1 -outline-offset-1 outline-fg/10"
              />
            </div>
          </div>
        </div>

        <div className="reveal reveal-2 mb-1 text-center">
          <h1 className="display-name font-display leading-tight font-semibold text-fg">
            {profile.name}
          </h1>
        </div>

        <div className="reveal reveal-3 mb-4 flex flex-wrap items-center justify-center gap-2">
          <p className="text-sm font-medium tracking-wide text-muted uppercase">{profile.title}</p>
          {profile.available ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              Available for work
            </span>
          ) : null}
        </div>

        <p className="reveal reveal-4 mb-6 max-w-sm text-center text-base leading-relaxed text-muted">
          {profile.bio}
        </p>

        <nav aria-label="Social profiles" className="reveal reveal-5 mb-7 flex items-center gap-3">
          {profile.socials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="social-btn flex size-11 items-center justify-center rounded-full bg-bg-elevated text-fg"
            >
              <LinkKindIcon kind={social.kind} className="size-5" />
            </a>
          ))}
        </nav>

        <nav aria-label="Featured links" className="reveal reveal-6 flex w-full flex-col gap-3">
          {profile.links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card group flex min-h-14 w-full items-center gap-3.5 rounded-2xl bg-bg-elevated py-3.5 pr-3.5 pl-4"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <LinkKindIcon kind={link.kind} className="size-5" />
              </span>
              <span className="min-w-0 flex-1 text-left">
                <span className="block text-base font-medium text-fg">{link.title}</span>
                <span className="block truncate text-sm text-muted">{link.description}</span>
              </span>
              <ArrowUpRight
                className="arrow-shift size-4 shrink-0 text-subtle"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        <div className="reveal reveal-7 mt-8 flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={shareProfile}
            className="social-btn inline-flex min-h-11 items-center gap-2 rounded-full bg-bg-elevated px-4 py-2.5 text-sm font-medium text-fg"
          >
            <span className="relative size-4">
              <span
                className={cn(
                  "icon-swap absolute inset-0 flex items-center justify-center",
                  copied ? "scale-100 opacity-100 blur-none" : "scale-[0.25] opacity-0 blur-[4px]",
                )}
              >
                <Check className="size-4 text-accent" strokeWidth={2} />
              </span>
              <span
                className={cn(
                  "icon-swap flex items-center justify-center",
                  copied ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-none",
                )}
              >
                <Share2 className="size-4" strokeWidth={1.75} />
              </span>
            </span>
            {copied ? "Link copied" : "Share this page"}
          </button>
          <p className="text-xs text-subtle">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </main>
    </div>
  );
}
