import vue from "../../assets/icons/vue.svg";
import react from "../../assets/icons/react.svg";
import frontend from "../../assets/icons/frontend.svg";
import javascript from "../../assets/icons/javascript.svg";
import jest from "../../assets/icons/jest.svg";
import sharepoint from "../../assets/icons/sharepoint.svg";

const competencies = [
  {
    icon: javascript,
    title: "JavaScript",
    about:
      "Strong knowledge and hands-on experience of modern JavaScript, both object-oriented and functional programming paradigms, best practices and design patterns.",
  },
  {
    icon: vue,
    title: "Vue",
    about:
      "Developing responsive, reusable and modular UI components and single-page Web applications using Vue and its ecosystem tools and services: Vue CLI, Vue Router, Vuex, Pinia.",
  },
  {
    icon: jest,
    title: "Testing",
    about:
      "Implementing automated testing integrated into development and maintenance workflows. Writing unit and integration tests with Jest, Vitest and Vue Testing Library, and end-to-end testing with Cypress.",
  },
  {
    icon: frontend,
    title: "Frontend  Development",
    about:
      "Working knowledge of front-end development tools Git, Github, Webpack, Vite and npm; Interacting with REST APIs; Proficient in HTML and CSS, DOM element querying, manipulation, event handling, etc.",
  },
  {
    icon: react,
    title: "React",
    about:
      "Developing robust, interactive, and dynamic web apps, user interface components using React, both class and functional components. Managing state using React context, React hooks and Redux.",
  },

  {
    icon: sharepoint,
    title: "SharePoint",
    about:
      "Developing SharePoint solutions, application/site pages, apps, Web parts using client and JavaScript object models, SPFx solutions with Vue and React, data visualizations and dashboards using D3.js.",
  },
];

export default competencies;
