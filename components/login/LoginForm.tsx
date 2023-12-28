import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  FormFieldItem,
  LoginButton,
  LoginFormContainer,
} from "./LoginFormStyles";

type LoginButtonItem = { loginButtonHandler: () => void };

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = ({ loginButtonHandler }: LoginButtonItem) => {
  const handleFormSubmit = (values: { email: string; password: string }) => {
    loginButtonHandler();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          handleFormSubmit(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <LoginFormContainer>
            <FormFieldItem>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" />
            </FormFieldItem>
            <FormFieldItem>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" />
            </FormFieldItem>
            <LoginButton type="submit" disabled={isSubmitting}>
              Login
            </LoginButton>
          </LoginFormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
