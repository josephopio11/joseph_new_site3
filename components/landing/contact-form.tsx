"use client";

import { sendEmail } from "@/actions/sendEmail";
import { verifyCaptcha } from "@/actions/serverActions";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const ContactForm = () => {
  //Google Recaptcha
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleCaptchaSubmission(token: string | null) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => setIsVerified(true))
      .catch(() => setIsVerified(false));
  }
  return (
    <Card className="bg-card/50 border-border col-span-1 md:col-span-1 lg:col-span-3">
      <CardContent className="p-8">
        <form
          className="space-y-6"
          action={async (formData) => {
            setIsLoading(true);
            const { data, error } = await sendEmail(formData);
            if (error) {
              toast.error(error || "");
              return;
            }
            if (data?.error) {
              toast.error(data.error.message);
              return;
            }
            toast.success("Email sent successfully!");
            setIsLoading(false);
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="senderEmail">Your email</Label>
            <Input
              className="h-14 rounded-lg px-4 transition-all"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Your message</Label>
            <Textarea
              className="my-3 h-52 rounded-lg p-4 transition-all"
              name="message"
              placeholder="Your message"
              required
              maxLength={5000}
            />
          </div>
          <div className="flex flex-wrap items-center gap-2 md:justify-between">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
              ref={recaptchaRef}
              onChange={handleCaptchaSubmission}
              type="image"
            />

            <Button type="submit" disabled={!isVerified || isLoading}>
              <FaPaperPlane className="mr-2" />
              <span className="sr-only">Send message</span>
              Submit
            </Button>
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
