import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { About } from "./components/About/About";
import {
  BrowserRouter as Router,
  // Switch,
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
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import MasonryLayout, {
  Masonry,
  Tile,
} from "./components/MasonryLayout/MasonryLayout";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
{
  /*const useStyles = makeStyles((theme) => ({
  // Timelines
  paper: {
    padding: "6px 16px",
    backgroundColor: "red",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
})); */
}

let brakePoints = [350, 500, 750];

export default function App() {
  // const oldLinks =
  //   //   { to: "/massages", label: "Massages" },
  //   //   { to: "/about", label: "About" },
  //   { to: "/contacts", label: "Contacts" };
  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [state, setState] = React.useState({
    checkedA: true,
  });

  return (
    <Router>
      <div>
        {/*  <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="" />

        
          <OldSchoolMenuLink
            activeOnlyWhenExact={true}
            to="/contacts"
            label="Contacts"
          />
        */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            padding: 15,
          }}
        >
          <div
            style={{
              marginRight: 15,
            }}
            onClick={() => {
              alert("Redirect to home page");
            }}
          >
            <img
              alt="jestHand"
              src={require("./components/Massages/media/jensHand.png")}
              width="80"
            />
          </div>
          <div
            style={{
              flexDirection: "column",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div>
              <h1 style={{ textAlign: "center" }}>
                Массаж для расслабления и реабилитации
              </h1>
            </div>

            <div style={{}}>
              <FormGroup>
                <Typography component="div">
                  <Grid
                    component="label"
                    container
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item>RUS</Grid>
                    <Grid item>
                      <Switch
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                      />
                    </Grid>
                    <Grid item>ENG</Grid>
                  </Grid>
                </Typography>
              </FormGroup>
            </div>
          </div>
        </div>
        <hr />
        {/* <h1
          style={{
            backgroundColor: "brown",
            display: "flex",
            justifyContent: "space-around",
            position: "fixed",
            width: "100%",
            marginTop: "15px",
          }}
        ></h1> 

        <hr /> */}

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}

        <Redirect to="/massages" />

        {/* <Switch> */}
        <Route path="/massages">
          <MassagesRoute />
        </Route>

        {/*
          <Route path="/about">
            <AboutPage />
          </Route> */}
        <Route path="/contacts">
          <Contacts />
        </Route>
        {/* </Switch> */}
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function MassagesRoute() {
  // let { path, url } = useRouteMatch();

  // console.log("path", path);

  //const newLinks = [
  //  { to: `${url}/japanese`, label: "Japanese massage" },
  //  { to: `${url}/vietnamese`, label: "Vietnamese massage" },
  //  { to: `${url}/relaxing`, label: "Relaxing massage" },
  //  { to: `${url}/visceral`, label: "Visceral chiropractic" },
  //];

  // const classes = useStyles();

  return (
    <Router>
      {/* <div
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
           <Route exact path={path}> 
          <Route path={`${path}/:massageId`}>
            <NewSchoolMenuLink />
          </Route>
        </Switch>

        <img
          alt="logo"
          src={require("./images/photo_home.jpg")}
          style={{ width: "100%" }}
       /> 
      </div> */}

      <Massages />
      <hr />
      <About />
      <hr />
      <Contacts />
    </Router>
  );
}

// function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }: any) {
//   let match = useRouteMatch({
//     path: to,
//     exact: activeOnlyWhenExact,
//   });

//   // console.log("math", match);

//   return (
//     <div
//       style={{ backgroundColor: "turquoise" }}
//       className={match ? "active" : ""}
//     >
//       {match && "> "}
//       <Link to={to}>
//         <div style={{ color: match ? "orange" : "purple" }}>
//           {label} {""}
//         </div>
//       </Link>
//     </div>
//   );
// }

/*
  function NewSchoolMenuLink({ label, to, activeOnlyWhenExact }: any) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <div className={match ? "active" : ""}>
      {/* {match && "> "} 
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
*/

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

function Contacts() {
  const diplomas = [
    require("./components/Massages/media/diploma(1).jpg"),
    require("./components/Massages/media/diploma(2).jpg"),
    require("./components/Massages/media/diploma(3).jpg"),
    require("./components/Massages/media/diploma(4).jpg"),
  ];
  return (
    <div
      style={{
        padding: 15,
      }}
    >
      <div
        style={{
          flexDirection: "row",
          display: "flex",
        }}
      >
        <div
          style={{
            height: 100,
          }}
        >
          <img
            style={{
              maxWidth: 100,
            }}
            src={avatar}
            alt="Avatar"
          />
        </div>

        <div
          style={{
            marginLeft: 15,
          }}
        >
          <h1>Солтынчук Евгений Леонидович</h1>
          <h3>Email: bigmavr5@gmail.com</h3>
          <h3>Phone: +38 093 110 44 35; +38 066 118 16 08;</h3>
        </div>
      </div>

      <Masonry brakePoints={brakePoints}>
        {diplomas.map((image, id) => {
          return <Tile src={image} />;
        })}
      </Masonry>

      {/* <div
        style={{
          justifyContent: "space-around",
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <img
          src={require("./components/Massages/media/diploma(1).jpg")}
          alt="Diploma1"
          width="250"
        />
        <img
          src={require("./components/Massages/media/diploma(2).jpg")}
          alt="Diploma2"
          width="200"
        />
        <img
          src={require("./components/Massages/media/diploma(3).jpg")}
          alt="Diploma3"
          width="200"
        />
        <img
          src={require("./components/Massages/media/diploma(4).jpg")}
          alt="Diploma4"
          width="250"
        />
      </div> */}
    </div>
  );
}

// function AboutPage(props) {
//   return <div>About</div>;
// }
