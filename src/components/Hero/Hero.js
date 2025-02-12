import React, { useEffect } from 'react'; 
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js';
    script.async = true;

    // Po załadowaniu skryptu inicjujemy chatbota
    script.onload = () => {
      if (window.Chatbot) {
        // Ustawienie adresu API w zależności od środowiska
        const apiHost = process.env.NODE_ENV === 'development'
          ? "http://localhost:3001"
          : "https://flowise-9kc0.onrender.com";
          
        window.Chatbot.init({
          chatflowid: "25f6866e-a998-4c23-b426-927ca250ba46",
          apiHost: apiHost,
        });
      } else {
        console.error('Chatbot is not available');
      }
    };

    document.body.appendChild(script);

    // Czyszczenie skryptu przy odmontowywaniu komponentu
    return () => {
      document.body.removeChild(script);
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
