import logo from './logo.svg';
import './App.css';
import {Field, Form, Formik} from 'formik';
import axios from "axios";
function App() {
  
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
        >
            <Form>
          <div>
            <label>Title</label>
                <Field id="title" name="title"  type="text"></Field>
                </div>

                <div>
                <label>FirstName</label>
                <Field id="firstName" name="firstName"  type="text"></Field>
                </div>
                <div>
                <label>lastName</label>
                <Field id="lastName" name="lastName"  type="text"></Field>
                </div>

                   <div>
                <label>email</label>
                <Field id="email" name="email"  type="email"></Field>
                </div>

                <div>
                <label>  password</label>
                <Field id="password" name="password" type="password"></Field>
                </div>
                  
                <label>confirmPassword</label>
                <Field id="confirmPassword" name="confirmPassword" type="password"></Field>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    </div>
  )
  
}

export default App;
