import React from "react";
import {useParams, useNavigate, NavLink} from "react-router-dom";
import {getValuesLS, putValuesLS, deleteCard} from "../../controllers/localStorageController";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {FirstName, ID, LastName, Password, Roles, Username, WorkBorders} from "./CreateCard/fields/Fields";
import schema from "./CreateCard/fields/schema";
import {Button} from "@material-ui/core";
import styles from "../../styles.scss";

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
      <NavLink className={styles.AddButton} variant={"contained"} to={'/'}>
        <Button>{'←'}</Button>
      </NavLink>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSub)}>
          <ID id={id}/>
          <FirstName firstName={cardToShow.firstName}/>
          <LastName lastName={cardToShow.lastName}/>
          <Username userName={cardToShow.username}/>
          <Password password={cardToShow.password}/>
          <Roles role={cardToShow.roles}/>
          <WorkBorders idB={cardToShow.workBorder}/>
          <button type="submit" name="save">Submit</button>
          <button type="submit" name="delete">Delete card</button>
        </form>
      </FormProvider>
    </div>
  )
}