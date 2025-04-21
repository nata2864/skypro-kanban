import { useState } from "react";
import { toast } from "react-toastify";

export const useStatusValidation = () => {
  const [statusError, setStatusError] = useState(false);

  const validateStatus = (selectedStatus) => {
    const isValid = selectedStatus !== null;

    if (!isValid) {
      toast.error("Пожалуйста, выберите статус");
      setStatusError(true);
    } else {
      setStatusError(false);
    }

    return isValid;
  };

  return { statusError, validateStatus};
};
