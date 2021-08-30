import React, {useState} from'react';
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';
import {useForm} from "react-hook-form";
import { useState } from 'react';
function App(){
    const [num,setNum]= useState(0);
    const{register,handleSubmit,errors}=useForm()
    const final=(x) =>{
        if (x.operator==='+'){
        
        return(setNum(parseFloat(x.firstnum)-parseFloat(x.secondnum)));}
        if (x.operator==='*'){
            return(setNum(parseFloat(x.firstnum)*parseFloat(x.secondnum)));}
       
        }
        return(
            <div className="App">
                <h1>Result={num}</h1>
                <form onSubmit={handleSubmit(final)}>
                    first number<input name="firstnum" placeholder="first number" ref={register({required:true})}/>
                    {errors.firstnum && 'first num is required'}
                    <br></br>
                    second number<input name="secondnum" placeholder="second num" ref={register({required: true})}/>
                    {errors.secondnum && 'second num is required'}
                    <br></br>
                    third number<input name="thirdnum" placeholder="third num" ref={register({required:true})}/>
                    {errors.thirdnum && 'third num is required'}
                    <input type="submit"/>
                </form>
            </div>
        );
    }
export default App;

