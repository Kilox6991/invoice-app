import * as yup from "yup";



const getFormFields = (onAdd, invoiceRows) => [
  {
    heading: "Bill to",
    groupStyles: { marginBottom: "100px" },
    children: [
      {
        name: "streetAddress",
        label: "streetAddress",
        inputStyles: {
          width: "504px",
          marginBottom: "20px",
        },
      },
      {
        containerStyles: {
          marginTop: "25px",
          display: "flex",
          padding: 0,
        },
        children: [
          {
            name: "city",
            label: "cityFrom",
            inputStyles: {
              width: "152px",
            },
          },
          {
            name: "postCodeFrom",
            label: "postCodeFrom",
            inputStyles: {
              width: "152px",
            },
          },
          {
            name: "countryFrom",
            label: "Country From",
            inputStyles: {
              width: "152px",
            },
          },
        ],
      },
      //   {
      //     name: "terms",
      //     label: "Terms",
      //     type: "select",
      //     placeholder: "Elige terminos",
      //     options: [{ label: "30 días de pago", value: "30" }],
      //   },
    ],
  },

  {
    heading: "List Items",
    groupStyles: { marginBottom: "100px" },
    children: invoiceRows
  },

  {
    groupStyles: { marginBottom: "100px" },
    children: [
      {
        containerStyles: {
          padding: 0,
        },
        children: [
          {
            id: "1",
            type: "action",
            labelButton: "Añade item",
    
            onClick: onAdd
          },
        ],
      },
    ],
  },
 
];

const validationSchema = yup.object().shape({
  postCodeFrom: yup.string().required(),
});

export { getFormFields, validationSchema };
