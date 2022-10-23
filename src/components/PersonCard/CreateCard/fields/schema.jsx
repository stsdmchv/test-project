import * as yup from "yup";

export const ROLES = [
  {value:1, label:'ANT'},
  {value:2, label:'ANT_MANAGER'},
  {value:3, label:'ANT_OFFICER'},
  {value:4, label:'DEVELOPER'},
]

const schema = yup.object().shape({
  id: yup.number().required(),
  firstName: yup.string().required().min(2),
  lastName: yup.string(),
  username: yup.string().required().min(3),
  password: yup.string().required().min(4),
  role: yup.string(),
})

export default schema