import React from "react";
import {putValuesLS} from "../../../controllers/localStorageController";
import {NavLink, useNavigate} from "react-router-dom";
import {useForm, FormProvider} from "react-hook-form";
import {ID, FirstName, LastName, Password, Username, Roles, WorkBorders} from "./fields/Fields";
import {yupResolver} from "@hookform/resolvers/yup";
import '../../../styles.scss'
import schema from "./fields/schema";
import styles from "../../../styles.scss";
import {Button} from "@material-ui/core";

Array.prototype.max = function () {
  return Math.max.apply(null, this);
};

const calculateCardId = () => {
  const id = (Object.keys(localStorage)).max() + 1
  return isFinite(id) ? id : 1;
}
// @desc    Add person
// @route   GET /addNewUser
// @access  Public
export const AddPerson = () => {
  let id = calculateCardId()
  let navigate = useNavigate();

  const methods = useForm({resolver: yupResolver(schema)})

  return (
    <div>
      <h1>User form</h1>
      <NavLink className={styles.AddButton} variant={"contained"} to={'/'}>
        <Button>{'←'}</Button>
      </NavLink>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => {
            // methods.unregister('confirmPassword')
            putValuesLS(id, data)
            console.log("Card created!")
            navigate('/')
          })}>
          <ID id={id} />
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
          <Roles />
          <br/>
          <br/>
          <WorkBorders />
          <input type="submit"/>
        </form>
      </FormProvider>
    </div>
  )
}