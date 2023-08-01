import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1, text: 'Fullstack-utbildning' },
  { number: 2, text: 'Byggde många projekt' },
  { number: 3, text: 'Älskar att koda' },
  { number: 4, text: 'Intresserad av att hjälpa andra företag' }
];

const Acomplishments = () => (
<Section>
  <SectionTitle>
  Personliga prestationer
  </SectionTitle>
  <Boxes>
    {data.map((card, index)=> (
      <Box key={index}>
        <BoxNum>{card.number}</BoxNum>
        <BoxText> {card.text}</BoxText>
      </Box>
    ))} 

  </Boxes>

</Section> 
);

export default Acomplishments;
