import Link from "next/link";
import { ThreadEffect } from "./ThreadEffect";

export function About() {
  return (
    <section data-star-count="2" className="page-section relative overflow-hidden">
      <ThreadEffect className="absolute left-0 right-0 top-32 opacity-60" />
      <div className="relative grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:gap-20">
        <div>
          <p className="eyebrow">A little context</p>
          <h1 data-depth-text className="page-title depth-text">About me</h1>
          <div className="mt-10 max-w-xl space-y-7 text-xl leading-[1.35] tracking-[-0.025em] sm:text-2xl">
            <p>I’m Gladwin, a full-stack developer focused on building modern, scalable web applications and AI-powered solutions.</p>
            <p>I help businesses and startups turn ideas into reliable digital products—from responsive websites and custom web apps to backend systems and thoughtful AI integrations.</p>
            <p>I care about clean code, clear thinking, and building things that genuinely solve problems.</p>
          </div>
          <Link href="/contact" className="button-primary mt-10">Let&apos;s work together</Link>
        </div>
        <div className="relative min-h-96 overflow-hidden bg-neutral-200 sm:min-h-[36rem]">
          <div className="absolute inset-6 border border-black/15" />
          <img
            src="https://ovpyekpwmbvuxzspjauz.supabase.co/storage/v1/object/sign/my_images/Subject.png?token=eyJraWQiOiI5ZTlmNDJlMC05ZjAxLTRiMjgtOGEyNC02OTcxNGUwODcyZjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteV9pbWFnZXMvU3ViamVjdC5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg4MDc2MTY1LCJleHAiOjE4MTk2MTIxNjV9.bKes4amVuul_iv06ymwnBCsEwimbh3BMTppAGUVFycY"
            alt="Subject"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute right-7 top-7 text-3xl tracking-[-0.1em] text-black/80"> Creating is a part of being human</div>
        </div>
      </div>
    </section>
  );
}
