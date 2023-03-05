import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { alpha, styled } from "@mui/material/styles";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";

const StyledTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "light" ? "white" : "#2b2b2b",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow"
    ]),
    "&, &:hover": {
      backgroundColor: "white !important"
    },
    "&.Mui-focused": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main
    }
  },
  ".MuiFilledInput-underline:before": {
    border: "none !important"
  },
  ".Mui-focused:after": {
    border: "none"
  }
}));

export const MyInput = (props) => {
  const {
    autoFocus = false,
    label = "Label",
    placeholder = "Type",
    id,
    variant = "filled",
    required = false,
    fullWidth = false,
    InputProps,
    name = "",
    rules,
    sx
  } = props;

  const { control, formState } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={rules}
      render={({ field }) => {
        const { onChange, onBlur, value, name = "", ref } = field;
        const { errors } = formState;

        return (
          <StyledTextField
            helperText={errors[name] ? errors[name].message : null}
            error={!!errors[name]}
            id={id}
            value={value}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            autoFocus={autoFocus}
            required={required}
            label={label}
            placeholder={placeholder}
            variant={variant}
            style={{
              marginTop: 11,
              minWidth: `${fullWidth ? "initial" : "270px"}`
            }}
            fullWidth={fullWidth}
            sx={sx}
            margin="dense"
            inputRef={ref}
            InputProps={InputProps}
          />
        );
      }}
    />
  );
};
