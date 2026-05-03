import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import prisma from "@/lib/prisma";

type Props = {
  children: React.ReactNode;
};

export default async function FrontLayout({ children }: Props) {
  const navLinks = await prisma.navLink.findMany();

  return (
    <div className="text-foreground flex min-h-screen flex-col">
      <Navigation navLinks={navLinks} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
