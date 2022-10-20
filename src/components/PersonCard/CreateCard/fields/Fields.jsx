import {TextField} from "@material-ui/core";
import {Controller, useFormContext} from "react-hook-form";
import React from "react";

export const ID = ({id}) => {
  const {control, formState: { errors }} = useFormContext()

  return (
    <Controller
    name='id'
    control={control}
    defaultValue={id}
    render={({field}) => (
      <TextField
        {...field}
        label='ID'
        variant='outlined'
        error={!!errors.id}
        helperText={errors.id ? errors.id?.message:''}
      />

    )}/>
  )
}

export const FirstName = () => {
  const {control, formState: { errors }} = useFormContext()

  return (
    <Controller
      name='firstName'
      control={control}
      defaultValue=''
      render={({field}) => (
        <TextField
          {...field}
          label='First name'
          variant='outlined'
          error={!!errors.firstName}
          helperText={errors.firstName ? errors.firstName?.message:''}
        />

      )}/>
  )
}

export const LastName = () => {
  const {control, formState: { errors }} = useFormContext()

  return (
    <Controller
      name='lastName'
      control={control}
      defaultValue=''
      render={({field}) => (
        <TextField
          {...field}
          label='Last name'
          variant='outlined'
          error={!!errors.lastName}
          helperText={errors.lastName ? errors.lastName?.message:''}
        />

      )}/>
  )
}

export const Password = () => {
  const {control, formState: { errors }} = useFormContext()

  return (
    <Controller
      name='password'
      control={control}
      defaultValue=''
      render={({field}) => (
        <TextField
          {...field}
          label='Password'
          variant='outlined'
          error={!!errors.password}
          helperText={errors.password ? errors.password?.message:''}
        />

      )}/>
  )
}

export const Username = () => {
  const {control, formState: { errors }} = useFormContext()

  return (
    <Controller
      name='username'
      control={control}
      defaultValue=''
      render={({field}) => (
        <TextField
          {...field}
          label='Username'
          variant='outlined'
          error={!!errors.username}
          helperText={errors.username ? errors.username?.message:''}
        />

      )}/>
  )
}