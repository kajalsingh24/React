import logo from './logo.svg';
import './App.css';
import {Field, Form, Formik,ErrorMessage} from 'formik';
import axios from "axios";
import * as Yup from 'yup';
function App() {
  const validationSchema = ()=> {

    return Yup.object().shape({
      title:Yup.string()
      .required("Titlt is required")
      .min(2, 'lastName must be at least 6 characters')
      .max(3, 'lastName must not exceed 20 characters'),


      firstName: Yup.string()
      .required('Firstname is required'),

      lastName: Yup.string()
        .required('lastName is required')
        .min(6, 'lastName must be at least 6 characters')
        .max(20, 'lastName must not exceed 20 characters'),

        email: Yup.string()
        .required('Email is required')
        .email('Email is invalid')
        .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
         "Email is invalid"),
  
        
      password: Yup.string()
        .required('Password is required')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
      confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
      acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),

    })
}
  return (
    <div>
        <Formik
            initialValues={{
                    title: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    acceptTerms: true
            }}

                 onSubmit={(values) => { 
                 console.log(values);  
                 axios.post('http://localhost:4000/accounts/register',values).then(y=>y).then(y=>
                  {
                    console.log(y)
                  })
              }}
              validationSchema={validationSchema}
        >
            <Form>
          <div>
            <label>Title</label>
                <Field id="title" name="title"  type="text"></Field>
                <ErrorMessage name="title" component="div" className="text-danger"/>
                </div>

                <div>
                <label> firstName</label>
                <Field id="firstName" name="firstName" type="text"></Field>
                <ErrorMessage name="firstName" component="div" className="text-danger"/>
                </div>
                <div>
                <label>lastName</label>
                <Field id="lastName" name="lastName"  type="text"></Field>
                <ErrorMessage name="lastName" component="div" className="text-danger"/>
                </div>

                   <div>
                <label>email</label>
                <Field id="email" name="email"  type="email"></Field>
                <ErrorMessage name="email" component="div" className="text-danger"/>
                </div>

                <div>
                <label>  password</label>
                <Field id="password" name="password" type="password"></Field>
                <ErrorMessage name="password" component="div" className="text-danger"/>
                </div>
                  
                <label>confirmPassword</label>
                <Field id="confirmPassword" name="confirmPassword" type="password"></Field>
                <ErrorMessage name="confirmPassword" component="div" className="text-danger"/>

                <Field
                      name="acceptTerms"
                      type="checkbox"
                      className="form-check-input"
                    />
                    <label htmlFor="acceptTerms" className="form-check-label">
                      I have read and agree to the Terms
                    </label>
                    <ErrorMessage
                      name="acceptTerms"
                      component="div"
                      className="text-danger"
                    />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    </div>
  )
  
}

export default App;
