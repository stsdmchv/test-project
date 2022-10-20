import React from "react";
import {useParams, useNavigate} from "react-router-dom";
import '../../styles.scss';
import {getValuesLS, putValuesLS} from "../../controllers/localStorageController";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {FirstName, ID, LastName, Password, Username} from "./CreateCard/fields/Fields";
import schema from "./CreateCard/fields/schema";

// @desc    Show card
// @route   GET /
// @access  Public
export const PersonCard = () => {
  const { id } = useParams()
  const cardToShow = JSON.parse(getValuesLS(id))
  const navigate = useNavigate()

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
          <FirstName firstName={cardToShow.firstName}/>
          <br/>
          <br/>
          <LastName lastName={cardToShow.lastName}/>
          <br/>
          <br/>
          <Username userName={cardToShow.username}/>
          <br/>
          <br/>
          <Password password={cardToShow.password}/>
          <br/>
          <br/>
          <input type="submit"/>
        </form>
      </FormProvider>
    </div>
  )
}