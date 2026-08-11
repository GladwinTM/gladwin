import Link from "next/link";

export function Hero() {
  return (
    <section data-star-count="1" className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden px-5 py-16 sm:min-h-[calc(100svh-6rem)] sm:px-8 lg:px-12">
      <div className="hero-grid" aria-hidden="true" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-neutral-500 sm:text-xs">Independent studio · India</p>
        <h1 data-depth-text className="depth-text text-[clamp(4.25rem,15vw,11rem)] font-medium leading-[0.78] tracking-[-0.075em] text-black">gladwin</h1>
        <p data-depth-text className="depth-text mt-7 text-sm font-medium uppercase tracking-[0.38em] text-neutral-800 sm:mt-9 sm:text-lg">Gauch Labs</p>
        <p data-depth-text className="depth-text mt-7 max-w-md text-sm leading-6 text-neutral-600 sm:text-base">Building considered websites, products, and intelligent tools for people with ideas worth shipping.</p>
        <div className="mt-10 flex flex-col gap-3 min-[420px]:flex-row sm:mt-12">
          <Link className="button-primary" href="/projects">Explore projects</Link>
          <Link className="button-primary" href="/contact">Start a conversation</Link>
        </div>
      </div>
      <p className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.18em] text-neutral-400 sm:bottom-7 sm:left-8">Scroll to explore</p>
    </section>
  );
}
