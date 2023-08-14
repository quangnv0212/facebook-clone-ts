import * as yup from 'yup'

export const userSchema = yup.object({
    email: yup.string().required(),
    gender: yup.string().required(),
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    bYear: yup.number().required(),
    password: yup.string().required(),
    bMonth: yup.number().required(),
    bDay: yup.number().required(),
  });
// từ yup schema => type
export type UserSchema = yup.InferType<typeof userSchema>;