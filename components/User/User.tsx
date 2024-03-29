import React from "react";
import { UserContainer, Heading, Icon } from "./UserStyles";
import Image from "next/image";

type User = {
  user: {
    name?: string | undefined | null;
    image?: string | undefined | null;
    email?: string | undefined | null;
  };
};

const User = ({ user }: User) => (
  <UserContainer>
    {user.image ? (
      <Image src={user.image} fill alt="Profile Image" />
    ) : (
      <Icon>
        <i className="fa fa-user"></i>
      </Icon>
    )}
    <Heading>{user.name}</Heading>
  </UserContainer>
);

export default User;
