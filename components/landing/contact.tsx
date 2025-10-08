import Link from "next/link";
import { FaRegEnvelope, FaWhatsapp } from "react-icons/fa";
import { Card, CardContent } from "../ui/card";
import ContactForm from "./contact-form";

const Contact = () => {
  return (
    <section
      id="contact"
      className="container mx-auto scroll-mt-28 px-4 sm:my-30"
    >
      <h2 className="mb-12 text-4xl font-bold md:text-5xl">Contact</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
        <Card className="from-primary/80 col-span-1 border-0 bg-gradient-to-br to-purple-600/80 md:col-span-1 lg:col-span-2 dark:border dark:border-white/30 dark:from-black dark:shadow-lg dark:shadow-white/20">
          <CardContent className="space-y-6 p-8">
            <h3 className="mb-4 text-3xl font-bold text-balance text-white">
              Wanna have a chat?
            </h3>
            <p className="text-white/80">
              I&apos;d love to hear from you — whether you have a question, some
              feedback, or just want to say hello.
            </p>
            <p className="text-white/80">
              Feel free to drop me a message anytime, and I&apos;ll get back to
              you as soon as I can — usually within 24 hours.
            </p>
            <div>
              <div className="grid-md-1 grid gap-4 lg:grid-cols-2">
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex flex-row gap-2">
                    <p className="m-0 justify-center p-0 align-middle text-2xl dark:text-slate-200">
                      <FaRegEnvelope />
                    </p>
                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      Email:
                    </h5>
                  </div>
                  <Link
                    className="mb-3 font-normal text-gray-500 dark:text-gray-400"
                    href="mailto:hi@josephopio.com"
                  >
                    hi@josephopio .com
                  </Link>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex flex-row gap-2">
                    <p className="m-0 justify-center p-0 align-middle text-2xl dark:text-slate-200">
                      <FaWhatsapp />
                    </p>
                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      Whatsapp:
                    </h5>
                  </div>
                  <Link
                    className="mb-3 font-normal text-gray-500 dark:text-gray-400"
                    href="https://wa.me/256775366973"
                    target="_whatsapp"
                  >
                    +256 775 36 6973
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
