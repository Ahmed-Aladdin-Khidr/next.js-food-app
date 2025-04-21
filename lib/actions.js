"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
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

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image || meal.image.size === 0
  ) {
    return {
      message: 'Please fill in all fields correctly!',
    };
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
