import { useState } from "react";
import { toast } from "react-toastify";

export const useDateValidation = () => {
  const [dateError, setDateError] = useState(false);

  const validateDate = (selectedData) => {
    const isValid = selectedData !== null;

    if (!isValid) {
      toast.error("Пожалуйста, выберите дату");
      setDateError(true);
    } else {
      setDateError(false);
    }

    return isValid;
  };

  return { dateError, validateDate};
};
