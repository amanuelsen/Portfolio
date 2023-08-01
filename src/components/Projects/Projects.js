import React from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <div>
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projekt</SectionTitle>
      <GridContainer>
        {projects.map(
          ({ id, image, description, source, tags, visit, title }) => (
            <BlogCard key={id}>
              <Img src={image}></Img>
              <TitleContent>
                <HeaderThree title="">{title}</HeaderThree>
                <Hr/>
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <br/>
                <TitleContent> Med</TitleContent>
                <TagList>
                  {tags.map((tag, i)=> (
                    <Tag key={tag}> {tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
              <ExternalLinks href={source}>🧑‍💻</ExternalLinks>
                <ExternalLinks href={visit}> 👀 </ExternalLinks>

              </UtilityList>
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>
  </div>
);

export default Projects;
