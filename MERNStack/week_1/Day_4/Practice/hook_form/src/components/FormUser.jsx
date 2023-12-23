import React, { useState } from 'react'

const FormUser = () => {
    const createUser = (e) => {
        e.preventDfefault()
    }
    const [user,setUser] = useState({})
    const fnameFn = (e)=>{
        setUser({...user,fname : e.target.value})

    }
    const lnameFn = (e)=>{
        setUser({...user,lname : e.target.value})

    }
    const emailFn = (e)=>{
        setUser({...user,email : e.target.value})

    }
    const passwordFn = (e)=>{
        setUser({...user,password : e.target.value})

    }
    const confirmPasswordFn = (e)=>{
        setUser({...user,confirmPassword : e.target.value})

    }
    const {fname,lname,email,password,confirmPassword} = user
  return (
    <div>
        <form onSubmit={createUser} style={{background: '#80808033'}} >
            <label  htmlFor="fname">First Name   
            <input onChange={e=>fnameFn(e)}   /></label>
            
            <label  htmlFor="lname">Last Name   
            <input onChange={e=>lnameFn(e)}   /></label>
            
            <label  htmlFor="email">Email   
            <input type='email' onChange={e=>emailFn(e)}   /></label>
            
            <label  htmlFor="password">Password   
            <input type='password' onChange={e=>passwordFn(e)}   /></label>
            
            <label htmlFor="confirmPassword">Confirm Password   
            <input type='password' onChange={e=>confirmPasswordFn(e)}   /></label>


        </form>
        <div>
        <dl>
      <dt style={{display : 'inline'}} >First Name</dt>
      <dd  style={{display : 'inline'}} > 
        {fname}
      </dd>
      </dl>
        <dl>
      <dt style={{display : 'inline'}} >Last Name</dt>
      <dd  style={{display : 'inline'}} > 
        {lname}
      </dd>
      </dl>
        <dl>
      <dt style={{display : 'inline'}} >Email</dt>
      <dd  style={{display : 'inline'}} > 
        {email}
      </dd>
      </dl>
        <dl>
      <dt style={{display : 'inline'}} >Password</dt>
      <dd  style={{display : 'inline'}} > 
        {password}
      </dd>
      </dl>
        <dl>
      <dt style={{display : 'inline'}} >Confirm Password</dt>
      <dd  style={{display : 'inline'}} > 
        {confirmPassword}
      </dd>
      </dl>
        </div>
    </div>
  )
}

export default FormUser