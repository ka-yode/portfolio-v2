import type { ProjectProps } from "@/lib/types";
import Image from "next/image";
import { StackPill } from "./stack-pill";
import Link from "next/link";
import { GithubIcon } from "../assets/icons/github-icon";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

const ProjectCard = ({
  image,
  title,
  comingSoon,
  githubUrl,
  liveUrl,
  description,
  implementation,
  imageAlt,
  imageCaption,
  stacks,
}: ProjectProps) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row rounded-lg group gap-5 w-full p-4 overflow-hidden border border-neutral-800 drop-shadow-lg duration-300 bg-neutral-800/60">
        <figure className="min-w-0 md:w-[44%] md:shrink-0">
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-neutral-950">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 767px) calc(100vw - 66px), (max-width: 959px) calc(44vw - 43px), 379px"
              className="object-contain"
              placeholder="blur"
            />
            {comingSoon ? (
              <div className="rounded-lg absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                <p className="text-2xl font-semibold text-neutral-400">
                  Coming Soon
                </p>
              </div>
            ) : null}
          </div>
          <figcaption className="mt-2 text-xs leading-relaxed text-neutral-400">
            {imageCaption}
          </figcaption>
        </figure>
        <div className="flex min-w-0 flex-1 flex-col justify-between gap-4">
          <div className="flex flex-wrap items-center justify-between gap-3 w-full">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <div className="flex items-center gap-4 sm:gap-6">
              {githubUrl && (
                <Link
                  href={githubUrl}
                  aria-label={`View ${title} source on GitHub`}
                  className="fill-white hover:fill-sky-400 duration-200 ease-in"
                  target="_blank"
                >
                  <GithubIcon className="size-6" aria-hidden="true" />
                </Link>
              )}
              {!comingSoon && (
                <Link
                  href={liveUrl}
                  aria-label={`View ${title} live project`}
                  className="flex items-center gap-1 duration-200 ease-in hover:text-sky-400"
                  target="_blank"
                >
                  View project
                  <ArrowUpRight
                    className="size-4 -translate-y-2"
                    aria-hidden="true"
                  />
                </Link>
              )}
            </div>
          </div>
          <p className="text-sm leading-relaxed md:text-base">{description}</p>
          <div className="border-l-2 border-sky-400/50 pl-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-sky-300">
              How I built it
            </p>
            <p className="mt-1 text-sm leading-relaxed text-neutral-400">
              {implementation}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {stacks.map((stack) => (
              <StackPill key={stack} stack={stack} />
            ))}
          </div>
        </div>
      </div>
      <hr className="border-neutral-600" />
    </div>
  );
};

export const ProjectList = () => {
  return (
    <div className="space-y-6 ">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
};
