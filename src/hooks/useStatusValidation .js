import { useState } from "react";
import { toast } from "react-toastify";
import { textValidationErrors } from "../const";

const useStatusValidation = () => {
  const [statusError, setStatusError] = useState(false);

  const validateStatus = (selectedStatus) => {
    const isValid = selectedStatus !== null;

    if (!isValid) {
      toast.error(textValidationErrors.statusError);
      setStatusError(true);
    } else {
      setStatusError(false);
    }

    return isValid;
  };

  return { statusError, validateStatus};
};

export default useStatusValidation;