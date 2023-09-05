import * as yup from "yup";



const getFormFields = (onAdd, invoiceRows) => [
  {
    heading: "Bill to",
    groupStyles: { marginBottom: "50px" },
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
      }
    ],
  },
  {
    heading: "Bill from",
    groupStyles: { marginBottom: "50px" },
    children: [
      {
        name: "clientName",
        label: "Client's Name",
        inputStyles: {
          width: "504px",
          marginBottom: "20px",
        },
      },
      {
        name: "clientEmail",
        label: "Client's Email",
        inputStyles: {
          width: "504px",
          marginBottom: "20px",
        },
      },
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


    ],
  },
  {
    name: "date",
    label: "Date",
    type: "date",
  },

  {
    name: "terms",
    label: "Payment Terms",
    type: "select",
    options: [{ label: "Net 1 Day", value: "1" }, { label: "Net 7 Days", value: "7" }, { label: "Net 14 Days", value: "14" }, { label: "Net 30 Days", value: "30" },],
  },
  {
    name: "description",
    label: "Description",
    inputStyles: {
      width: "504px",
    },
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
