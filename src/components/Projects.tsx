import Link from "next/link";
import { projects } from "@/data/projects";

type ProjectsProps = {
  preview?: boolean;
};

export function Projects({ preview = false }: ProjectsProps) {
  const displayedProjects = preview ? projects.slice(0, 3) : projects;

  return (
    <section data-star-count="4" className="page-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h1 data-depth-text className="page-title depth-text">
            Projects
          </h1>
        </div>

        {preview && (
          <Link href="/projects" className="text-link">
            View all work <span aria-hidden="true">↗</span>
          </Link>
        )}
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {displayedProjects.map((project, index) => (
          <article key={project.title} className="group">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              aria-label={`View ${project.title} live project`}
            >
              <div
                className={`relative aspect-[4/4.6] overflow-hidden bg-gradient-to-br ${project.accent}`}
              >
                <div className="absolute inset-5 border border-white/30 transition-transform duration-500 group-hover:scale-95" />

                <span className="absolute bottom-5 left-5 text-5xl font-medium tracking-[-0.08em] text-white/90">
                  {project.title.split(" ")[0]}
                </span>

                <span className="absolute right-5 top-5 text-[10px] uppercase tracking-[0.18em] text-white/75">
                  {project.category}
                </span>
              </div>
              <div className="mt-4">
                <p className="mt-1 text-sm leading-5 text-neutral-600">
                  {project.description}
                </p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}