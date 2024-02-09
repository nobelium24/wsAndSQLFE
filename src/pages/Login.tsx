import React from 'react'
import { Layout } from '../components/Layout'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import "../signUp.scss";
import { login } from '../services';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
// import { Link } from 'react-router-dom';

export type FormValues = {
    password: string;
    email: string;
}

const validationSchema: Yup.ObjectSchema<FormValues> = Yup.object().shape({
    email: Yup
    .string()
    .email("Invalid email address")
    .required("Email is required")
    .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),

    password: Yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
    });

const LoginPage:React.FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = React.useState<boolean>(false);
    return (
        <Layout showNavbar={true} showSidebar={true}>
            <div id='signUpDiv'>
            <ToastContainer />
                <div className='px-5' id='signUpDivOne'>
                    <BeatLoader color={'#123abc'} loading={loading} size={15} />
                    <h6 className='my-2 display-6'>Log in</h6>
                    <Formik
                        initialValues={{ firstName: '', lastName: '', email: '', password: '', userName: '' }}
                        validationSchema={validationSchema}
                        onSubmit={async(values: FormValues)=>{
                            setLoading(true);
                            console.log(values)

                            const response = await login(values)
                            console.log(response)

                            if(response.status === 200){
                                localStorage.setItem('token', response.data.token);
                                toast.success('Logged in successfully');
                                // setLoading(false);
                                navigate('/mainpage');
                            }else{
                                // setLoading(false);
                                toast.error('Invalid email or password');
                            }
                        }}
                        >
                            {({errors, touched})=>{
                                return(
                                <Form className='w-100'>
                                    <label style={{color:"white"}}>Email</label>
                                    <Field className="form-control w-100 my-2" name="email" type="email" />
                                    {errors.email && touched.email ? <div style={{color:"red"}}>{errors.email}</div> : null}

                                    <label style={{color:"white"}}>Password</label>
                                    <Field className="form-control w-100 my-2" name="password" type="password" />
                                    {errors.password && touched.password ? <div style={{color:"red"}}>{errors.password}</div> : null}

                                    <button type="submit" className='btn btn-dark px-3 py-1'>Submit</button>


                                <p className='text-center'>
                                    Don't have an account? 
                                    <a href="/signup" style={{color:"#0077B5"}}>Register</a>
                                </p>
                                <p className='text-center'>
                                    <a href='/' style={{color:"#0077B5"}}>Click here</a> to go to landing page
                                </p>


                            </Form>
                                )
                            }}
                        </Formik>
                </div>
                <div id='signUpDivTwo'>
                    <img src="../../public/undraw_fingerprint_login_re_t71l.svg" alt="" />
                </div>
            </div>
        </Layout>
    )
}

export default LoginPage