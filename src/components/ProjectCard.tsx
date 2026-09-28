"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import ProjectImage from "@/components/ProjectImage";
import { Project } from "@/data/portfolioData";

interface ProjectCardProps {
  project: Project;
  isHome?: boolean;
  onSelect?: (project: Project) => void;
}

export default function ProjectCard({ project, isHome = false, onSelect }: ProjectCardProps) {
  const displayTechs = isHome ? (project.homeTechnologies || project.technologies.slice(0, 3)) : project.technologies;

  return (
    <div
      onClick={() => onSelect && onSelect(project)}
      className="sawad-card group cursor-pointer p-4 sm:p-5 bg-[#161616] border border-white/10 hover:border-[#FF5722]/50 rounded-[22px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 h-full shadow-md"
    >
      <div>
        {/* Top Thumbnail Image */}
        <div className="relative w-full aspect-[16/8.5] rounded-[16px] overflow-hidden bg-[#0D0D0D] border border-white/10 mb-3">
          <ProjectImage
            src={project.image}
            alt={project.title}
            slug={project.slug}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
        </div>

        {/* Category Tag */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="orange-badge text-[9px] py-0.5 px-2 uppercase tracking-wider font-bold">
            {project.tag}
          </span>
        </div>

        {/* Project Title */}
        <Link href={`/projects/${project.slug}`} className="block" onClick={(e) => e.stopPropagation()}>
          <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-[#FF5722] transition-colors tracking-tight line-clamp-1 mb-1.5">
            {project.title}
          </h3>
        </Link>

        {/* Project Description */}
        <p className="text-[#9E9E9E] text-xs line-clamp-2 leading-relaxed mb-3">
          {project.description}
        </p>
      </div>

      {/* Footer / Tech Stack & Action Links */}
      <div className="mt-auto pt-3 border-t border-white/10 flex items-center justify-between gap-2">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {displayTechs.map((tech) => (
            <span
              key={tech}
              className="text-[9px] font-medium text-white/80 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-1.5 shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 text-[#9E9E9E] hover:text-white hover:border-[#FF5722] flex items-center justify-center transition-all"
              aria-label="GitHub Repository"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 text-[#9E9E9E] hover:text-white hover:border-[#FF5722] flex items-center justify-center transition-all"
              aria-label="Live Demo"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          <Link
            href={`/projects/${project.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white group-hover:bg-[#FF5722] group-hover:border-[#FF5722] group-hover:scale-105 flex items-center justify-center transition-all duration-300 shadow-md"
            aria-label="View Project Details"
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
