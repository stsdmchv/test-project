import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as yup from 'yup';
import {Formik, Field, Form, FormikHelpers, ErrorMessage} from 'formik';
import PasswordShowHide from './PasswordShowHide'

enum Roles {
    ANT,
    ANT_MANAGER,
    ANT_OFFICER,
    DEVELOPER
}

interface Values {
    firstName: yup.StringSchema;
    lastName: yup.StringSchema;
    userName: yup.StringSchema;
    password: yup.StringSchema;
    roles: object;
    /*workBorders: [];*/
}

const required = (value: any) => (value ? undefined : "Required");

const UserCard = () => {
    return (
        <div>
            <h1>Add new user</h1>
            <Formik
                initialValues={{
                    firstName: yup.string()
                        .required('Your name')
                        .min(2,'So short'),
                    lastName: yup.string(),
                    userName:yup.string()
                        .required('Type some username')
                        .min(3, 'Login must be >3')
                        .notOneOf(['null', 'undefined','admin']),
                    password: yup.string()
                        .required('No password provided.')
                        .min(4, 'Password is too short - should be 4 chars minimum.')
                        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
                    roles: yup.mixed<Roles>().oneOf(Object.values(Roles) as number[]).required()
                }}
                onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}
            >
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" placeholder="Name" />

                    <label htmlFor="lastName">Last Name</label>
                    <Field id="lastName" name="lastName" placeholder="Surname" />

                    <label htmlFor="username">Username</label>
                    <Field
                        id="username"
                        name="username"
                        placeholder="username"
                        type="email"
                    />
                    <label htmlFor="password">password</label>
                    <Field
                        name="password"
                        className="form-control rounded-0"
                        validate={required}
                        component={PasswordShowHide}
                    />
                    <ErrorMessage
                    name="password"
                    component="div"
                    className="field-error-message"
                    />

                    <button type="submit">Add user</button>
                </Form>
            </Formik>
        </div>
    );
};

export default UserCard;
