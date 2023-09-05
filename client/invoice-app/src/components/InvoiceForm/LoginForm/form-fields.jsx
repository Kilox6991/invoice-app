import * as yup from "yup";



const getFormFields = () => [
    {
        name: "email",
        label: "email",
        inputStyles: {
          width: "504px",
          marginBottom: "20px",
        },
      },
      {
        name: "password",
        label: "Password",
        inputStyles: {
          width: "504px",
          marginBottom: "20px",
        },
      },
];

const validationSchema = yup.object().shape({
  
});

export { getFormFields, validationSchema };