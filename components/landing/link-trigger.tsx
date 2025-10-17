"use client";

import { useSectionInView } from "@/lib/hooks";
import { SectionName } from "@/lib/types";

interface LinkTriggerProps {
  section: SectionName;
}

const LinkTrigger = ({ section }: LinkTriggerProps) => {
  const { ref } = useSectionInView(section);

  return <div ref={ref} className="h-0 w-0" />;
};

export default LinkTrigger;
