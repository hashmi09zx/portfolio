"use client";

import React from "react";
import { X, ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import ProjectImage from "@/components/ProjectImage";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop click listener */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#161616] border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col my-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0D0D0D]">
          <div className="flex items-center gap-3">
            <span className="orange-badge text-xs">{project.tag}</span>
            <span className="text-white font-bold text-lg hidden sm:inline uppercase tracking-tight">
              {project.title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Main Hero Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#0D0D0D] border border-white/10">
            <ProjectImage
              src={project.image}
              alt={project.title}
              slug={project.slug}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Metadata Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-[#0D0D0D] border border-white/10 text-xs text-[#9E9E9E]">
            <div>
              <span className="block text-white/50 font-medium mb-1">DOMAIN</span>
              <span className="font-semibold text-white">{project.client}</span>
            </div>

            <div>
              <span className="block text-white/50 font-medium mb-1">CATEGORY</span>
              <span className="font-semibold text-white">{project.category}</span>
            </div>

            <div>
              <span className="block text-white/50 font-medium mb-1">LINKS</span>
              <div className="flex items-center gap-2 pt-0.5">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-white hover:text-[#FF5722] inline-flex items-center gap-1"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-[#FF5722]" />
                    <span>GitHub</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-[#FF5722] hover:underline inline-flex items-center gap-1 ml-2"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Project Overview</h3>
            <p className="text-[#9E9E9E] text-base leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Key Engineering Highlights
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5722] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#0D0D0D] flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="btn-outline text-xs px-5 py-2 cursor-pointer"
          >
            Close
          </button>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-outline text-xs px-5 py-2"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#FF5722]" />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-orange text-xs px-6 py-2"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
