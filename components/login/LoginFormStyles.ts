import { Button, Flex, FlexColumn } from "@/styles/shared/globalStyles";
import styled from "styled-components";
import { Form } from "formik/dist/Form";
export const LoginButton = styled(Button)`
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
`;
export const LoginFormContainer = styled(FlexColumn)``;
export const FormFieldItem = styled(FlexColumn)`
  align-items: flex-start;
  justify-content: flex-start;
  color: red;
  min-height: 3rem;
`;
