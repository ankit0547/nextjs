"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

const isInvalidText = () => {};

export const shareMeal = async (formData) => {
  console.log(formData);
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("title"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  // if(){

  // }

  await saveMeal(meal);
  redirect("/meals");
};
