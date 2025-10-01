"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

const BackButton = () => {
  const router = useRouter();

  return (
    <Button
      className="text-white px-8 shadow-md shadow-black/40 hover:shadow-lg hover:scale-[1.05] transition-all duration-300"
      onClick={() => router.back()}
    >
      <IoArrowBack size={16} className="mr-2" />
      Back
    </Button>
  );
};

export default BackButton;
