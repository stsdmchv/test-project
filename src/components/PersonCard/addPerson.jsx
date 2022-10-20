import React from "react";
import '../../styles.scss';
import {putValuesLS} from "../../controllers/localStorageController";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

// @desc    Add person
// @route   GET /addNewUser
// @access  Public
export const AddPerson = () => {
  let id = Object.keys(localStorage).length + 1
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: {errors},
    unregister,
    watch,
  } = useForm({
    defaultValues: {
      id: id,
    }
  })

  return (
    <div>
      <h1>User form</h1>
      <form
        onSubmit={handleSubmit((data) => {
          unregister('confirmPassword')
          putValuesLS(id, data)
          navigate('/')
        })}
      >
        <input {...register("id")} placeholder="id"/>
        <p>{errors.id?.message}</p>
        <input {...register("firstName", {
          required: 'Type ur name', minLength: {
            value: 2,
            message: 'Min length = 2'
          }
        })} placeholder="First Name"/>
        <p>{errors.firstName?.message}</p>
        <input {...register("lastName")} placeholder="Last Name"/>
        <p>{errors.id?.message}</p>
        <input {...register("username", {
          required: 'Need create a username', minLength: {
            value: 3,
            message: 'Min length = 3'
          }
        })} placeholder="Username"/>
        <p>{errors.username?.message}</p>
        <input {...register("password", {
          required: 'U need to come up with a password', minLength: {
            value: 4,
            message: 'Min length = 4'
          }
        })} placeholder="Password"/>
        <p>{errors.password?.message}</p>
        <input {...register("confirmPassword")} placeholder="Confirm password"/>
        <input type="submit"/>
      </form>
    </div>
  )
}