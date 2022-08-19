import React from 'react'
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField
} from 'formik'
import * as Yup from 'yup'


export default function Cutsom() {
  const myStyle = {
    margin: "0 auto",
    width: "600px"
}

const initialValues = {
    fullName: "",
    email: "",
    preferedLocation: [{ location: "" }],
    education: [{ qualification: "", university: "", grade: "" }],
}

const qualificationList = [
    { value: "B.Tech", label: "B.Tech" },
    { value: "B.E.", label: "B.E." },
    { value: "Bsc", label: "Bsc" },
    { value: "Msc", label: "Msc" }
];

const validationSchema = () => {
    return Yup.object().shape({
        fullName: Yup.string().required('Full Name is required'),
        email: Yup.string().required('email is required').email('email is invalid'),
        preferedLocation: Yup.array().of(
            Yup.object().shape({
                location: Yup.string()
                    .required('location is required')
            })
        ),
        education: Yup.array().of(
            Yup.object().shape({
                qualification: Yup.string()
                    .required('qualification is required'),
                university: Yup.string()
                    .required('university is required'),
                grade: Yup.string()
                    .required('grade is required'),
            })
        )
    })
}

const onSubmit = () => {

}



return (
    <div>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ errors, values, touched, setValues }) => (
                <div className='container'>
                    <div className='row'>
                        <div className='md col-6 sm col-12 auto'>
                            <Form style={myStyle}>

                                <div className="mb-3">
                                    <label htmlFor='fullName'>Full Name</label>
                                    <Field name="fullName" type="text" className="form-control" />
                                    <ErrorMessage
                                        name="fullName"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email"> Email </label>
                                    <Field name="email" type="email" className="form-control" />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>


                                <label htmlFor="preferedLocation"> PreferedLocation </label>

                                <FieldArray name="preferedLocation" >

                                    {({ insert, remove, push }) => (
                                        <div>
                                        {values.preferedLocation.length > 0 && values.preferedLocation.map((x, i) => {

                    const preferedLocationErrors = errors.preferedLocation?.length && errors.preferedLocation[i] || {};
                                                const preferedLocationTouched = touched.preferedLocation?.length && touched.preferedLocation[i] || {};

                                                return (
                                                    <div key={i} className="mb-3">

                                                        <Field name={`preferedLocation.${i}.location`} type="text" className={'form-control' + (preferedLocationErrors.location &&
                                                            preferedLocationTouched.location ? ' is-invalid' : '')}
                                                        />
                                                        {i > 0 &&
                                                            <button type='button' className='btn btn-primary' onClick={() => remove(i)}>Remove</button>
                                                        }

                                                        <ErrorMessage
                                                            name={`preferedLocation.${i}.location`}
                                                            component="div"
                                                            className="text-danger"
                                                        />
                                                    </div>
                                                )
                                            })}

                                            <buton type="button" className="btn btn-primary" onClick={() => push({ location: "" })}>AddMore</buton>
                                        </div>
                                    )
                                    }

                                </FieldArray>



                                <FieldArray name="education">
                                    {({ insert, remove, push }) => (
                                        <div>
                                            {values.education.length > 0 && values.education.map((x, i) => {
                                                const educationErrors = errors.education?.length && errors.education[i] || {};
                                                const educationTouched = touched.education?.length && touched.education[i] || {};

                                                return (
                                                    <div>
                                                        <label htmlFor="education"> <h5>Education</h5> </label>
                                                        <div key={i} className="mb-3" >

                                                            <label htmlFor='qualification'>Qualification</label>
                                                            <Field name={`education.${i}.qualification`} className={'form-control' +
                                                                (educationErrors.qualification &&
                                                                    educationTouched.qualification ?
                                                                    ' is-invalid' : '')} component="select" >


                                                                <option value=""></option>

                                                                {qualificationList.map(x =>
                                                                    <option key={i} value={i}>{x.value}</option>
                                                                )
                                                                }


                                                                )


                                                            </Field>
                                                            <ErrorMessage
                                                                name={`education.${i}.qualification`}
                                                                component="div"
                                                                className="text-danger"
                                                            />
                                                            <div>
                                                                <label htmlFor='university'>University</label>
                                                            </div>
                                                            <Field name={`education.${i}.university`} type="text"
                                                                className={'form-control' + (educationErrors.university && educationTouched.university ? 'is-invalid' : '')} />
                                                            <ErrorMessage
                                                                name={`education.${i}.university`}
                                                                component="div"
                                                                className="text-danger"
                                                            />

                                                            <label htmlFor='grade'>Grade</label>
                                                            <Field name={`education.${i}.grade`} type="text" className={'form-control' + (educationErrors.grade && educationTouched.grade ? 'is-invalid' : '')} />
                                                            <ErrorMessage
                                                                name={`education.${i}.grade`}
                                                                component="div"
                                                                className="text-danger"
                                                            />
                                                            {i > 0 &&
                                                                <button type='button' className='btn btn-primary' onClick={() => remove(i)}>Remove</button>
                                                            }
                                                        </div>
                                                    </div>

                                                )
                                            })
                                            }
   <buton type="button" className="btn btn-primary" onClick={() => push({ qualification: "", university: "", grade: "" })}>AddMore</buton>
                                        </div>
                                    )}

                                </FieldArray>

                                <div className="card-footer text-center border-top-0">
                                    <button type="submit" className="btn btn-primary mr-1">
                                        Submit
                                    </button>
                                    <button className="btn btn-secondary mr-1" type="reset">Reset</button>
                                </div>

                            </Form>

                        </div>
                    </div>
                </div>
            )}
        </Formik>
    </div>
)















}