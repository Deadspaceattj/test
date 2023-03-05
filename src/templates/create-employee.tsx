import * as React from "react";
import { Stack, Box, Button, Typography, Switch } from "@mui/material";

import { MyTitle } from "./../components/title";
import { MyInput } from "./../components/input";
import { MySwitch } from "./../components/switch";
import { MyAccordionItem } from "./../components/accordion";
// import CustomizedHook from "./../components/autocomplete";

import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

enum ValidationMessages {
  REQUIRED = "Please enter a value (mandatory)",
  EMAIL = "Please enter a valid Email"
}

const schema = yup.object().shape({
  firstname: yup.string().required(ValidationMessages.REQUIRED),
  lastname: yup.string().required(ValidationMessages.REQUIRED),
  employeeId: yup.string().required(ValidationMessages.REQUIRED),
  nickname: yup.string(),
  access: yup.bool(),
  email: yup.string().email(ValidationMessages.EMAIL)
});

export const CreateEmployee = () => {
  // const accordionItems: string[] = ["namee", "access", "crew"];

  // TODO: REFACTOR these expanded states
  const [expanded, setExpanded] = React.useState<string | false>("name");
  const [expanded1, setExpanded1] = React.useState<string | false>("access");
  // const [expanded2, setExpanded2] = React.useState<string | false>("crew");

  const [checked, setChecked] = React.useState(false);
  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  // const [currentAccordionItems, updateCurrentAccordionItems] = React.useState<
  //   string[]
  // >(accordionItems);

  /**
   *
   * @param id
   * Checks if current id is an element of
   * usestate array and set return respectively
   */
  // const isAccordionItemExpanded: (id: string) => boolean = (id: string) => {
  //   let hasAccordionItem: boolean = false;
  //   currentAccordionItems.forEach((currentItem: string) => {
  //     if (id === currentItem) {
  //       hasAccordionItem = true;
  //     }
  //   });
  //   console.log(hasAccordionItem);
  //   return hasAccordionItem;
  // };

  /**
   * Check if current id is an element of
   * usestate array.
   * If true remove current id and skip.
   * If false add current id and skip.
   */
  // const handleAccordionItemUpdate: (id: string) => void = (id: string) => {
  //   console.log(id);
  //   isAccordionItemExpanded(id)
  //     ? updateCurrentAccordionItems((arr) => [...arr, id])
  //     : updateCurrentAccordionItems(
  //         accordionItems.filter((item) => item !== id)
  //       );
  // };

  // const autocomplete = CustomizedHook();

  // TODO: REFACTOR the handlcoeAccordionChange handlers
  const handleAccordionChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleAccordionChange1 = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded1(isExpanded ? panel : false);
  };
  // const handleAccordionChange2 = (panel: string) => (
  //   event: React.SyntheticEvent,
  //   isExpanded: boolean
  // ) => {
  //   setExpanded2(isExpanded ? panel : false);
  // };

  interface EmployeeForm {
    firstname: string;
    lastname: string;
    employeeId: string;
    email: string;
    access: boolean;
    nickname: string;
  }

  const defaultValues: EmployeeForm = {
    firstname: "",
    lastname: "",
    employeeId: "",
    email: "",
    access: false,
    nickname: ""
  };

  const methods = useForm<EmployeeForm>({
    reValidateMode: "onChange",
    defaultValues: defaultValues ?? {},
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<EmployeeForm> = (data: EmployeeForm) =>
    console.log(data);

  return (
    <Box
      sx={{
        ".MuiAccordion-root": {
          boxShadow: "none"
        },
        ".MuiAccordionDetails-root": {
          padding: "8px 24px 16px",
          backgroundColor: "#f6f6f6"
        }
      }}
    >
      <MyTitle
        title="Create Employee"
        sx={{
          padding: "8px 16px 16px"
        }}
      ></MyTitle>
      <FormProvider {...methods}>
        <form
          noValidate
          onSubmit={methods.handleSubmit(onSubmit)}
          sx={{
            height: "calc(100% - 40px)"
          }}
        >
          <Box>
            <MyAccordionItem
              expanded={expanded === "name"}
              onChange={handleAccordionChange("name")}
              id="name"
              title="Employee"
              noClick
              required
            >
              <Stack direction="row" spacing="24px">
                <MyInput
                  label="Firstname"
                  id="firstname"
                  name="firstname"
                  required
                  fullWidth
                ></MyInput>
                <MyInput
                  label="Lastname"
                  id="lastname"
                  name="lastname"
                  required
                  fullWidth
                ></MyInput>
              </Stack>
              <Stack direction="row" spacing="24px">
                <MyInput
                  name="nickname"
                  label="Nickname"
                  id="nickname"
                  fullWidth
                ></MyInput>
                <MyInput
                  label="Employee Id"
                  id="employeeId"
                  name="employeeId"
                  fullWidth
                  required
                ></MyInput>
              </Stack>
              {/* <Box sx={{ marginTop: "4px" }}>
              <Button variant="text">Next</Button>
            </Box> */}
            </MyAccordionItem>
            <MyAccordionItem
              expanded={expanded1 === "access"}
              onChange={handleAccordionChange1("access")}
              id="access"
              title="Access"
              description="Grant application access"
              noClick
            >
              <Stack direction="row" spacing="24px" alignItems="center">
                <Typography>User has access to applications?</Typography>
                <Switch
                  checked={checked}
                  onChange={handleSwitch}
                  name="access"
                  id="access"
                  inputProps={{ "aria-label": "controlled" }}
                />
              </Stack>
              <Stack>
                <MyInput
                  sx={{
                    display: checked ? "block" : "none",
                    width: "calc(50% - 10px)"
                  }}
                  name="email"
                  label="Email"
                  id="email"
                  fullWidth
                ></MyInput>
              </Stack>
              {/* <Box sx={{ marginTop: "4px" }}>
              <Button variant="text">Next</Button>
            </Box> */}
            </MyAccordionItem>
            {/* <MyAccordionItem
            expanded={expanded2 === "crew"}
            onChange={handleAccordionChange2("crew")}
            id="crew"
            title="Crew"
            description="Add crew"
          >
            <Stack direction="row" spacing="24px">
              {autocomplete}
            </Stack>

          </MyAccordionItem> */}
          </Box>
          <Box
            sx={{
              padding: "16px",
              position: "fixed",
              bottom: "0",
              width: "100%",
              backgroundColor: "white",
              borderTop: "1px solid #ededed"
            }}
          >
            <Stack direction="row" gap="16px">
              <Button type="submit" variant="contained" disableElevation>
                Create
              </Button>
              <Button disableElevation>Copy & create new</Button>
            </Stack>
          </Box>
        </form>
      </FormProvider>
    </Box>
  );
};
