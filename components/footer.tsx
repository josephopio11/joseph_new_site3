import {
  Camera,
  Facebook,
  Github,
  GraduationCap,
  Linkedin,
  ShoppingBag,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-border/50 border-t">
      {/* <div className="text-muted-foreground container mx-auto px-4 text-center text-sm">
        <p>© {new Date().getFullYear()} Sara Howard. All rights reserved.</p>
      </div> */}

      <nav className="sticky top-0 z-10 bg-cyan-950 p-4 drop-shadow-xl print:hidden">
        <div className="container mx-auto flex flex-col justify-between sm:flex-row">
          <h3 className="text-small mb2 flex place-content-center justify-between text-center text-white sm:text-left md:mb-0">
            <Link
              href="/"
              className="text-white/80 no-underline hover:text-white"
            >
              &copy; {new Date().getFullYear()} Joseph Opio. All rights
              reserved. &nbsp;
            </Link>
            <Link
              href="/privacy-policy"
              className="text-white/80 no-underline hover:text-white"
            >
              {"Privacy Policy"}
            </Link>
          </h3>
          <hr className="my-2 border-slate-700" />
          <div className="flex flex-row justify-center gap-4 align-middle text-xl text-white sm:justify-evenly lg:text-2xl">
            <Link
              className="text-white/90 hover:text-white"
              href={"https://converter.josephopio.com"}
              target="_converter"
            >
              <Camera />
            </Link>
            <Link
              className="text-white/90 hover:text-white"
              href="https://www.linkedin.com/in/josephopio/"
              target="_linkedin"
            >
              <Linkedin />
            </Link>
            <Link
              className="text-white/90 hover:text-white"
              href="https://www.facebook.com/josephopio11/"
              target="_facebook"
            >
              <Facebook />
            </Link>
            <Link
              className="text-white/90 hover:text-white"
              href="https://www.messenger.com/t/1752649352/"
              target="_messenger"
            >
              <Facebook />
            </Link>
            <Link
              className="text-white/90 hover:text-white"
              href={"https://www.youtube.com/@josephopio"}
              target="_youtube"
            >
              <Youtube />
            </Link>
            <Link
              className="text-white/90 hover:text-white"
              href={"https://www.twitter.com/@josepopio"}
              target="_twitter"
            >
              <Twitter />
            </Link>
            <Link
              className="text-white/90 hover:text-white"
              href={"https://github.com/josephopio11"}
              target="_github"
            >
              <Github />
            </Link>
            <Link
              className="text-white/90 hover:text-white"
              href={"https://www.redbubble.com/people/josephopio/shop?asc=u"}
              target="_shop"
            >
              <ShoppingBag />
            </Link>
            <Link
              className="text-white/90 hover:text-white"
              href={"https://lms.josephopio.com"}
              target="_school"
            >
              <GraduationCap />
            </Link>
          </div>
        </div>
        <hr className="my-6 border-white/25" />
        <p
          className="container mx-auto mt-1 text-center text-xs text-gray-300"
          data-nosnippet
        >
          <span className="font-semibold">About this website:</span> built with{" "}
          <Link
            href={`https://react.dev/`}
            target="_react"
            className="font-bold"
          >
            React
          </Link>{" "}
          &{" "}
          <Link
            href={`https://nextjs.org/`}
            target="_nextjs"
            className="font-bold"
          >
            Next.js
          </Link>{" "}
          (App Router & Server Actions),{" "}
          <Link
            href={`https://www.typescriptlang.org/`}
            target="_typescript"
            className="font-bold"
          >
            TypeScript
          </Link>
          ,{" "}
          <Link
            href={`https://tailwindcss.com/`}
            target="_tailwind"
            className="font-bold"
          >
            Tailwind CSS
          </Link>
          ,{" "}
          <Link
            href={`https://www.framer.com/motion/`}
            target="_framermotion"
            className="font-bold"
          >
            Framer Motion
          </Link>
          ,{" "}
          <Link
            href={`https://react.email/`}
            target="_reactemail"
            className="font-bold"
          >
            React Email
          </Link>{" "}
          &{" "}
          <Link
            href={`https://resend.com/overview`}
            target="_resend"
            className="font-bold"
          >
            Resend
          </Link>
          ,{" "}
          <Link
            href={`https://www.raspberrypi.com/`}
            target="_raspberrypi"
            className="font-bold"
          >
            Raspberry Pi
          </Link>{" "}
          hosting.
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
