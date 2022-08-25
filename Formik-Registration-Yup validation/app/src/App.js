import logo from './logo.svg';
import './App.css';
import { Formik, Field, Form,ErrorMessage} from 'formik';
import * as Yup from 'yup';


function App() {
  const languageList = [
    { value: "english", label: "English" },
    { value: "hindi", label: "Hindi" },
    { value: "spanish", label: "Spanish" },
    { value: "arabic", label: "Arabic" },
    { value: "german", label: "German" },
  ];
  const countryList = [
    { value: "india", label: "India" },
    { value: "spain", label: "Spain" },
    { value: "Usa", label: "Usa" },
    { value: "Canda", label: "Canada" },
    { value: "japan", label: "Japan" },
  ];

  const currentDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;

    let yy = today.getFullYear() - 18;

    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }

    today = yy + "-" + mm + "-" + dd;

    return today;
  }
  let date = currentDate();
  const validationSchema = () => {

    return Yup.object().shape({

      FirstName: Yup.string()
        .required('Username is required')
        .min(6, 'Username must be at least 6 characters')
        .max(20, 'Username must not exceed 20 characters'),

      email: Yup.string()
        .required('Email is required')
        .email('Email is invalid')
        .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'Please eneter valid Email id'),


      mobile: Yup.string()
        .required('phoen number is required')
        .matches(/((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/,
          'Phone number is not valid'),

      password: Yup.string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),

      confirmPassword: Yup.string()
        .required("please Enter your conformpassword")
        .oneOf([Yup.ref('password'), null], 'ConfirmPassword does not match'),

      gender: Yup.string()
        .required("Please select Gender"),

      Birthdate: Yup.string().required(`Please enter your child's birthday/due date`),
      Age: Yup.number().required('Age is required')
        .min(18),

      website: Yup.string()
        .required("Please Enter url")
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          'Enter correct url!'),

      language: Yup.array().min(2).max(4),


      country: Yup.string()
        .required("Please select the country"),


      acceptTerms: Yup.boolean()
        .required("Please select the condition")
        .oneOf([true], "Accept Term Condition")

    })

  }
  return (
    <div>
      <Formik
        initialValues={
          {
            FirstName: "",
            email: "",
            mobile: "",
            password: "",
            confirmPassword: "",
            gender: "",
            website: "",
            language: [],
            country: "",
            Birthdate: "",
            Age: "",
            acceptTerms: false
          }}

        const handleSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <Form>

          <div className='container'>
            <div className='form-control'>
              <h4>Registration Form</h4>
            </div>
            <div className="mb-3">
              <label for="FirstName" className="form-label">FirstName</label>
              <Field id="FirstName" name="FirstName" className="form-control" placeholder="FirstName" type="text" />
              <ErrorMessage name="FirstName" component="p" className="text-danger" />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">Email</label>
              <Field id="email" className="form-control" name="email" placeholder="abc@gmail.com" type=" email" />
              <ErrorMessage name="email" component="p" className="text-danger" />
            </div>

            <div className="mb-3">
              <label for="mobile" className="form-label">mobile</label>
              <Field id="mobile" className="form-control" name="mobile" placeholder="mobile" type="Number" />
              <ErrorMessage name="mobile" component="p" className="text-danger" />

            </div>

            <div className="mb-3">
              <label for="password" className="form-label">password</label>
              <Field id="password" className="form-control" name="password" placeholder="password" type="password" />
            </div>
            <ErrorMessage name="password" component="p" className="text-danger" />

            <div className="mb-3">
              <label for=" confirmPassword" className="form-label">confirmPassword</label>
              <Field id="confirmPassword" className="form-control" name="confirmPassword" placeholder=" confirmPassword" type="confirmPassword" />
              <ErrorMessage name="confirmPassword" component="p" className="text-danger" />
            </div>
            <label for="Gender" className="form-label">Gender</label>
            <div class="mb-3">

              <div className="form-check form-check-inline">
                <Field className="form-check-input" type="radio" name="gender" id="Female" value="Female" />
                <label className="form-check-label" for="inlineRadio1">Female</label>
              </div>

              <div className="form-check form-check-inline">
                <Field className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="Male" />
                <label className="form-check-label" for="inlineRadio1">Male</label>
              </div>
              <div class="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="Other" />
                <label className="form-check-label" for="inlineRadio2">Other</label>
              </div>
              <ErrorMessage name="gender" component="p" className="text-danger" />
            </div>
            <div className="mb-3">
              <label for="  website" className="form-label">  website</label>
              <Field id="website" className="form-control" name="website" placeholder="ww.google.com" type="text" />
              <ErrorMessage name="website" component="p" className="text-danger" />
            </div>
            <div className="mb-3">
              <label for="birthdaytime">Birthdate</label>
              <div>
                <Field type="date" id=" Birthdate" name=" Birthdate" max={date} />
              </div>
              <ErrorMessage name=" Birthdate" component="p" className="text-danger" />
            </div>
        
            <div className="mb-3">
              <label for="Age" className="form-label">Age</label>
              <Field id="Agw" className="form-control" name="Age" placeholder="Age" type="Number" />
              <ErrorMessage name="Age" component="p" className="text-danger" />
            </div>
            <div className='mb-3'>
              <label>Language :</label>
              <div>
                {
                  languageList.map((x, i) => {
                    return (
                      <div className="form-check form-check-inline">
                        <label className="form-check-label" for="inlineCheckbox1" key={i}>
                          <Field name="language" type="checkbox" className="form-check-input" value={x.value} />
                          {x.value}
                        </label>
                      </div>
                    )
                  })
                }
              </div>
              <ErrorMessage
                name="language"
                component="div"
                className="text-danger"
              />
            </div>
            <div className='mb-3'>
              <label for='country' className='form-label'>Country</label>
              <Field name='country' as='select' className='form-select' >
                <option value="" disabled hidden>Select Country</option>
                {countryList.map((x) => {
                  return (
                    <option value={x.value}>{x.value}</option>
                  )
                })}
              </Field>
              <ErrorMessage
                name="country"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <Field name="acceptTerms" type="checkbox" className="form-check-input" />
              <label htmlFor="acceptTerms" className="form-check-label">I have read and agree to the Terms</label>
              <ErrorMessage name="acceptTerms" component="p" className="text-danger" />
            </div>
            <button type="submit" class="btn btn-warning">Submit</button>
          </div>
        </ Form >
      </Formik>
    </div>

  );
}

export default App;
