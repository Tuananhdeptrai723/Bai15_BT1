import { useState } from "react";
import { Formik } from "formik";

export default function EditEmail() {
    const [values, setValues] = useState({
        recipient: "",
        subject: "",
        content: "",
        file: "",
    });

    const stringJson = JSON.stringify(values);
    return (
        <div className="container">
            <h1 style={{ color: "blue" }}>Soạn thảo Email</h1>
            <Formik
                initialValues={{
                    recipient: "",
                    subject: "",
                    content: "",
                    file: "",
                }}
                validate={(values) => {
                    const errors = {};
                    if (!values.recipient) {
                        errors.recipient = "Required";
                    }
                    if (!values.subject) {
                        errors.subject = "Required";
                    }
                    if (!values.content) {
                        errors.content = "Required";
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <p>Người nhận:</p>
                        <input
                            name="recipient"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.recipient}
                        />
                        {errors.recipient && touched.recipient && (
                            <div className="error">{errors.recipient}</div>
                        )}
                        <br />
                        <p>Chủ đề:</p>
                        <input
                            name="subject"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.subject}
                        />
                        {errors.subject && touched.subject && (
                            <div className="error">{errors.subject}</div>
                        )}
                        <br />
                        <p>Nội Dung:</p>
                        <textarea
                            name="content"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.content}
                        />
                        {errors.content && touched.content && (
                            <div className="error">{errors.content}</div>
                        )}
                        <br />
                        <p>Upload File:</p>
                        <input
                            name="file"
                            type="file"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.file}
                        />
                        {errors.file && touched.file && (
                            <div className="error">{errors.file}</div>
                        )}
                        <br />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
}