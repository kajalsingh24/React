import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import ReactSelect from "react-select";

function App() {
  const[state,setState] =useState({
  form: {
    Firstname :"",
    Lastname :"",
    Email:"",
    Password:"",
    ConfirmPassword:"",
    Gender: null,
    Mobile:"",
    Hobby:[],
    Zipcode:"",
    State:"",
    City:"",
    Country:"",
  },
  formErrors: {
   
    Firstname :"",
    Lastname :"",
    Email:"",
    Password:"",
    ConfirmPassword:"",
    Gender: null,
    Mobile:"",
    Hobby:[],
    Zipcode:"",
    State:"",
    City:"",
    Country:"", 
  }
  });
// ------------------country------------
const countryList = [
  { value: "india", label: "India" },
  { value: "us", label: "US" },
  { value: "australia", label: "Australia" },
  { value: "Canada", label: "Canada" }
];
// -----------------state------------
const statelist = [
  { value: "Gujarat", label: "Gujarat" },
  { value: "Newyprk", label: "Newyprk" },
  { value: "Inland", label: "Inland." },
  { value: "Toronto", label: "Toronto" }
];
// -----------------City----------------
const Citylist = [
  { value: "Vadodara", label: "Vadodara" },
  { value: "Corning", label: "Corning" },
  { value: "Inland", label: "Inland." },
  { value: "Toronto", label: "Toronto" }
];
// ------------------hobby----------
const hobbylist = [
  { value: "Cricket", label: "Cricket" },
  { value: "Book Reading", label: "Book Reading" },
  { value: "Dancing", label: "Dancing" },
  { value: "Traveling", label: "Traveling" }
];
// --------------------------handlechange--------------------
const handleChange = e =>
{
  const {name,value,checked} =e.target;
  const {form,formErrors} =state;
  let  formObj ={};
  if(name == "Hobby")
  {
    if(checked)
    {
      formObj ={...form};
      formObj[name].push(value);
    }
    else
    {
      formObj=
      {
        ...form,[name]:form[name].filter(x =>x !==value)
      };
    }
  }else{
    formObj= {...form,[name]: value};
  }

  // if(!Object.key(formErrors).includes(name)) 
  if (!Object.keys(formErrors).includes(name)) return;
 let formErrorsobj={};
 if(name === "Password" || name === "ConfirmPassword")
 {
  let refvalue = state.form[name,name === "Password" ? "ConfirmPassword" :"Password" ];
  const errormsg = validateField(name,value,refvalue);
  formErrorsobj={...formErrors,[name]:errormsg}
 }
 else
 {
  const errormsg = validateField(name,name==="Hobby" ? state.form["Hobby"]:value);
  formErrorsobj ={...formErrors,[name]:errormsg};
 }
 setState({...state,formErrors:formErrorsobj,form:formObj});
};


// -------------------------validate phoen number--------
var  validateNumber = evt => {
  var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
  if(key)
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    theEvent.preventDefault();
  }
}
// ------------------------validationn----------------
var  validateField = (name, value, refValue) => {
  let errorMsg = null;
  switch (name) {
    case "Firstname":
      if (!value) errorMsg = "Please enter FirstName.";
      else if(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(value))
        errorMsg ="please enter Valid firstname"

      break;
      case "Lastname":
        if (!value) errorMsg = "Please enter LastName.";
        else if(/(^[a-zA-Z][a-zA-Z\s]{3,20}[a-zA-Z]$)/.test(value))
        errorMsg ="please enter Valid Lastname"
        break;
        case "Email":
          if (!value) 
          errorMsg = "Please enter Email.";
          else if (
   !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value))
   errorMsg ="Please enter valid Email"      
   
   break;
          case "Mobile":
          if (!value) errorMsg = "Please enter MobileNumber.";
          break;
          case "Zipcode":
            if (!value) errorMsg = "Please enter Zipcode.";
            else if(/^(\d{5}((|-)-\d{4})?)|([A-Za-z]\d[A-Za-z][\s\.\-]?(| -)\d[A-Za-z]\d)|[A-Za-z]{1,2}\d{1,2}[A-Za-z]? \d[A-Za-z]{2}$/.test(value))
            errorMsg ="please enter Valid Zipcode"
            break;
          case "Password":
            // refValue is the value of Confirm Password field
            if (!value) errorMsg = "Please enter Password.";
            else if (refValue && value !== refValue)
              errorMsg = "Password and Confirm Password does not match.";
            break;
          case "ConfirmPassword":
            // refValue is the value of Password field
            if (!value) errorMsg = "Please enter Confirm Password.";
            else if (refValue && value !== refValue)
              errorMsg = "Password and Confirm Password does not match.";
            break;
            case"Hobby":
            if(value.length ===0) 
            errorMsg ="Please Select Hobby";

            case "Country":
              if(!value)
              errorMsg ="please select Country";
              break;

              case "state":
                if(!value)
                errorMsg="Please select state";
                break;

                case "City":
                  if(!value)
                  errorMsg="Please select City";
                  break;
                
  }
  return errorMsg;
};
// ------------------------validateform-----------------
var  validateForm = (form, formErrors, validateFunc) => {
  const errorObj = {};
  Object.keys(formErrors).map(x => {
    let refValue = null;
    if (x === "Password" || x === "ConfirmPassword") {
      refValue = form[x === "Password" ? "ConfirmPassword" : "Password"];
    }
    const msg = validateFunc(x, form[x], refValue);
    if (msg) errorObj[x] = msg;
  });
  return errorObj;
};
// -----------------------------formsubmit------------
var handleSubmit = () => {
  const {form, formErrors } = state;
  const errorObj = validateForm(form, formErrors, validateField);
  if (Object.keys(errorObj).length !== 0) {
    setState({...state, formErrors:  errorObj  });
    return false;
  }

  //database
  //api code
  console.log("Data: ", form);
};
// --------------------------end handelchange----------------
  return (
 
<form>
  <div className='container'>
    <h3 className='Text-center'>Registration Form</h3>
  <div class="mb-3">
    <label for="Firstname" class="form-label">Firstname</label>
    <input type="Text" class="form-control" 
    name="Firstname" 
     onChange={handleChange} 
     value={state.form.Firstname} 
     onBlur={handleChange}/>
    {state.formErrors.Firstname && (
   <span className="err">{state.formErrors.Firstname}</span>
    )}

  </div>

  <div class="mb-3">
    <label for="Lastname" class="form-label">Lastname</label>
    <input type="Text" class="form-control" name="Lastname" value={state.form.Lastname} onChange={handleChange} onBlur={handleChange}/>
 <span>{state.formErrors.Lastname}</span>
  </div>

  <div class="mb-3">
    <label for="Email" class="form-label">Email address</label>
    <input type="email" class="form-control" name="Email" value={state.form.Email} onChange={handleChange} onBlur={handleChange}aria-describedby="emailHelp"/>
 <span>{state.formErrors.Email}</span>
  </div>

  <div class="mb-3">
    <label for="Password" class="form-label">Password</label>
    <input type="password" class="form-control" name="Password" value={state.form.Password}  onChange={handleChange} onBlur={handleChange}/>
    <span>{state.formErrors.Password}</span>
  </div>

  <div class="mb-3">
    <label for="ConfirmPassword" class="form-label">ConfirmPassword</label>
    <input type="ConfirmPassword" class="form-control" name="ConfirmPassword"value={state.form.ConfirmPassword} onChange={handleChange} onBlur={handleChange}/>
  <span>{state.formErrors.ConfirmPassword}</span>
  </div>

  <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name=" Gender"  value="option1"   onChange={handleChange} onBlur={handleChange}/>
  <label class="form-check-label" for="inlineRadio1">Male</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name=" Gender"value="option2"  onChange={handleChange} onBlur={handleChange}/>
  <label class="form-check-label" for="inlineRadio2">Female</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name=" Gender" value="option3"  onChange={handleChange} onBlur={handleChange}/>
  <label class="form-check-label" for="inlineRadio3">Other</label>
</div>

<div class="mb-3">
    <label for="Mobile" class="form-label">Mobile</label>
    <input type="Number" class="form-control" name="Mobile" 
     onChange={handleChange} value={state.form.Mobile} 
     onKeyPress={validateNumber}
     onBlur={handleChange}/>
    <span>{state.formErrors.Mobile}</span>
  </div>

  <div class="mb-3">
{hobbylist.map((x, i) => {
                    return (
                      <label key={i} className="mr-2">
                        <input type="checkbox" 
                        name=" Hobby" 
                        value={x.value}  
                        onChange={handleChange} 
                        checked=
                        {state.form.Hobby.includes(x.value)}
                        />
                        {x.label}
                      </label>
                    );
                  })}
                  <span className="err">{state.formErrors.Hobby}</span>              
</div>

<div class="mb-3">
    <label for="Zipcode" class="form-label">Zipcode</label>
    <input type="Number" class="form-control" name="Zipcode" value={state.form.Zipcode} onChange={handleChange}  onBlur={handleChange}/>
 
    <span>{state.formErrors.Zipcode}</span>
  </div>


  <div class="mb-3">
                <label>
                  Country:<span className="asterisk">*</span>
                </label>
                <ReactSelect name="country" options={countryList} placeholder="Country"
                value={countryList.find(x=>x.value === state.form.Country)} 
                onChange={e =>handleChange({
                  target:
                  {
                    name:"Country",
                    value:e.value
                  }
                })
                }/>  
                 <span className="err">{state.formErrors.Country}</span>      
              </div>
           
              <div class="mb-3">
                <label>State:<span className='asterisk'></span>*</label>
                <ReactSelect
                name='State' options={statelist} placeholder="State" value={statelist.find(x=>x.value===state.form.State)} 
                onChange={e =>handleChange({
                  target:
                  {
                    name:"state",
                    value:e.value
                  }
                })}/>
                 <span className="err">{state.formErrors.State}</span>
                </div>   
           
                <div class="mb-3">
                <label>State:<span className='asterisk'></span>*</label>
                <ReactSelect
                name="City" options={Citylist} placeholder="City" value={Citylist.find(x=>x.value===state.form.City)}
                 onChange={e =>handleChange({
                  target:"City",
                  value:e.value
                 })}/>
               <span className="err">{state.formErrors.City}</span>   
                </div>   
  <button type="submit" class="btn btn-primary" onClick={handleSubmit} value="submit">Submit</button>
  </div>
</form>
  );
}

export default App;
