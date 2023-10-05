import React from "react";
import { Container, Heading, Icon } from "./UserStyles";
import Image from "next/image";

type User = {
  user: {
    name?: string | undefined | null;
    image?: string | undefined | null;
    email?: string | undefined | null;
  };
};

const User = ({ user }: User) => (
  <Container>
    {user.image ? (
      <Image src={user.image} fill alt="Profile Image" />
    ) : (
      <Icon className="fa fa-user"></Icon>
    )}
    <Heading>{user.name}</Heading>
  </Container>
);

export default User;
