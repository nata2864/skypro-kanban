import { useState } from "react";
import { toast } from "react-toastify";
import { textValidationErrors } from "../const";

export const useCategoryValidation = () => {
  const [categoryError, setCategoryError] = useState(false);

  const validateCategory = (selectedTopic) => {
    const isValid = selectedTopic !== null;

    if (!isValid) {
      toast.error(textValidationErrors.categoryError);
      setCategoryError(true);
    } else {
      setCategoryError(false);
    }

    return isValid;
  };

  return { categoryError, validateCategory };
};
