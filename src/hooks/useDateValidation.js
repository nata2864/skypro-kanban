import { useState } from "react";
import { toast } from "react-toastify";
import { textValidationErrors } from "../const";

export const useDateValidation = () => {
  const [dateError, setDateError] = useState(false);

  const validateDate = (selectedDate) => {
    const isValid = selectedDate !== null;

    if (!isValid) {
      toast.error(textValidationErrors.dateError);
      setDateError(true);
    } else {
      setDateError(false);
    }

    return isValid;
  };

  return { dateError, validateDate};
};
