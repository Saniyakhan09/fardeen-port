import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Fardeen Khan</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Cybersecurity Researcher</HighlightAlt> based in INDIA.
        
      </p>
      <p>
      Fardeen Khan is a Cybersecurity Researcher, Game Developer and a Bug Hunter. <br />
      He learned ethical hacking via Opensource. Skilled in Linux,Networking security, WebApplication Security, <br />
      and have acquired the necessary skills and knowledge to secure your domain. <br />
      BSc.IT Final year student highly passionate about Cyber Security & Penetration testing always seeking to get a hands-on security domain..
      </p>
    </AboutWrapper>
  );
};

export default About;
