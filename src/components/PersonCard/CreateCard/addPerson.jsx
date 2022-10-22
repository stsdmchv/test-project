import React from "react";
import {putValuesLS} from "../../../controllers/localStorageController";
import {useNavigate} from "react-router-dom";
import {useForm, FormProvider} from "react-hook-form";
import {ID, FirstName, LastName, Password, Username} from "./fields/Fields";
import {yupResolver} from "@hookform/resolvers/yup";
import '../../../styles.scss'
import schema from "./fields/schema";

// @desc    Add person
// @route   GET /addNewUser
// @access  Public
export const AddPerson = () => {
  let id = Math.max(Object.keys(localStorage).map(item => item)) + 1
  let navigate = useNavigate();

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