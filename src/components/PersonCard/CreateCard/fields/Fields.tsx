import {TextField,} from "@material-ui/core";
import {Controller, useFormContext} from "react-hook-form";
import React from "react";
import {ROLES, workBorders} from "./schema.tsx";
import Select from 'react-select'

export const ID = ({id}) => {
  const {control, formState: {errors}} = useFormContext()

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
          helperText={errors.id ? errors.id?.message : ''}
        />

      )}/>
  )
}

export const FirstName = (props) => {
  const {control, formState: {errors}} = useFormContext()
  return (
    <Controller
      name='firstName'
      control={control}
      defaultValue={props ? props.firstName : 'b'}
      render={({field}) => (
        <TextField
          {...field}
          label='First name'
          variant='outlined'
          error={!!errors.firstName}
          helperText={errors.firstName ? errors.firstName?.message : ''}
        />

      )}/>
  )
}

export const LastName = (props) => {
  const {control, formState: {errors}} = useFormContext()

  return (
    <Controller
      name='lastName'
      control={control}
      defaultValue={props ? props.lastName : ''}
      render={({field}) => (
        <TextField
          {...field}
          label='Last name'
          variant='outlined'
          error={!!errors.lastName}
          helperText={errors.lastName ? errors.lastName?.message : ''}
        />

      )}/>
  )
}

export const Username = (props) => {
  const {control, formState: {errors}} = useFormContext()

  return (
    <Controller
      name='username'
      control={control}
      defaultValue={props ? props.userName : ''}
      render={({field}) => (
        <TextField
          {...field}
          label='Username'
          variant='outlined'
          error={!!errors.username}
          helperText={errors.username ? errors.username?.message : ''}
        />

      )}/>
  )
}

export const Password = ({password}) => {
  const {control, formState: {errors}} = useFormContext()

  return (
    <Controller
      name='password'
      control={control}
      defaultValue={password ? password : ''}
      render={({field}) => (
        <TextField
          {...field}
          label='Password'
          variant='outlined'
          error={!!errors.password}
          helperText={errors.password ? errors.password?.message : ''}
        />

      )}/>
  )
}

export const Roles = ({role}) => {
  const {control, register} = useFormContext()
  return (
    <Controller
     control={control}
     name='roles'
     render={({field}) => (
       <Select
         isMulti
         {...register('role')}
         name={field.name}
         ref={field.ref}
         options={ROLES}
         value={ROLES.find((c) => c.label === field.label)}
         onChange={(val) => field.onChange(val)}
         defaultValue={role ? role : ROLES.find(c => c.label==='ANT')}
         getOptionValue={(option) => option.label}
         getOptionLabel={(option) => option.label}
       />
     )}
    />
  )
}

export const WorkBorders = ({idB}) => {
  const {control, register} = useFormContext()
  return (
    <Controller
      control={control}
      name='workBorder'
      render={({field}) => (
        <Select
          isMulti
          {...register('workBorder')}
          name={field.name}
          ref={field.ref}
          options={workBorders}
          value={workBorders.find((c) => c.id === field.value)}
          onChange={(val) => field.onChange(val)}
          defaultValue={idB ? idB : workBorders.find(c => c.id===1)}
          getOptionValue={(option) => option.id}
          getOptionLabel={(option) => option.name}
        />
      )}
    />
  )
}