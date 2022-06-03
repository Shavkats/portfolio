import react from "../../assets/icons/react.svg";
import frontend from "../../assets/icons/frontend.svg";
import javascript from "../../assets/icons/javascript.svg";
import jest from "../../assets/icons/jest.svg";
import sharepoint from "../../assets/icons/sharepoint.svg";
import d3 from "../../assets/icons/d3.svg";

const competencies = [
  {
    icon: javascript,
    title: "JavaScript/TypeScript",
    about:
      "Strong knowledge of modern JavaScript (ES6) and TypeScript, both object-oriented and functional programming paradigms, best practices and design patterns.",
  },
  {
    icon: react,
    title: "React",
    about:
      "Developing responsive and reusable user interface components using React, both class and functional components. Managing state using React context, React hooks and Redux",
  },
  {
    icon: jest,
    title: "Testing",
    about:
      "Writing unit, integration and snapshot tests using Jest and React Testing Library, knowledge of TDD methodology.",
  },
  {
    icon: d3,
    title: "D3",
    about:
      "Developing interactive and insightful data visualizations, rich and dynamic dashboards using D3.js",
  },
  {
    icon: frontend,
    title: "Frontend  Development",
    about:
      "Proficient in HTML and CSS, including Flexbox and CSS Grids layout techniques. In-depth knowledge of DOM - element creation, querying, manipulation, event handling, etc",
  },
  {
    icon: sharepoint,
    title: "SharePoint",
    about:
      "Developing SharePoint solutions – Application/site pages, apps, Web parts using client and JavaScript object models, SPFx solutions with React",
  },
];

export default competencies;
