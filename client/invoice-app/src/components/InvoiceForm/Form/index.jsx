import { Button, IconButton, Typography, Box } from "@mui/material";

import { useForm, useFieldArray, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { transformData } from "./helpers";
import _ from 'lodash'

import fields from "./fields";


const SimpleField = ({ name, errors, control, ...rest }) => {
  console.log(errors)
  const InputForm = fields[rest.type] || fields.input;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { ref, ...field } }) => {
        return (
          <InputForm
            errors={errors}
            name={name}
            {...rest}
            {...field}
          />
        );
      }}
    />
  );


}

const Form = ({
  heading,
  formFields,
  buttonLabel,
  onSubmit,
  validationSchema,
  defaultValues,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const { fields: fieldArray, append, remove } = useFieldArray({
    control,
    name: "items",
  })

  console.log(errors, "ERRORS")
  console.log(fieldArray, "LOS FIELDS")

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(transformData(data)))}>
      <Typography variant="h2" component="h2" mb="2rem">
        {heading}
      </Typography>

      {/* Itero sobre todos los formFields y separo los grupos de los aislados */}
      {formFields.map((item) => {
        const { name, ...rest } = item;

        if (item.type === 'heading') {

          const HeadingField = fields['heading']

          return <HeadingField key={item.heading} {...item} />

        }
        if (item.type === 'array') {

          return (<>

            {fieldArray.map((field, index) => {



              return (
                <Box key={field.id} sx={item.rowStyles}>
                  <SimpleField name={`items.${index}.name`} errors={errors.items?.[index]?.name} control={control} {...rest} />
                  <SimpleField name={`items.${index}.quantity`} errors={errors.items?.[index]?.quantity} control={control} {...rest} />
                  <SimpleField name={`items.${index}.price`} errors={errors.items?.[index]?.price} control={control} {...rest} />
                  <Button onClick={() => remove(index)}>Borrar</Button>
                </Box>)
            })}



            <Button onClick={() => append({
              name: "",
              quantity: '',
              price: ''
            })}>Add Item</Button>
          </>)

        }
        if (item.type === 'container') {
          return (
            <Box key={item.id} sx={item.styles}>
              {item.children.map(({ name, ...rest }) => {

                console.log(name)
                return <SimpleField key={name} name={name} errors={_.get(errors, name)} control={control} {...rest} />
              })
              }
            </Box>)
        }

        return <SimpleField key={name} name={name} errors={_.get(errors, name)} control={control} {...rest} />


      })}
      <Box mt="2rem">
        <Button type="submit">{buttonLabel}</Button>
      </Box>

    </form>
  );
};

export default Form;

// // Es un grupo
// if (item.children) {
//   if (!item.children.length) return
//   return (



//     {/* Itero sobre todos los items del grupo y compruebo si hay campos con una disposicion especial que necesiten un container */ }
//       {
//     item.children.map((item) => {
//       // Necesitan container
//       if (item.children) {
//         if (!item.children.length) return
//         return (
//           <Box sx={item.styles}>
//             {item.children.map((i) => {
//               if (i.type === "action") {

//                 const label = i.labelButton
//                 const onClick = i.onClick

//                 if (i.mode === 'icon') {
//                   const Icon = i.icon
//                   return <IconButton onClick={onClick}>
//                     <Icon />
//                   </IconButton>
//                 } else {
//                   return <Button onClick={onClick}>{label}</Button>
//                 }

//               }

//               const { name, ...rest } = i;

//               const InputForm = fields[rest.type] || fields.input;

//               return (
//                 <Controller
//                   key={name}
//                   control={control}
//                   name={name}
//                   render={({ field: { ref, ...field } }) => {
//                     return (
//                       <InputForm
//                         errors={errors[name]}
//                         name={name}
//                         {...rest}
//                         {...field}
//                       />
//                     );
//                   }}
//                 />
//               );
//             })}

//             );
//         } else {
//           if (item.type === "actions") {
//             const Compo = i.component
//             return <Compo key={i.id} />;
//           }

//             const {name, ...rest } = item;

//             const InputForm = fields[rest.type] || fields.input;

//             if (rest.type === "file")
//             rest = {...rest, setValue, clearErrors};

//             return (
//             <Controller
//               key={name}
//               control={control}
//               name={name}
//               render={({ field: { ref, ...field } }) => {
//                 return (
//                   <InputForm
//                     errors={errors[name]}
//                     name={name}
//                     {...rest}
//                     {...field}
//                   />
//                 );
//               }}
//             />
//             );
//         }
//       })}
//           </Box>
//         );

//         // Item aislado
//       } else {
//         if (item.children) {

//           if (!item.children.length) return
//           return (
//             <Box sx={item.containerStyles}>
//               {item.children.map((i) => {
//                 if (i.type === "actions") {
//                   const Compo = i.component
//                   return <Compo key={i.id} />;
//                 }

//                 const { name, ...rest } = i;

//                 const InputForm = fields[rest.type] || fields.input;

//                 return (
//                   <Controller
//                     key={name}
//                     control={control}
//                     name={name}
//                     render={({ field: { ref, ...field } }) => {
//                       return (
//                         <InputForm
//                           errors={errors[name]}
//                           name={name}
//                           {...rest}
//                           {...field}
//                         />
//                       );
//                     }}
//                   />
//                 );
//               })}
//             </Box>
//           );
//         } else {
//           if (item.type === "actions") {
//             const Compo = i.component
//             return <Compo key={i.id} />;
//           }
//           const { name, ...rest } = item;

//           const InputForm = fields[rest.type] || fields.input;

//           if (rest.type === "file") rest = { ...rest, setValue, clearErrors };

//           return (
//             <Controller
//               key={name}
//               control={control}
//               name={name}
//               render={({ field: { ref, ...field } }) => {
//                 return (
//                   <InputForm
//                     errors={errors[name]}
//                     name={name}
//                     {...rest}
//                     {...field}
//                   />
//                 );
//               }}
//             />
//           );
//         }
//       }
//     })
//   }

