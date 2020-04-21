import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const UserForm = ({ values, errors, touched, isSubmitting, status }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {

        if (status) {
            console.log('post status:', status);
            setUsers([...users, status]);
        }
    }, [status]);

    return (
            <Form>
                <h2>Add a Smurf</h2>

                {touched.name && errors.name && <p>{errors.name}</p>}

                <div className = 'input'>
                    <Field type = 'name' name = 'name' placeholder= 'Smurf Name' />
                </div>

                <div className = 'input'>
                    {touched.age && errors.age && <p>{errors.age}</p>}
                    <Field type = 'number' name = 'age' placeholder = 'age' className = 'input'/>
                </div>

                <div className = 'input'>
                    {touched.height && errors.height && <p>{errors.height}</p>}
                <Field type = 'text' name = 'height' placeholder = 'height' className = 'input'/>
                </div>

                <button disabled = {isSubmitting} type = 'submit'>Submit</button>
            </Form>
    );
};

const FormikApp = withFormik({

    mapPropsToValues({ name, age, height }) {

    return {
        name: name || '',
        age: age || '',
        height: height || ''
    };
    },

    validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    age: Yup.string().required('Age Required'),
    height: Yup.number().required('Height Required')
    }),

    handleSubmit(values, { setErrors, resetForm, setSubmitting, setStatus }) {

    axios
        .post('http://localhost:3333/smurfs', values)

        .then(response => {
        console.log(response);
        setStatus(response.data);
        })

        .catch(error => {
        console.log('Error Here:', error);
        });

    setTimeout(() => {
        setSubmitting(false);
    }, 2000);
    }
})(UserForm);

export default FormikApp;