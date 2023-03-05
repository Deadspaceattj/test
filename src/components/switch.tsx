import * as React from "react";
import { Switch } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export const MySwitch = ({ name = "", id, rules, inputProps }) => {
  const { control } = useFormContext();
  const [isChecked, setChecked] = React.useState(false);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => {
        const handleChange = (e) => {
          setChecked(e.target.checked);
          return field.onChange(e.target.checked);
        };
        return (
          <Switch
            {...field}
            checked={field.value}
            onChange={handleChange}
            name={field.name}
            id={id}
            inputProps={inputProps}
          />
        );
      }}
    />
  );
};
