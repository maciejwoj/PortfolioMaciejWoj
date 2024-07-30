import React from 'react';
import { DiDatabase, DiFirebase, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Now I'm working with basic programming languages, but I'm stil learnig
    </SectionText>
    <List>
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>Matura exam</ListTitle>
          <ListParagraph>
            Experience with<br />
            Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Portfolio</ListTitle>
          <ListParagraph>
            Experience with<br />
            Next.js React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Datebases</ListTitle>
          <ListParagraph>
            Experience with<br />
            access Excel Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
