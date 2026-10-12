import Link from "next/link";

const contacts = [
  {
    label: "Email",
    href: "mailto:gladwintm04@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gladwintm/",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/GladwinTM",
    external: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_gladwin_/",
    external: true,
  },
];

export function Contact() {
  return (
    <section
      data-star-count="5"
      className="page-section flex min-h-[calc(100svh-5rem)] flex-col justify-between py-12 sm:min-h-[calc(100svh-6rem)] sm:py-16"
    >
      {/* Contact content — header and footer remain unchanged */}
      <div className="flex flex-1 flex-col">
        <div>
          <p className="eyebrow">Get in touch</p>

          <h1
            data-depth-text
            className="page-title depth-text mt-4"
          >
            Contacts
          </h1>

          <p
            data-depth-text
            className="depth-text mt-5 max-w-2xl text-xl leading-relaxed tracking-tight text-neutral-600 sm:text-2xl"
          >
            Have a project in mind? I&apos;d love to hear where you want
            to take it.
          </p>
        </div>

        {/* Contact buttons */}
        <div className="mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={
                contact.external ? "noopener noreferrer" : undefined
              }
              className="group flex min-h-[68px] items-center justify-between gap-4 border border-amber-300/60 bg-amber-200/35 px-5 py-4 text-base font-medium text-neutral-900 transition-all duration-300 hover:border-amber-400 hover:bg-amber-200/65 hover:shadow-[0_0_12px_rgba(234,179,8,0.25),0_0_28px_rgba(234,179,8,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 sm:min-h-[72px] sm:px-6 sm:text-lg"
            >
              <span>{contact.label}</span>

              <span
                aria-hidden="true"
                className="text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              >
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Original footer preserved */}
      <div className="mt-20 flex flex-col gap-6 border-t border-black/15 pt-6 text-[11px] uppercase tracking-[0.16em] text-neutral-600 sm:flex-row sm:items-end sm:justify-between">
        <p>Based in India · Working worldwide</p>

        <div className="flex gap-5">
          <Link href="/" className="hover:text-black">
            Home
          </Link>

          <Link href="/projects" className="hover:text-black">
            Projects
          </Link>
        </div>
      </div>
    </section>
  );
}