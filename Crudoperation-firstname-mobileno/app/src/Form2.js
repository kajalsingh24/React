import React from 'react'
import { useState } from 'react'
import { Formik, Field, Form } from 'formik';

export default function Form2() {


    const [data, setData] = useState({})
    const [Records, setRecords] = useState([])
    const [toggle, setToggle] = useState(true)
    const [edit, setEdit] = useState(null)
    

    const SubmitData = (e) => {

        setData({ ...data, [e.target.name]: e.target.value });

    }
    const Update = (index) => {
        let Item = Records.find((ele, myindex) => {
            return myindex === index

        })

        console.log(Item);
        setToggle(false)
        setData({ firstName: Item.firstName,Mobilenumber: Item.Mobilenumber})
        setEdit(index)
    }
  
    const Delete = (index) => {
        Records.splice(index, 1)
        setRecords([...Records])
        console.log(Records);
    }

    return (
        <div className='xyz'>
            <Formik
                initialValues={{
                    firstName: "",
                    Mobilenumber: "",
                }}
                onSubmit={(e) => {
                    let obj = {
                        firstName: e.firstName,
                        Mobilenumber: e.Mobilenumber
                    }
                    setData({ ...data, obj })
                    console.log(data);

                    if (!data.firstName || !data.Mobilenumber) {
                    
                    }
                    else if (data.firstName && data.Mobilenumber && !toggle) {
                        setRecords(Records.map((ele, index) => {
                            console.log(index, edit);
                            if (index === edit) {
                                return { firstName: data.firstName,Mobilenumber: data. Mobilenumber}
                            }
                            return ele;
                        })
                        )
                        setToggle(true)
                        setData({ data })
                        setEdit(null)
                    }

                    else {
                        const MyItems = { ...data }
                        setRecords([...Records, MyItems])
                        setData({ firstName: "",  Mobilenumber: "" });
                        setToggle(true)
                
                    }

                }
                }
            >
                <div className='container'>
                <Form className='card'>
                    <label htmlFor="firstName" minLength={2}>First Name</label>
                    <Field id="firstName" name="firstName" type="text" onChange={SubmitData} value={data.firstName} />

                    <label htmlFor="Mobilenumber">  Mobilenumber</label>
                    <Field id="Mobilenumber" name="Mobilenumber" type="Number" onChange={SubmitData} value={data.Mobilenumber} />
                    {
                        !toggle ? <button className='mt-4'>Save</button> : <button className='btn btn-secondary'>Submit</button>
                    }
                    
                </Form>
                </div>
            </Formik>
            <table className="table table-bordered mt-3">
                <thead>
                    <tr>
                       
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {Records.map((x, index) => {
                        return (
                            <tr id='abc' key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{x.firstName}</td>
                                <td>{x.  Mobilenumber}</td>
                                <td><button onClick={() => Update(index)}>Update</button></td>
                                <td><button onClick={() => Delete(index)} >Delete</button></td>
                            </tr>

                        )
                    })}

                </tbody>
            </table>


        </div>
    )
}
