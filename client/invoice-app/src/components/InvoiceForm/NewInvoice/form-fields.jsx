import * as yup from "yup";

const getFormFields = () => [
  {
    heading: "Bill to",
    type: 'heading',
    styles: { marginBottom: "50px" },
  },
  {
    name: "senderAddress.street",
    label: "streetAddress",
    inputStyles: {
      width: "504px",
      marginBottom: "20px",
    },
  },
  {
    containerId: "1",
    styles: {
      marginTop: "25px",
      display: "flex",
      padding: 0,
    },
    type: "container",
    children: [
      {
        name: "senderAddress.city",
        label: "cityFrom",
        inputStyles: {
          width: "152px",
        },
      },
      {
        name: "senderAddress.postCode",
        label: "postCodeFrom",
        inputStyles: {
          width: "152px",
        },
      },
      {
        name: "senderAddress.country",
        label: "Country From",
        inputStyles: {
          width: "152px",
        },
      },
    ],
  },
  {
    heading: "Bill from",
    type: 'heading',
    headingStyles: { marginBottom: "50px" },
  },
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
    name: "clientAddress.street",
    label: "streetAddress",
    inputStyles: {
      width: "504px",
      marginBottom: "20px",
    },
  },

  {
    styles: {
      marginTop: "25px",
      display: "flex",
      padding: 0,
    },
    type: "container",
    containerId: "2",
    children: [
      {
        name: "clientAddress.city",
        label: "cityFrom",
        inputStyles: {
          width: "152px",
        },
      },
      {
        name: "clientAddress.postCode",
        label: "postCodeFrom",
        inputStyles: {
          width: "152px",
        },
      },
      {
        name: "clientAddress.country",
        label: "Country From",
        inputStyles: {
          width: "152px",
        },
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
    type: 'heading',
    headingStyles: { marginBottom: "100px", color: "gray" },

  },
  {
    name: "items",
    type: "array",
    rowStyles: {},
    children: [{
      "name": "Producto 1",
      "quantity": 2,
      "price": 50.00
    },
    {
      "name": "Producto 2",
      "quantity": 3,
      "price": 25.00
    }],
  }


];

const validationSchema = yup.object().shape({
  clientName: yup.string().required(),
  senderAddress: yup.object().shape({
    street: yup.string().required(),
    city: yup.string().required(),
    postCode: yup.string().required(),
    country: yup.string().required(),
  }),
  items: yup.array().of(
    yup.object().shape({
      name: yup.string().required("Nombre obligatorio"),
      quantity: yup.number().typeError("Debe ser un numero").required("Quantity obligatoria"),
      price: yup.number().typeError("Debe ser un numero").required(),
    })
  )

});

export { getFormFields, validationSchema };
