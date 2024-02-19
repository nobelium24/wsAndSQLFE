import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import "../modalForm.scss"

export type Post = {
    // title: string;
    // photoUrls:  string[];
    // content: string;
    children: React.ReactNode;
}

const PostSchema = yup.object().shape({
    title: yup.string(),
    // photoUrls: yup.array().of(yup.string()),
    content: yup.string()

})

export const PostComponent: React.FC = () => {

    return (
        <>
            <Formik
                initialValues={{
                    title: "",
                    photoUrls:[],
                    content: "",
                }}
                validationSchema={PostSchema}
                onSubmit={async (values) => {
                    console.log(values)
                    const { photoUrls, title, content } = values;
                    const files = Array.from(photoUrls);
                    const promises = files.map((file) => {
                        return new Promise((resolve, reject) => {
                            const reader = new FileReader();
                            reader.onloadend = () => resolve(reader.result);
                            reader.onerror = reject;
                            reader.readAsDataURL(file);
                        });
                    });

                    Promise.all(promises)
                        .then((base64Files) => {
                            // base64Files is an array of base64 strings
                            console.log(base64Files, title, content);
                            // You can now make your request with otherValues and base64Files
                        })
                        .catch((error) => {
                            // Handle error
                            console.error(error);
                        });
                    
                }}>
                {({setFieldValue, errors, touched})=>{
                                return(
                                    <Form className='' id="modalForm">
                                        <label style={{color:"white"}}>Post title (optional)</label>
                                        <Field id="modalInput" className="form-control w-100 my-1" name="title" />
                                        {errors.title && touched.title ? (<div style={{color:"red"}}>{errors.title}</div>) : null}

                                        <label style={{ color: "white" }}>Select File</label>
                                        <input
                                            type='file'
                                            className="form-control w-100 my-2"
                                            name="photoUrls"
                                            multiple
                                            onChange={(event) => {
                                                setFieldValue("photoUrls", event.currentTarget.files);
                                            }}/>

                                        <label style={{color:"white"}}>content</label>
                                        <Field id="modalInput" className="form-control w-100 my-1" name="content" type="content" />
                                        {errors.content && touched.content ? <div style={{color:"red"}}>{errors.content}</div> : null}

                                        <button type="submit" className='btn btn-dark px-3 py-1'>Submit</button>
                                    </Form>
                                )
                            }}
                </Formik>

        </>
    )
}

