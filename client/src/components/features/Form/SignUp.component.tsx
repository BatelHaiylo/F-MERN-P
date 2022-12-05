import React from 'react'
import { useForm } from 'react-hook-form';
import "./SignUp.css";

interface FormData {
  role: String;
  fullName: String;
  phone: String;
  country: String;
  MobilePrefix: String;
  email: String;
  dateOfBirth: Date;
  password: String;
  passwordConfirm: String;
}; 

export default function SignUp() {
  const {register, handleSubmit, getValues} = useForm<FormData>();
  const onSubmit = handleSubmit((values) => {
    alert('sing up response'+ JSON.stringify(values))})


  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
        <label htmlFor="managerRole">manager</label>
        <input {...register('managerRole', {required: true})}  placeholder='role' type='radio'/>
        <label htmlFor="employeeRole">employee</label>
        <input {...register('employeeRole', {required: true})} placeholder='role' type='radio'/>
        </div>
        <input {...register('fullName', {required: true})} placeholder='fullName' type='text'/>
        <input {...register('phone', {required: true})} placeholder='phone' type='text'/>
        <input {...register('country', {required: true})} placeholder='country' type='text'/>
        <input {...register('MobilePrefix', {required: true})} placeholder='MobilePrefix' type='text'/>
        <input {...register('email', {required: true})} placeholder='email' type='email'/>
        <input {...register('dateOfBirth', {required: true})} placeholder='dateOfBirth' type='date'/>
        <input {...register('password', {required: true})} placeholder='password' type='password'/>
        <input {...register('passwordConfirm', {required: true, validate: (value)=> value === getValues('password')})} placeholder='passwordConfirm' type='password'/>

        <button type='submit'>Submit</button>
      </form>
    </>
  )
};