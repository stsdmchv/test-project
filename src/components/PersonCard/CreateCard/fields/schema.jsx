import * as yup from "yup";

const schema = yup.object().shape({
  id: yup.number().required(),
  firstName: yup.string().required().min(2),
  lastName: yup.string(),
  username: yup.string().required().min(3),
  password: yup.string().required().min(4),
})

export default schema