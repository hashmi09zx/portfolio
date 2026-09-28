import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, CheckCircle2, ShieldAlert, Lightbulb } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import ProjectImage from "@/components/ProjectImage";
import { PROJECTS } from "@/data/portfolioData";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-12 pb-16 bg-[#0D0D0D]">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="space-y-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#9E9E9E] hover:text-[#FF5722] transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>

          <div className="sawad-card p-8 sm:p-12 bg-[#161616] border-white/10 space-y-6 rounded-[32px]">
            <div className="flex flex-wrap items-center gap-3">
              <span className="orange-badge text-xs">{project.tag}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
              {project.title}
            </h1>

            <p className="text-[#9E9E9E] text-base sm:text-lg max-w-3xl leading-relaxed">
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline text-xs px-6 py-3 flex items-center gap-2 font-bold"
                >
                  <GithubIcon className="w-4 h-4 text-[#FF5722]" />
                  <span>GitHub Repository</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-orange text-xs px-6 py-3 flex items-center gap-2 font-bold"
                >
                  <span>Visit Live App</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Image & Content Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="aspect-[16/9] max-h-[500px] w-full rounded-3xl overflow-hidden bg-[#0D0D0D] border border-white/10 shadow-2xl">
          <ProjectImage
            src={project.image}
            alt={project.title}
            slug={project.slug}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Problem & Solution Grid */}
        {(project.problem || project.solution) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.problem && (
              <div className="sawad-card p-6 sm:p-8 bg-[#161616] border border-white/10 rounded-[24px] space-y-3">
                <div className="flex items-center gap-2 text-[#FF5722]">
                  <ShieldAlert className="w-5 h-5" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">The Challenge</h3>
                </div>
                <p className="text-[#9E9E9E] text-sm leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="sawad-card p-6 sm:p-8 bg-[#161616] border border-white/10 rounded-[24px] space-y-3">
                <div className="flex items-center gap-2 text-[#FF5722]">
                  <Lightbulb className="w-5 h-5" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">The Solution</h3>
                </div>
                <p className="text-[#9E9E9E] text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Detailed Case Study & Technical Specs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 sawad-card p-8 sm:p-10 bg-[#161616] border border-white/10 space-y-8 rounded-[28px]">
            <div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Project Overview</h2>
              <p className="text-[#9E9E9E] text-base leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Key Capabilities */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-white/10">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Key Features & Capabilities
                </h3>
                <ul className="space-y-3">
                  {project.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5722] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar Specs */}
          <div className="lg:col-span-4 sawad-card p-8 bg-[#161616] border border-white/10 space-y-6 rounded-[28px]">
            <h3 className="text-lg font-black text-white border-b border-white/10 pb-4 uppercase tracking-tight">
              Project Details
            </h3>

            <div className="space-y-5 text-xs">
              <div>
                <span className="text-[#9E9E9E] block font-medium mb-1 uppercase tracking-wider">Domain</span>
                <span className="text-white font-bold text-sm">{project.category}</span>
              </div>

              <div>
                <span className="text-[#9E9E9E] block font-medium mb-1 uppercase tracking-wider">Focus</span>
                <span className="text-white font-bold text-sm">{project.client}</span>
              </div>

              <div>
                <span className="text-[#9E9E9E] block font-medium mb-1 uppercase tracking-wider">Technologies Used</span>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white font-medium text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
