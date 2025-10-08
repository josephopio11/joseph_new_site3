"use client";

import { useSectionInView } from "@/lib/hooks";
import { SectionName } from "@/lib/types";

interface LinkTriggerProps {
  section: SectionName;
}

const LinkTrigger = ({ section }: LinkTriggerProps) => {
  const { ref } = useSectionInView(section);

  return <div ref={ref} />;
};

export default LinkTrigger;
