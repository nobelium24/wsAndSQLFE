import React from 'react'
import { Layout } from '../components/Layout'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import "../signUp.scss";
import { signUp } from '../services';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';


// import { Link } from 'react-router-dom';

export type  FormValues = {
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
    const navigate = useNavigate();
    const [loading, setLoading] = React.useState<boolean>(false);

    return (
        <Layout showNavbar={true} showSidebar={true}>
            <div id='signUpDiv'>
                <ToastContainer />
                <div className='px-5' id='signUpDivOne'>
                    <BeatLoader color={'#123abc'} loading={loading} size={15} />
                    <h6 className='my-2 display-6'>Sign Up</h6>
                    <Formik
                        initialValues={{ firstName: '', lastName: '', email: '', password: '', userName: '' }}
                        validationSchema={validationSchema}
                        onSubmit={async(values: FormValues)=>{
                            setLoading(true);
                            console.log(values)
                            try {
                                const response = await signUp(values)
                                console.log(response)
    
                                if(response.status === 201){
                                    setLoading(false);
                                    toast.success('Account created successfully');
                                    navigate('/login');
                                }else{
                                    setLoading(false);
                                    toast.error('An error occurred. Please try again');
                                }
                            } catch (error) {
                                toast.error('Network error');
                            }finally {
                                setLoading(false);
                            }

                        }}
                        >
                            {({errors, touched})=>{
                                return(
                                <Form className='w-100'>
                                    <label style={{color:"white"}}>First name</label>
                                    <Field className="form-control w-100 my-2" name="firstName" />
                                    {errors.firstName && touched.firstName ? (<div style={{color:"red"}}>{errors.firstName}</div>) : null}

                                    <label style={{color:"white"}}>Last name</label>
                                    <Field className="form-control w-100 my-2" name="lastName" />
                                    {errors.lastName && touched.lastName ? (<div style={{color:"red"}}>{errors.lastName}</div>) : null}

                                    <label style={{color:"white"}}>Email</label>
                                    <Field className="form-control w-100 my-2" name="email" type="email" />
                                    {errors.email && touched.email ? <div style={{color:"red"}}>{errors.email}</div> : null}

                                    <label style={{color:"white"}}>User name</label>
                                    <Field className="form-control w-100 my-2" name="userName" />
                                    {errors.userName && touched.userName ? <div style={{color:"red"}}>{errors.userName}</div> : null}

                                    <label style={{color:"white"}}>Password</label>
                                    <Field className="form-control w-100 my-2" name="password" type="password" />
                                    {errors.password && touched.password ? <div style={{color:"red"}}>{errors.password}</div> : null}

                                    <button type="submit" className='btn btn-dark px-3 py-1'>Submit</button>

                                <p className='text-center'>Have an account? <a href="/login" style={{color:"#0077B5"}}>Sign in</a></p>
                                <p className='text-center'><a href='/' style={{color:"#0077B5"}}>Click here</a> to go to landing page</p>


                            </Form>
                                )
                            }}
                        </Formik>
                </div>
                <div id='signUpDivTwo'>
                    <img src="../../public/undraw_sign_up_n6im.svg" alt="" />
                </div>
            </div>
        </Layout>
    )
}

export default SignUpPage