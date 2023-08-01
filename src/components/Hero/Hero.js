import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section>
  <LeftSection main center>
    <SectionTitle>
      Hej, jag heter Senai och jag är en <br></br>Fullstack-utvecklare som bor i
    </SectionTitle>
    <div className='map'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d130266.510267128!2d17.81724841597599!3d59.326037952204615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f763119640bcb%3A0xa80d27d3679d7766!2sStockholm!5e0!3m2!1ssv!2sse!4v1687868144042!5m2!1ssv!2sse" width="400" height="220" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    
    <SectionText> Jag är en <b style={{color:"white"}}>Fullstack-utvecklare</b> som specialiserar mig på att hjälpa företag att bygga applikationer som omfattar både frontend och backend. Med en bred kunskap inom webbutveckling kan jag hantera hela utvecklingsprocessen och skapa robusta och effektiva system.</SectionText>
    <Button  onClick={()=> window.location="https://www.linkedin.com/in/senai-amanuel-769016273/"}> Mer information</Button>
  </LeftSection>
</Section>
);

export default Hero;