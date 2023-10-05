import React from "react";
import { Footer, FooterContainer } from "./FooterStyles";
import FooterItem from "./FooterItem";

const FooterComponent = () => {
  const footerItems = [
    {
      text: "Privacy Policy",
      href: "/privacy",
      target: "_blank",
      rel: "noopener",
    },
    {
      text: "GitHub",
      href: "https://github.com/arangace/ReadyFourTomorrow",
      target: "_blank",
    },
    { text: "Home", href: "/home" },
  ];

  return (
    <Footer>
      <FooterContainer>
        {footerItems.map((footerLink) => (
          <FooterItem key={footerLink.text} item={footerLink} />
        ))}
      </FooterContainer>
    </Footer>
  );
};

export default FooterComponent;
