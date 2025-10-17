interface SectionTitleProps {
  title: string;
  sometext?: string;
}

const SectionTitle = ({ title, sometext }: SectionTitleProps) => {
  return (
    <div className="my-4 flex flex-col gap-4">
      <h2 className="mb-2 text-4xl font-bold text-gray-800 md:text-5xl dark:text-gray-200">
        {title}
      </h2>
      <p className="text-muted-foreground">{sometext}</p>
    </div>
  );
};

export default SectionTitle;
