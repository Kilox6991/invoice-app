import { Button, IconButton, Typography, Box } from "@mui/material";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { transformData } from "./helpers";

import fields from "./fields";

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
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
  });
  console.log(errors);
  return (
    <form onSubmit={handleSubmit((data) => onSubmit(transformData(data)))}>
      <Typography variant="h2" component="h2" mb="2rem">
        {heading}
      </Typography>

      {/* Itero sobre todos los formFields y separo los grupos de los aislados */}
      {formFields.map((item) => {
        const { name, heading, ...rest } = item;
        console.log(item.children);

        // Es un grupo
        if (item.children) {
          if(!item.children.length) return
          return (
            <Box key={heading} sx={item.groupStyles}>
              <div style={{ marginBottom: "26px" }}>
                <label htmlFor="streetAddress" style={{ color: "#7C5DFA" }}>
                  {heading}
                </label>
              </div>

              {/* Itero sobre todos los items del grupo y compruebo si hay campos con una disposicion especial que necesiten un container */}
              {item.children.map((item) => {
                // Necesitan container
                if (item.children) {
                  if(!item.children.length) return
                  return (
                    <Box sx={item.styles}>
                      {item.children.map((i) => {
                        if (i.type === "action") {
						
                          const label = i.labelButton
						  const onClick = i.onClick

						  if(i.mode === 'icon') {
                const Icon = i.icon
							return <IconButton onClick={onClick}>
								<Icon />
							</IconButton>
						  } else {
							return <Button onClick={onClick}>{label}</Button>
						  }
                          
                        }

                        const { name, ...rest } = i;

                        const InputForm = fields[rest.type] || fields.input;

                        return (
                          <Controller
                            key={name}
                            control={control}
                            name={name}
                            render={({ field: { ref, ...field } }) => {
                              return (
                                <InputForm
                                  errors={errors[name]}
                                  name={name}
                                  {...rest}
                                  {...field}
                                />
                              );
                            }}
                          />
                        );
                      })}
                    </Box>
                  );
                } else {
                  if (item.type === "actions") {
                    const Compo = i.component
                    return <Compo key={i.id} />;
                  }

                  const { name, ...rest } = item;

                  const InputForm = fields[rest.type] || fields.input;

                  if (rest.type === "file")
                    rest = { ...rest, setValue, clearErrors };

                  return (
                    <Controller
                      key={name}
                      control={control}
                      name={name}
                      render={({ field: { ref, ...field } }) => {
                        return (
                          <InputForm
                            errors={errors[name]}
                            name={name}
                            {...rest}
                            {...field}
                          />
                        );
                      }}
                    />
                  );
                }
              })}
            </Box>
          );

          // Item aislado
        } else {
          if (item.children) {

            if(!item.children.length) return
            return (
              <Box sx={item.containerStyles}>
                {item.children.map((i) => {
                  if (i.type === "actions") {
					const Compo = i.component
					return <Compo key={i.id} />;
                  }

                  const { name, ...rest } = i;

                  const InputForm = fields[rest.type] || fields.input;

                  return (
                    <Controller
                      key={name}
                      control={control}
                      name={name}
                      render={({ field: { ref, ...field } }) => {
                        return (
                          <InputForm
                            errors={errors[name]}
                            name={name}
                            {...rest}
                            {...field}
                          />
                        );
                      }}
                    />
                  );
                })}
              </Box>
            );
          } else {
            if (item.type === "actions") {
				const Compo = i.component
				return <Compo key={i.id} />;
            }
            const { name, ...rest } = item;

            const InputForm = fields[rest.type] || fields.input;

            if (rest.type === "file") rest = { ...rest, setValue, clearErrors };

            return (
              <Controller
                key={name}
                control={control}
                name={name}
                render={({ field: { ref, ...field } }) => {
                  return (
                    <InputForm
                      errors={errors[name]}
                      name={name}
                      {...rest}
                      {...field}
                    />
                  );
                }}
              />
            );
          }
        }
      })}

      <Box mt="2rem">
        <Button type="submit">{buttonLabel}</Button>
      </Box>
    </form>
  );
};

export default Form;
