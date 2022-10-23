import * as yup from "yup";

export const ROLES = [
  {label:'ANT'},
  {label:'ANT_MANAGER'},
  {label:'ANT_OFFICER'},
  {label:'DEVELOPER'},
]

export const workBorders = [
  {id:1, name:'Белгатой'},
  {id:2, name:'Шали'},
  {id:3, name:'Урус-Мартан'},

]

const schema = yup.object().shape({
  id: yup.number().required(),
  firstName: yup.string().required().min(2),
  lastName: yup.string(),
  username: yup.string().required().min(3),
  password: yup.string().required().min(4),
  role: yup.string(),
  workBorders: yup.string(),
})

export default schema