import React from "react";
import { FooterListItem } from "./FooterStyles";
import Link from "next/link";

type FooterItem = {
  item: {
    text: string;
    href: string;
    target?: string;
    rel?: string;
  };
};

const FooterItem = ({ item }: FooterItem) => (
  <Link href={item.href} target={item.target} rel={item.rel}>
    {item.text}
  </Link>
);

export default FooterItem;
