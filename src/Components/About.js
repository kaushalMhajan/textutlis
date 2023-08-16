import React from 'react'
import "./About.css"
// import { useState } from 'react'

export default function About1(props) {

 const mstyle = {
  backgroundColor : props.mode===`dark`?`#2d386e`:`white` && props.mode===`red`?`#721212`:`#2d386e` && props.mode===`light`?`white`:`#2d386e` && props.mode===`green`?`green`:`#2d386e`,
  color : props.mode===`light`?`black`:`white`,
  border : '1px  solid'
 }

  
  return (
    <div className="container1" style={{color :props.mode===`light`?`black`:`white` }}>
        <h1 className="my-3 text-whiteS">About Us</h1>
      <div className="accordion" id="accordionExample" >
  <div className= /*"accordion1"*/{props.mode===`dark`?`container1Dark`:`container1White` 
                                  && props.mode===`red`?`container1Red`:`container1Dark` 
                                  && props.mode===`light`?`container1White`:`container1Dark` 
                                  && props.mode===`green`?`container1Green`:`container1Dark`} /*style={mstyle}*/>
    <h2 className="accordion-header" id="headingOne" >
      <button className="accordion-button" style={mstyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze Your Text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
      TextUtils gives you a way to analyze your text quickly and effectively . your can count number of words and characters available in your text also you can convert your text to UpperCase , LowerCase and so on 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mstyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={mstyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free To Use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
        TextUtils is a free character counter tool that provides instant character count and word count
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mstyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={mstyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
        This word counter software works in any browser Chrome , FireFox , Safari , Opera etc . it suits to count characters in facebook , blog, books, excel document, pdf document, essays etc
      </div>
    </div>
  </div>
</div>
    </div>
  )
} 
