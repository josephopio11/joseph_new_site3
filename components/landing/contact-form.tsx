"use client";

import { sendEmail } from "@/actions/sendEmail";
import { verifyCaptcha } from "@/actions/serverActions";
import { useSectionInView } from "@/lib/hooks";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ContactForm = () => {
  const { ref } = useSectionInView("Blog");

  //Google Recaptcha
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsverified] = useState<boolean>(false);

  async function handleCaptchaSubmission(token: string | null) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
  }
  return (
    <Card className="bg-card/50 border-border md:col-span-3" ref={ref}>
      <CardContent className="p-8">
        <form
          className="mt-10 flex flex-col dark:text-black"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);
            // if (!!error) {
            //   toast.error(error!);
            //   return;
            // }
            // if (!!data?.error) {
            //   toast.error(data.error.message);
            //   return;
            // }
            // toast.success("Email sent successfully!");
          }}
        >
          <Input
            className="borderBlack dark:bg-opacity-80 dark:focus:bg-opacity-100 h-14 rounded-lg px-4 transition-all dark:bg-white dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <Textarea
            className="borderBlack dark:bg-opacity-80 dark:focus:bg-opacity-100 my-3 h-52 rounded-lg p-4 transition-all dark:bg-white dark:outline-none"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <div className="flex flex-col md:flex-row md:justify-between">
            {/* @ts-ignore */}
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              ref={recaptchaRef}
              onChange={handleCaptchaSubmission}
              type="image"
            />

            <Button type="submit" disabled={!isVerified} />
          </div>
        </form>
        {/* <form className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium">Name</label>
            <Input placeholder="Sara" className="bg-background border-border" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-background border-border"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Message</label>
            <Textarea
              placeholder="Enter message"
              rows={4}
              className="bg-background border-border resize-none"
            />
          </div>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
            Send Message
          </Button>
        </form> */}
      </CardContent>
    </Card>
  );
};

export default ContactForm;
