import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Ring</LinkTitle>
          <LinkItem href="tel:0736506637">0736506637</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:amanuelsenai@gmail.com">
            amanuelsenai@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Känn dig fri att kontakta mig idag.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/amanuelsen">
            <AiFillGithub size={"3rem"} />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/senai-amanuel-769016273/">
            <AiFillLinkedin size={"3rem"} />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/senai_amn/">
            <AiFillInstagram size={"3rem"} />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
