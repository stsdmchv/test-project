import React from "react";
import {useParams, useNavigate} from "react-router-dom";
import '../../styles.scss';
import {getValuesLS, putValuesLS, deleteCard} from "../../controllers/localStorageController";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {FirstName, ID, LastName, Password, Roles, Username, WorkBorders} from "./CreateCard/fields/Fields";
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
          onSubmit={(event) => {
            const buttonName = event.nativeEvent.submitter.name
            console.log(buttonName)
            if (buttonName === 'save'){
              methods.handleSubmit((data) => {
                putValuesLS(id, data)
                console.log("Card updated!")
                navigate('/')})}
            if (buttonName === 'delete'){
              deleteCard(id)
              console.log("Card created!")
              navigate('/')}
            }
          }>
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
          <Roles role={cardToShow.roles}/>
          <br/>
          <br/>
          <WorkBorders idB={cardToShow.workBorder}/>
          <button type="submit" name="save">Submit</button>
          <button type="submit" name="delete">Delete card</button>
        </form>
      </FormProvider>
    </div>
  )
}