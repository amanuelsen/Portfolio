import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
  <SectionDivider divider />
  <br/>
  <SectionTitle>Teknologier</SectionTitle>
  <SectionText>
    Jag har omfattande erfarenhet inom flera viktiga områden inom Fullstack-utveckling, inklusive:
    - Frontend-utveckling <b style={{color:"white"}}>(HTML, CSS, JavaScript, React, Redux, Next.js)</b>
    - Backend-utveckling <b style={{color:"white"}}>(Node.js, Express,Npm )</b>
    - Databashantering <b style={{color:"white"}}>(MongoDB, Postman)</b>
    - Versionshantering <b style={{color:"white"}}>(Git, Github)</b>
    - Andra färdigheter <b style={{color:"white"}}>(Powershell, Netlify, Vercel)</b>
    Denna breda kompetensuppsättning gör att jag kan skapa omfattande lösningar och leverera högkvalitativa applikationer som uppfyller företagens behov och krav.
  </SectionText>
  <List>
    <ListItem>
      <picture>
        <DiReact size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Erfarenhet av <br />
          HTML/CSS
          JavaScript och JavaScript-ramverk <b style={{color:"white"}}>(React)</b>, även <b style={{color:"white"}}>(Next.js)</b>
          Responsiv design och gränssnitt för mobila enheter
          Korskompatibilitet för webbläsare
          Animation och interaktion
          Tillgänglighet och användarupplevelse
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiFirebase size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Erfarenhet av <br />
<b style={{color:"white"}}>          Node, Express, JSON, EJS, JavaScript</b> server-sidig programmering, skalbarhet och prestandaoptimering
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiZend size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Databas</ListTitle>
        <ListParagraph>
          Erfarenhet av <br />
<b style={{color:"white"}}>          Databashantering, MongoDB, Mongoose,SQL, Firebase, Authentication</b> Datastrukturering
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiZend size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Erfarenhet av <br />
<b style={{color:"white"}}>          Material UI,Sass,Bootstrap, Tawilwind CSS</b> användarcentrerad design, visuell design, interaktionsdesign
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiFirebase size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>API</ListTitle>
        <ListParagraph>
          Erfarenhet av <br />
<b style={{color:"white"}}>          REST, Node.js, Axios,</b> API-design och integration
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiZend size="3rem" />




        </picture>
        <ListContainer>
          <ListTitle>Andra erfarenhet</ListTitle>
          <ListParagraph>
            Experience with <br />
            <b style={{color:"white"}}>            PowerShell, Git, VS Code, Netlify, Postman, Figma, Heroku, NPM , YARN
</b>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;