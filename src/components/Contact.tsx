import Link from "next/link";

export function Contact() {
  return (
    <section data-star-count="5" className="page-section flex min-h-[calc(100svh-5rem)] flex-col justify-between py-12 sm:min-h-[calc(100svh-6rem)] sm:py-16">
      <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h1 data-depth-text className="page-title depth-text">Contacts</h1>
        </div>
        <div>
          <p data-depth-text className="depth-text max-w-2xl text-[clamp(2rem,5vw,4.6rem)] leading-[0.95] tracking-[-0.065em]">Have a project in mind? I&apos;d love to hear where you want to take it.</p>
          <a href="mailto:hello@gauchlabs.com" className="mt-10 inline-block border-b-2 border-black pb-2 text-xl tracking-[-0.04em] transition-opacity hover:opacity-55 sm:text-3xl">hello@gauchlabs.com</a>
        </div>
      </div>
      <div className="mt-20 flex flex-col gap-6 border-t border-black/15 pt-6 text-[11px] uppercase tracking-[0.16em] text-neutral-600 sm:flex-row sm:items-end sm:justify-between">
        <p>Based in India · Working worldwide</p>
        <div className="flex gap-5">
          <Link href="/" className="hover:text-black">Home</Link>
          <Link href="/projects" className="hover:text-black">Projects</Link>
          <a href="mailto:hello@gauchlabs.com" className="hover:text-black">Email</a>
        </div>
      </div>
    </section>
  );
}
