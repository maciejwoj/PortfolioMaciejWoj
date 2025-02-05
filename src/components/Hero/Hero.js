import React, { useEffect } from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js';
    script.async = true;

    // Make sure the script is loaded before initializing the chatbot
    script.onload = () => {
      if (window.Chatbot) {  // Ensure Chatbot is available on the window object
        window.Chatbot.init({
          chatflowid: "25f6866e-a998-4c23-b426-927ca250ba46",
          apiHost: "http://localhost:3001",
        });
      } else {
        console.error('Chatbot is not available');
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up the script on unmount
    };
  }, []);

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to <br />
          My portfolio website
        </SectionTitle>
        <SectionText>
          Young, ambitious programmer looking for development opportunities
        </SectionText>
        <Button onClick={() => window.open('/images/CV.pdf', '_blank')}>Learn More CV</Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
