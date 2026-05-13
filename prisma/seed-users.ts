"use server";

import { auth } from "@/lib/auth";

const users = [
  {
    email: "hi@josephopio.com",
    name: "Joseph Opio",
    password: "JesusLovesMe",
    image: "/images/landing/me2.png",
  },
  {
    email: "blessme@josephopio.com",
    name: "Joseph Opio",
    password: "Iljcmlamlfe",
    image: "/images/landing/me2.png",
  },
  {
    email: "esepuopio@gmail.com",
    name: "Joseph Opio",
    password: "Lovedone@16",
    image: "/images/landing/me2.png",
  },
];
export async function seedUsers() {
  for (const user of users) {
    const created = await auth.api.signUpEmail({
      body: {
        email: user.email,
        password: user.password,
        name: user.name,
        image: "/images/landing/me2.png",
      },
    });

    console.log(created);
  }
}

seedUsers();
