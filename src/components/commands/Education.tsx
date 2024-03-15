import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Bachelor of Science in Information Technology",
    desc: "Singhania University | 2020 ~ 2023",
  },
  {
    title: "Certified in VFX PRIME and Visual effectst",
    desc: " ARENA Animations | 2019 - 2021",
  },
  {
    title: "Completed 10 + 2 ",
    desc: "Varapradha PU College | 2017",
  },
];

export default Education;
