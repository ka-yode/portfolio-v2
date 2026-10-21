import { EXPERIENCE } from "@/lib/constants";
import type { ExperienceProps } from "@/lib/types";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { StackPill } from "./stack-pill";
import { RESUME_URL } from "@/lib/site";

export const ExperienceCard = ({
  jobTitle,
  companyName,
  employmentType,
  startDate,
  endDate,
  description,
  points,
  stacks,
}: ExperienceProps) => {
  return (
    <div className="space-y-8">
      <div className="space-y-3 box-border group md:space-y-4">
        <h3 className="text-lg md:text-xl group-hover:text-sky-400 duration-500 font-semibold">
          {jobTitle} · {companyName}
        </h3>
        <p className="uppercase text-neutral-400 text-sm">
          {employmentType} · {startDate} - {endDate}
        </p>
        <p className="leading-relaxed text-neutral-300 text-sm md:text-base">
          {description}
        </p>
        <ul className="space-y-2 list-disc list-outside text-sm md:text-base pl-5 text-neutral-400">
          {points?.map((p) => (
            <li key={p}>
              {p}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {stacks.map((stack) => (
            <StackPill key={stack} stack={stack} />
          ))}
        </div>
      </div>
      <hr className="border-neutral-600" />
    </div>
  );
};

export const ExperienceList = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-8">
        {EXPERIENCE.map((exp) => (
          <ExperienceCard key={exp.companyName} {...exp} />
        ))}
      </div>
      <Link
        href={RESUME_URL}
        target="_blank"
        className="inline-flex min-h-11 items-center gap-1 text-neutral-400 underline-offset-4 hover:underline"
      >
        View full résumé <ArrowUpRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  );
};
