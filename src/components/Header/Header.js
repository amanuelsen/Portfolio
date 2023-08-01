import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link style={{ display: 'flex', alignItems: 'center', color:"white", marginBottom:"20px"}} href="/">
        <img className="senai"  src="/images/ss.png"/>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link  href="#projects">
          <NavLink>Projekt</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Tech</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>Om mig</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/amanuelsen">
        <AiFillGithub size={30} />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/senai-amanuel-769016273/">
        <AiFillLinkedin size={30} />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/senai_amn/">
        <AiFillInstagram size={30} />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
