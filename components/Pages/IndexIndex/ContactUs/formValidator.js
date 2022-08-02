import * as yup from "yup";


export const formValidatorSchema = yup
  .object({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
    number: yup.string().required(),
  })
  .required();