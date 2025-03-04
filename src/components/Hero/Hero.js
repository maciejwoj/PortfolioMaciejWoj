import React, { useEffect } from 'react'; 
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js';
    script.async = true;

    script.onload = () => {
      if (window.Chatbot) {
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

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Section row nopadding>
    <LeftSection>
    <SectionTitle main center>
      Hey, I'm Maciej!
    </SectionTitle>
    <SectionText>
      I'm a <strong>Computer Science</strong> student with a focus on <strong>Artificial Intelligence</strong> with a passion for financial markets and business process automation
    </SectionText>

    <SectionText>
      Driven by curiosity, I'm constantly exploring new areas—whether it's blockchain, advanced trading algorithms, or machine learning. 
      Feel free to check out my projects below or download my CV to learn more about my journey.
      If you have any questions, chat with my assistant in the bottom-right corner of the page!
    </SectionText>
        
        <Button onClick={() => window.open('/images/CV.pdf', '_blank')}>
          Download CV
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
