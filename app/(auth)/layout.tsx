import { getSessionJo } from "@/actions/auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default async function AuthLayout({ children }: Props) {
  const session = await getSessionJo();

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <Image
                src="/images/landing/me2.png"
                alt=" for what"
                width={100}
                height={100}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            Joseph Opio
          </Link>
        </div>
        {children}
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          src="/images/me/standing.jpg"
          alt=" for what"
          width={500}
          height={500}
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover transition-colors duration-1000 ease-in-out dark:brightness-[1] dark:grayscale"
        />
      </div>
    </div>
  );
}
