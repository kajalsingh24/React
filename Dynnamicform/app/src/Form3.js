import React from 'react'
import { Field, Form, Formik, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
export default function Form3() {

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("Firstname is required"),
    lastName: Yup.string()
      .required("Lastname is required"),
    email: Yup.string()
      .required("Email is required"),
    location: Yup.array()
      .of(
        Yup.object().shape({
          preferedLocation: Yup.string().required("* please enter your prefered location")
        })
      ),
    education: Yup.array().of(
      Yup.object().shape({
        qualification: Yup.string()
          .required('qualification is required'),

        grade: Yup.string()
          .required('grade is required'),
      })
    )
  });
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          location: [{ preferedLocation: "" }],
          education: [{ qualification: "", grade: "" }]

        }}

        onSubmit={(values) => {
          console.log(values);

        }}
        validationSchema={validationSchema}
      >

        {({ errors, values, setValues }) => (

          <Form>
            <div className='container'>
              <div className='form-control'>
                <h4 className='Text-center'>Dynamic form</h4>
              </div>
              <div className='form-control mt-3'>
                <label for="firstname" class="form-label">Firstname</label>
                <Field id="firstName" name="firstName" type="text" className='form-control'></Field>
                <ErrorMessage name="firstName" component="div" className="text-danger" />
              </div>
              <div className='form-control mb-3'>
                <label for="lastname" class="form-label">Lastname</label>
                <Field id="lastName" name="lastName" className='form-control' type="text"></Field>
                <ErrorMessage name="lastName" component="div" className="text-danger" />
              </div>
              <div className='form-control mb-3'>
                <label for="lastname" class="form-label">Email</label>
                <Field id="email" name="email" type="email" className='form-control'></Field>
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>

              <div className='form-control mb-3'>
                <label>Prefer location</label>
                <FieldArray name='location' className="form-control" type="text">
                  {({ push, remove }) => (
                    <div>
                      {values.location.length > 0 && values.location.map((y, index) => {
                        return (
                          <div key={index}>
                            <Field name={`location.${index}.preferedLocation`} type="text" />

                            {index > 0 &&
                              <button type='button' onClick={() => remove()}>Remove</button>
                            }
                            <ErrorMessage name={`location.${index}.preferedLocation`} component="div" className="text-danger" />
                          </div>
                        )
                      })}
                      <button type='button' class="btn btn-primary mt-3" onClick={() => push({ preferedLocation: "" })}>Add</button>
                    </div>
                  )}
                </FieldArray>
              </div>
              <div className="form-control">
              <FieldArray name="education" >
                {({ remove, push }) => (
                  <div>
                    {values.education.length > 0 && values.education.map((x, index) => {
                      return (
                        <div>
                          <label>Education</label>
                          <div key={index} className="mt-6">
                            <label>Qualification</label>
                              <Field as="select" name={`education.${index}.qualification`}  >
                                <option value="deafult"></option>
                                <option value="green">12th</option>
                                <option value="blue">Diploma</option> 
                                <option value="blue">Degree</option>
                                <option value="blue">Master</option>
                                  </Field>
                            <ErrorMessage name={`education.${index}.qualification`}component="div" className="text-danger" />
                            <label>Grade</label>
                            <Field name={`education.${index}.grade`} type="text" />
                            <ErrorMessage name={`education.${index}.grade`}  component="div" className="text-danger"/>
                            {index > 0 &&
                              <button type='button' className='btn btn-danger' onClick={() => remove()}>Remove</button>
                            }
                          </div>
                        </div>
                      )
                    })}
                    <buton type="button" className="btn btn-primary" onClick={() => push({ qualification: "", university: "" })}>AddMore</buton>
                  </div>
                )}
              </FieldArray>
              </div>
              {/* <div className='form-control'>
                <label>Education</label>
                <FieldArray name='education' className="form-control" placeholder="Location">

                {({ push, remove}) => (  
                      <div>
                        {values.education.length >0 && values.education.map((index) => {

                          return(
                          <div key={index}>
        
                            <Field as="select" name={`education.${index}.qualification`} >
                              <option value="red">Collage</option>
                              <option value="green">Pu</option>
                              <option value="blue">bbu</option>
                              <option value="blue">Au</option>
                              <option value="blue">Lu</option>
                              <option value="blue">DDu</option>
                            </Field>
                            <ErrorMessage name={`education.${index}.qualification`} component="div" className="text-danger" />
                            <Field name={`education.${index}.course`} />
                            <ErrorMessage name={`education.${index}.course`} component="div" className="text-danger" />
                            {index > 0 && (
                              <button type='button' onClick={() => remove()} class="btn btn-danger">Remove</button>
                            )}
                          </div>
                        )
                          })}
                        <button type='button' onClick={() => push({qualification:"",course:""})} class="btn btn-primary mt-2 ">Add</button>
                      </div>
                    )}

                </FieldArray>

            
              </div> */}

              <button type="submit" class="btn btn-warning mt-5">Submit</button>
            </div>
          </Form>
        )}

      </Formik>

    </div>
  )

}

