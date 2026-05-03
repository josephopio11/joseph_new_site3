import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

type Props = {
  children: React.ReactNode;
};

export default function FrontLayout({ children }: Props) {
  return (
    <div className="text-foreground flex min-h-screen flex-col">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
