import React from 'react'
import { Layout } from '../components/Layout'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import "../signUp.scss"
// import { Link } from 'react-router-dom';

interface FormValues {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
}

const validationSchema: Yup.ObjectSchema<FormValues> = Yup.object().shape({
    firstName: Yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .matches(/^[a-zA-Z]+$/),

    lastName: Yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .matches(/^[a-zA-Z]+$/),

    email: Yup
    .string()
    .email("Invalid email address")
    .required("Email is required")
    .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),

    password: Yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),

    userName: Yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .matches(/^(?=.*[^\s]).{8,}$/),
    });

const SignUpPage:React.FC = () => {
    return (
        <Layout showNavbar={true} showSidebar={true}>
            <div id='signUpDiv'>
                <div className='px-5' id='divOne'>
                    <h6 className='my-2 display-6'>Sign Up</h6>
                    <Formik
                        initialValues={{ firstName: '', lastName: '', email: '', password: '', userName: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log(values);
                            setSubmitting(false);
                        }}>
                            {({errors, touched})=>{
                                return(
                                <Form>
                                    <label style={{color:"#0077B5"}}>First name</label>
                                    <Field className="form-control w-100 my-2" name="firstName" />
                                    {errors.firstName && touched.firstName ? (<div style={{color:"red"}}>{errors.firstName}</div>) : null}

                                    <label style={{color:"#0077B5"}}>Last name</label>
                                    <Field className="form-control w-100 my-2" name="lastName" />
                                    {errors.lastName && touched.lastName ? (<div style={{color:"red"}}>{errors.lastName}</div>) : null}

                                    <label style={{color:"#0077B5"}}>Email</label>
                                    <Field className="form-control w-100 my-2" name="email" type="email" />
                                    {errors.email && touched.email ? <div style={{color:"red"}}>{errors.email}</div> : null}

                                    <label style={{color:"#0077B5"}}>User name</label>
                                    <Field className="form-control w-100 my-2" name="userName" />
                                    {errors.userName && touched.userName ? <div style={{color:"red"}}>{errors.userName}</div> : null}

                                    <label style={{color:"#0077B5"}}>Password</label>
                                    <Field className="form-control w-100 my-2" name="password" type="password" />
                                    {errors.password && touched.password ? <div style={{color:"red"}}>{errors.password}</div> : null}

                                    <button type="submit" className='btn btn-info my-2' 
                                    style={{backgroundColor:"#0077B5", color:"white", border:"none"}}>Submit</button>

                                {/* <p>Have an account? <Link href="/user/signin" style={{color:"#0077B5"}}>Sign in</Link></p>
                                <p className='text-center'><Link href='/' style={{color:"#0077B5"}}>Click here</Link> to go to landing page</p> */}


                            </Form>
                                )
                            }}
                        </Formik>
                </div>
                <div id='divTwo'>
                    <img src="../../public/undraw_sign_up_n6im.svg" alt="" />
                </div>
            </div>
        </Layout>
    )
}

export default SignUpPage