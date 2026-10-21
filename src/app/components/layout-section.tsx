import Image, { type StaticImageData } from "next/image";

interface LayoutSectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
  sectionMemoji?: StaticImageData;
}
export const LayoutSection = ({
  title,
  id,
  children,
  sectionMemoji,
}: LayoutSectionProps) => {
  return (
    <section
      className="w-full space-y-4 md:space-y-8"
      id={id}
      aria-labelledby={`${id}-heading`}
    >
      <div className="flex items-center gap-3">
        {sectionMemoji && (
          <Image
            src={sectionMemoji}
            alt=""
            width={48}
            height={48}
            sizes="48px"
            className="size-12"
          />
        )}
        <h2
          id={`${id}-heading`}
          className="text-2xl font-semibold md:text-3xl italic underline"
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
};
