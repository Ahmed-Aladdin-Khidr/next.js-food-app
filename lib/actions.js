"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(formData) {
  // This is a server action, so we can use server-side features here
  // such as database access, sending emails, etc.
  // This function will be called when the form is submitted
  // and will run on the server.
  // You can access the form data using the `FormData` API
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  await saveMeal(meal);
  redirect('/meals');
}
