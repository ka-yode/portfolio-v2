export const StackPill = ({ stack }: { stack: string }) => (
  <span className="flex items-center gap-2 rounded-lg border border-neutral-600/50 bg-neutral-800/60 px-4 py-1 text-xs">
    {stack}
  </span>
);
