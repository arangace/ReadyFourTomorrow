import React from "react";
import { Footer, FooterContainer, FooterItem } from "./FooterStyles";
import Link from "next/link";

const FooterComponent = () => (
  <Footer>
    <FooterContainer>
      <FooterItem>
        <Link href="/privacy" target="_blank" rel="noopener">
          Privacy Policy
        </Link>
      </FooterItem>
      <FooterItem>
        <Link
          href="https://github.com/arangace/ReadyFourTomorrow"
          target="_blank"
        >
          GitHub
        </Link>
      </FooterItem>
    </FooterContainer>
  </Footer>
);

export default FooterComponent;
