import * as S from "./PopNewCardForm.styled";

// import { checkRequiredFields } from "../../utils";
// import { useState } from "react";


function PopNewCardForm({handleChange,formData}) {
  // const [formData, setFormData] = useState({
  //   task: "",
  //   description: "",
  // });

  // const [errors, setErrors] = useState({
  //   task: false,
  //   description: false,
  //   password: false,
  // });

  // const [error, setError] = useState("");

  // const validateForm = () => {
  //   const requiredFields = ["task", "description"];
  //   const { isValid, errors } = checkRequiredFields(formData, requiredFields);

  //   setErrors(errors);
  //   setError(isValid ? "" : "Введите данные");
  //   return isValid;
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  //   setErrors({ ...errors, [name]: false });
  //   setError("");
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!validateForm()) {
  //     return;
  //   } else {
  //     console.log("Valid");
  //   }
  // };

  return (
    <S.Form >
      <S.FormBlock>
        <S.Label htmlFor="formTitle">Название задачи</S.Label>
        <S.Input
          name="task"
          // $error={errors.task}
          value={formData.task}
          onChange={handleChange}
          type="text"
          id="formTitle"
          placeholder="Введите название задачи..."
        />
      </S.FormBlock>
      <S.FormBlock>
        <S.Label htmlFor="textArea">Описание задачи</S.Label>
        <S.TextArea
          name="description"
          // $error={errors.description}
          value={formData.description}
          onChange={handleChange}
          id="textArea"
          placeholder="Введите описание задачи..."
        />

        {/* {error && <S.PopUpErrorText>{error}</S.PopUpErrorText>} */}
      </S.FormBlock>
    </S.Form>
  );
}

export default PopNewCardForm;
