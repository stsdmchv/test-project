import React from "react";
import {useParams, useNavigate} from "react-router-dom";
import '../../styles.scss';
import {getValuesLS, putValuesLS, deleteCard} from "../../controllers/localStorageController";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {FirstName, ID, LastName, Password, Roles, Username, WorkBorders} from "./CreateCard/fields/Fields";
import schema from "./CreateCard/fields/schema";
import {TextField} from "@material-ui/core";

// @desc    Show card
// @route   GET /
// @access  Public
export const PersonCard = () => {
  const { id } = useParams()
  const cardToShow = JSON.parse(getValuesLS(id))
  const navigate = useNavigate()

  const methods = useForm({resolver: yupResolver(schema)})

  const onSub = (data, event) => {
    event.preventDefault()
    console.log(data)
    const buttonName = event.nativeEvent.submitter.name
      if (buttonName === 'save'){
          putValuesLS(id, data)
          console.log("Card updated!")
          navigate('/')}
      if (buttonName === 'delete'){
        deleteCard(id)
        console.log("Card created!")
        navigate('/')}
    }

  return (
    <div>
      <h1>User form</h1>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSub)}>
          <ID id={id}/>
          <FirstName firstName={cardToShow.firstName}/>
          <LastName lastName={cardToShow.lastName}/>
          <Username userName={cardToShow.username}/>
          <Password password={cardToShow.password}/>
          <TextField placeholder='Password' variant='outlined'/>
          <Roles role={cardToShow.roles}/>
          <WorkBorders idB={cardToShow.workBorder}/>
          <button type="submit" name="save">Submit</button>
          <button type="submit" name="delete">Delete card</button>
        </form>
      </FormProvider>
    </div>
  )
}