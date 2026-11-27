type TagProps = {
  children: string;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-block rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-fg">
      {children}
    </span>
  );
}
