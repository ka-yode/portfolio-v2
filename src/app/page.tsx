import { LayoutSection } from "./components/layout-section";
import Image from "next/image";
import sideheroImage from "../app/assets/memojipeace.webp";
import kayode from "../app/assets/kayode.jpg";
import { ExperienceList } from "./components/experience-list";
import { ProjectList } from "./components/project-list";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import memoiChefKiss from "@/app/assets/memojichefkiss.webp";
import memojiLaptop from "@/app/assets/memojiwlaptop.webp";
import memojiContact from "@/app/assets/memojicontact.webp";
import memojiEuphoria from "@/app/assets/memojieuphoria.webp";
import { RESUME_URL } from "@/lib/site";

export default function Home() {
  return (
    <div className="w-full mt-8">
      <div className="space-y-20 w-full">
        <div className="flex flex-col w-full items-center gap-10 md:flex-row-reverse justify-between">
          <div className="relative shrink-0">
            <div className="size-52 min-w-52 rounded-full border-2 border-sky-400 p-1 overflow-hidden">
              <Image
                src={kayode}
                alt="Kayode Babalola"
                sizes="208px"
                className="w-full h-full rounded-full object-cover"
                placeholder="blur"
              />
            </div>
            <Image
              src={sideheroImage}
              alt=""
              width={70}
              height={70}
              sizes="70px"
              className="absolute bottom-0 right-0 z-10"
              placeholder="blur"
            />
          </div>
          <div className="min-w-0 space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold">Kayode Babalola</h1>
            <p className="md:text-xl text-neutral-400">Frontend Engineer 🏌🏾‍♂️</p>
            <p className="max-w-xl leading-relaxed md:text-lg">
              I turn complex workflows into simple web experiences with React
              and Next.js. My work spans event platforms, workforce tools, and
              creative experiments with audio and AI.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-sky-400 px-4 py-2 font-medium text-neutral-950 transition-colors hover:bg-sky-300"
              >
                View work <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-neutral-700 px-4 py-2 transition-colors hover:border-neutral-400"
              >
                Résumé <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center rounded-lg px-4 py-2 underline-offset-4 hover:underline"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
        <LayoutSection
          id="projects"
          title="#projects"
          sectionMemoji={memojiLaptop}
        >
          <ProjectList />
        </LayoutSection>
        <LayoutSection
          id="exp"
          title="#experience"
          sectionMemoji={memoiChefKiss}
        >
          <ExperienceList />
        </LayoutSection>
        <LayoutSection
          id="contact"
          title="#contact"
          sectionMemoji={memojiContact}
        >
          <div className="flex flex-col gap-4 md:gap-8 text-neutral-400 text-lg">
            <Link
              href="mailto:babalolakayode44@gmail.com"
              target="_blank"
              className="flex items-center gap-2 underline-offset-4 underline"
            >
              <ArrowUpRight />
              babalolakayode44@gmail.com
            </Link>

            <Link
              href="https://www.linkedin.com/in/kayodedev/"
              target="_blank"
              className="flex items-center gap-2 underline-offset-4 underline"
            >
              <ArrowUpRight />
              Connect with me on LinkedIn
            </Link>
          </div>
        </LayoutSection>
        <LayoutSection
          id="listening"
          title="now listening..."
          sectionMemoji={memojiEuphoria}
        >
          <iframe
            title="spotify playlist"
            className="rounded-2xl"
            src="https://open.spotify.com/embed/playlist/0CYzNaAssWPRfIi6tJZUK7?utm_source=generator"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            id="player"
          ></iframe>
        </LayoutSection>
      </div>
    </div>
  );
}
