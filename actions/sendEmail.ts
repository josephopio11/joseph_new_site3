"use server";

import ContactFormEmail from "@/email/contactFormEmail";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log("formData", formData);
  const senderEmail = formData.get("senderEmail");
  const name = formData.get("name");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(name, 500)) {
    return {
      error: "Invalid name",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  // biome-ignore lint/suspicious/noImplicitAnyLet: <It will still work, why worry about it?>
  let data;
  try {
    data = await resend.emails.send({
      from: "Website Contact Form <onboarding@resend.dev>",
      to: "josephopio11@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, {
        name: name,
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
