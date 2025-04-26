import { useState } from "react";
import { toast } from "react-toastify";
import { checkRequiredFields } from "../utils";
import { textValidationErrors } from "../const";

export const useFormValidation = (formData, requiredFields) => {
  const [formError, setFormError] = useState(false);

  const validateForm = () => {
    const { isValid } = checkRequiredFields(formData, requiredFields);

    if (!isValid) {
      toast.error(textValidationErrors.formError);
      setFormError(true);
    } else {
      setFormError(false);
    }

    return isValid;
  };

  return { formError, validateForm };
};
