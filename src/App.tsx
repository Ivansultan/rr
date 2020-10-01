import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HotelIcon from "@material-ui/icons/Hotel";
import RepeatIcon from "@material-ui/icons/Repeat";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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

  // Cards
  root: {
    minWidth: 275,
    margin: 5,
  },
  bullet: {
    // display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    flexDirection: "row",
  },
  pos: {
    marginBottom: 12,
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
        >
          {oldLinks.map((link) => (
            <OldSchoolMenuLink to={link.to} label={link.label} />
          ))}
        </h1>

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

          <Route path="/about">
            <About />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
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
  const bull = <span className={classes.bullet}>•</span>;

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
            backgroundColor: "lightGreen",
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
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {Object.values(massagesData).map((data) => {
          return (
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  <h2>{data.title}</h2>
                </Typography>
                <CardMedia>
                  {/* className={classes.media} 
                  image="images/japanese (1).png" */}
                </CardMedia>
                <Typography variant="h5" component="h2"></Typography>
                <Typography
                  className={classes.pos}
                  color="textSecondary"
                ></Typography>
                <Typography variant="body2" component="p">
                  <br />
                  {}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
      {/*  <Card style={{ backgroundColor: "gray" }}>
        <div>
          {Object.values(massagesData.japanese).map((value) => {
            return <div>{value}</div>;
          })}
        </div>
      </Card>

      <Card style={{ backgroundColor: "white" }}>
        <div>
          {Object.values(massagesData.vietnamese).map((value) => {
            return <div>{value}</div>;
          })}
        </div>
      </Card>

      <Card style={{ backgroundColor: "gray" }}>
        <div>
          {Object.values(massagesData.relaxing).map((value) => {
            return <div>{value}</div>;
          })}
        </div>
      </Card>

      <Card style={{ backgroundColor: "white" }}>
        <div>
          {Object.values(massagesData.visceral).map((value) => {
            return <div>{value}</div>;
          })}
        </div>
      </Card> 
        */}

      <Timeline align="alternate">
        <TimelineItem style={{ marginTop: "150px" }}>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              2002-2007
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Образование
              </Typography>
              <Typography>Высшее педагогическое (бла,бла,бла...)</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              2008 - 2019
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Работа на кораблях
              </Typography>
              <Typography>Хочу ещё разок:)</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              2015 - 2020
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <HotelIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Стаж работы массажистом
              </Typography>
              <Typography>5 лет, но можно написать сколько хочу...</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <RepeatIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Доп. инфа
              </Typography>
              <Typography>
                Очень нерешительльный самоубийца, умер от старости
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
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

type MassageType = "japanese" | "vietnamese" | "relaxing" | "visceral";
type Massage = { title: string; description: string; images: any[] };
type Massages = { [M in MassageType]: Massage };

const massagesData: Massages = {
  japanese: {
    title: "Японский",
    description:
      "Юмейхо терапия 1 ступень (японская техника массажа) Построена на основе биомеханики тела и влиянии смещения центра тяжести костей таза, на здоровье человека. Юмейхо терапия включает в себя лимфатический массаж всего тела, мягкую мануальную терапию и проработку мышц всего тела.",
    images: [
      require("./images/japanese (1).png"),
      require("./images/japanese (2).jpg"),
      require("./images/japanese (3).jpg"),
      require("./images/japanese (4).jpg"),
    ],
  },
  vietnamese: {
    title: "Вьетнамский",
    description:
      "Юмейхо терапия 2 ступень (вьетнамская техника массажа) Это система специально подобранных приемов обдавливания, скруток и растяжек (основанных на приемах боевых искусств), направленных на глубокую проработку мышц и связок, снятия напряжения со всего тела и увеличения объема движения суставов.",
    images: [
      require("./images/vietnamese (1).jpg"),
      require("./images/vietnamese (2).jpg"),
      require("./images/vietnamese (3).jpg"),
      require("./images/vietnamese (4).jpg"),
      require("./images/vietnamese (5).jpg"),
    ],
    // or image: "url"
  },
  relaxing: {
    title: "Расслабляющий",
    description: "",
    images: [
      require("./images/relaxing (1).jpg"),
      require("./images/relaxing (2).jpg"),
      require("./images/relaxing (3).jpg"),
      require("./images/relaxing (4).jpg"),
    ],
  },
  visceral: {
    title: "Массаж живота",
    description:
      "Висцеральная хиропрактика(массаж живота)Это техника воздействия руками на внутренние органы посредством надавливания, простукивания, сдвижения, массажа, с целью восстановления правильного положения органов и микроциркуляции вокруг них.Помогает справляться с широким спектром ослабления функций органов всего тела.   Массаж живота устраняет: 1. Дисфункции работы желудочно-кишечного тракта 2. Патологии работы почек 3. Нарушение работы половой системы у мужчин и женщин 4. Плохая циркуляция крови 5. Недуги органов дыхания 6. Воспаление поджелудочной железы, ослабление работы печени и желчного пузыря.  Улучшает: 1. Работу сердечно-сосудистой системы 2. Метаболизм 3. Корректирует избыточный вес 4. Психоэмоциональное состояние 5. Профилактика простудных заболеваний и стимуляция иммунной системы.",
    images: [
      require("./images/visceral (1).jpg"),
      require("./images/visceral (2).jpg"),
      require("./images/visceral (3).jpg"),
      require("./images/visceral (4).jpg"),
    ],
  },
};

function Massages() {
  let massageId = (useParams() as any).massageId as MassageType;
  console.log("useParams", useParams());

  const { title, description, images } = massagesData[massageId];

  return (
    <div>
      <h3>{title}</h3>

      {images.map((image) => {
        return <img src={image}>{}</img>;
      })}
      {/* <img src={image} alt="Фото" /> */}
      <div>{description}</div>
    </div>
  );
}

function About() {
  return <div></div>;
}

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
  return (
    <div>
      <img
        style={{ maxWidth: "30%", maxHeight: "30%" }}
        src={avatar}
        alt="Avatar"
      />
      <ul>
        Все вышеперечисленные виды массажа, хорошо работают, как для мужчин ,
        так и для женщин. И в зависимости от состояния здоровья и физической
        кондиции человека, могут исполняться с легкой, средней и интенсивной
        нагрузкой. Солтынчук Евгений Леонидович bigmavr5@gmail.com +38 093 110
        44 35 +38 066 118 16 08
      </ul>
    </div>
  );
}
