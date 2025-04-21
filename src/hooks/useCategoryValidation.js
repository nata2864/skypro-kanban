import { useState } from "react";
import { toast } from "react-toastify";

export const useCategoryValidation = () => {
  const [categoryError, setCategoryError] = useState(false);

  const validateCategory = (selectedTopic) => {
    const isValid = selectedTopic !== null;

    if (!isValid) {
      toast.error("Пожалуйста, выберите категорию");
      setCategoryError(true);
    } else {
      setCategoryError(false);
    }

    return isValid;
  };

  return { categoryError, validateCategory };
};
