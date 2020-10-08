import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { About } from "./components/About/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import logo from "./images/about.jpg"; // Tell webpack this JS file uses this image
import avatar from "./images/contacts.png";
import { link } from "fs";
import { keys } from "@material-ui/core/styles/createBreakpoints";
import { Massages, MassageType } from "./components/Massages/Massages";
import { massagesData } from "./components/Massages/constants";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
const useStyles = makeStyles((theme) => ({
  // Timelines
  paper: {
    padding: "6px 16px",
    backgroundColor: "red",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function App() {
  const oldLinks = [
    { to: "/massages", label: "Massages" },
    { to: "/about", label: "About" },
    { to: "/contacts", label: "Contacts" },
  ];
  return (
    <Router>
      <div
        style={{
          backgroundColor: "",
        }}
      >
        {/* {<OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />} */}
        <h1
          style={{
            backgroundColor: "brown",
            display: "flex",
            justifyContent: "space-around",
            position: "fixed",
            width: "100%",
            marginTop: "15px",
          }}
        ></h1>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}

        <Redirect to="/massages" />

        <Switch>
          <Route path="/massages">
            <MassagesRoute />
          </Route>

          {/*
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          */}
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function MassagesRoute() {
  let { path, url } = useRouteMatch();

  // console.log("path", path);

  const newLinks = [
    { to: `${url}/japanese`, label: "Japanese massage" },
    { to: `${url}/vietnamese`, label: "Vietnamese massage" },
    { to: `${url}/relaxing`, label: "Relaxing massage" },
    { to: `${url}/visceral`, label: "Visceral chiropractic" },
  ];

  const classes = useStyles();

  return (
    <Router>
      <div
        style={{
          //display: "flex",
          marginTop: "60px",
        }}
      >
        <div
          style={{
            // backgroundColor: "lightGreen",
            display: "flex",
            justifyContent: "space-around",
            maxHeight: "100%",
          }}
        >
          {newLinks.map((link) => (
            <NewSchoolMenuLink to={link.to} label={link.label} />
          ))}
        </div>
        <Switch>
          {/* <Route exact path={path}> */}
          <Route path={`${path}/:massageId`}>
            <NewSchoolMenuLink />
          </Route>
        </Switch>

        {/*<img
          alt="logo"
          src={require("./images/photo_home.jpg")}
          style={{ width: "100%" }}
       /> */}
      </div>

      <Massages />
      <About />
    </Router>
  );
}

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }: any) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  // console.log("math", match);

  return (
    <div className={match ? "active" : ""}>
      {/* {match && "> "} */}
      <Link to={to}>
        <div style={{ color: match ? "orange" : "purple" }}>{label} </div>
      </Link>
    </div>
  );
}

function NewSchoolMenuLink({ label, to, activeOnlyWhenExact }: any) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <div className={match ? "active" : ""}>
      {/* {match && "> "} */}
      <Link to={to}>
        <div
          style={{
            color: match ? "orange" : "purple",
            margin: "10px",
            textAlign: "center",
          }}
        >
          {label}{" "}
        </div>
      </Link>
    </div>
  );
}

// function MassagesPage() {
//   let massageId = (useParams() as any).massageId as MassageType;
//   console.log("useParams", useParams());

//   const { title, description, images } = massagesData[massageId];

//   return (
//     <div>
//       <h3>{title}</h3>

//       {images.map((image: string) => {
//         return <img src={image}>{}</img>;
//       })}
//       {/* <img src={image} alt="Фото" /> */}
//       <div>{description}</div>
//     </div>
//   );
// }

//     <div>
//       <h1>About</h1>
//       <div>
//         <img
//           style={{ maxWidth: "30%", maxHeight: "30%" }}
//           src={logo}
//           alt="Logo"
//         />
//       </div>
//       <ul>
//         Солтынчук Евгений Леонидович 07.04.1982 Образование
//         высшее,педагогическое. Работал в американских компаниях “Cunard”,
//         “Princess” в течении 11 лет, в качестве профессионального танцора.
//         Благодаря 20-ти летнему танцевальному стажу, есть опыт техники
//         восстановления тела после травм, переломов, растяжений, физической и
//         эмоциональной перегрузке , а также по биомеханике тела и работы мышц.
//       </ul>
//     </div>
//   );
// }

// function Contacts(props) {
//   return (
//     <div>
//       <img
//         style={{ maxWidth: "30%", maxHeight: "30%" }}
//         src={avatar}
//         alt="Avatar"
//       />
//       <ul>
//         Все вышеперечисленные виды массажа, хорошо работают, как для мужчин ,
//         так и для женщин. И в зависимости от состояния здоровья и физической
//         кондиции человека, могут исполняться с легкой, средней и интенсивной
//         нагрузкой. Солтынчук Евгений Леонидович bigmavr5@gmail.com +38 093 110
//         44 35 +38 066 118 16 08
//       </ul>
//     </div>
//   );
// }

// function AboutPage(props) {
//   return <div>About</div>;
// }
