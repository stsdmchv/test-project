import React from "react";
import {putValuesLS} from "../../../controllers/localStorageController";
import {useNavigate} from "react-router-dom";
import {useForm, FormProvider} from "react-hook-form";
import {ID, FirstName, LastName, Password, Username} from "./fields/Fields";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import '../../../styles.scss'

// @desc    Add person
// @route   GET /addNewUser
// @access  Public
export const AddPerson = () => {
  let id = Object.keys(localStorage).length + 1
  let navigate = useNavigate();

  const schema = yup.object().shape({
    id: yup.number().required(),
    firstName: yup.string().required().min(2),
    lastName: yup.string(),
    username: yup.string().required().min(3),
    password: yup.string().required().min(4),
  })
  const methods = useForm({resolver: yupResolver(schema)})

  return (
    <div>
      <h1>User form</h1>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => {
            methods.unregister('confirmPassword')
            putValuesLS(id, data)
            navigate('/')
          })}>
          <ID id={id}/>
          <br/>
          <br/>
          <FirstName />
          <br/>
          <br/>
          <LastName />
          <br/>
          <br/>
          <Username />
          <br/>
          <br/>
          <Password />
          <br/>
          <br/>
          <input type="submit"/>
        </form>
      </FormProvider>
    </div>
  )
}