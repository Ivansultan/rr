import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import logo from "./photo_about.jpg"; // Tell webpack this JS file uses this image
import avatar from "./photo_contacts.png";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul
          style={{
            backgroundColor: "red",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <h1>
            <Link to="/massages">Massages</Link>
          </h1>
          <h1>
            <Link to="/about">About</Link>
          </h1>
          <h1>
            <Link to="/contacts">Contacts</Link>
          </h1>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
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
  return (
    <div>
      <ul style={{ display: "flex", justifyContent: "space-around" }}>
        <h3>
          <Link to={`${url}/vietnamese`}>Vietnamese massage </Link>
        </h3>
        <h3>
          <Link to={`${url}/relaxing`}>Relaxing massage</Link>
        </h3>
        <h3>
          <Link to={`${url}/visceral`}>Visceral chiropractic</Link>
        </h3>
      </ul>

      <Switch>
        <Route exact path={path}></Route>
        <Route path={`${path}/:massageId`}>
          <Massages />
        </Route>
      </Switch>
    </div>
  );
}

type MassageType = "vietnamese" | "relaxing" | "visceral";
type Massage = { title: string; description: string; image: string };
type Massages = { [M in MassageType]: Massage };

function Massages() {
  let massageId = (useParams() as any).massageId as MassageType;
  const data: Massages = {
    vietnamese: {
      title: "Массаж всего тела",
      description: "Есть где разгуляться",
      image: require("./photo_relax(1).jpg"),
      // or image: "url"
    },
    relaxing: {
      title: "Расслабляющий массаж",
      description: "Главное не задушить",
      image: require("./photo_relax(2).jpg"),
    },
    visceral: {
      title: "Массаж живота",
      description: "Худеем вместе",
      image: "",
    },
  };
  const { title, description, image } = data[massageId];
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt="Фото" />
      <div>{description}</div>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <img src={logo} alt="Logo" />
      <ul>
        Солтынчук Евгений Леонидович 07.04.1982 Образование
        высшее,педагогическое. Работал в американских компаниях “Cunard”,
        “Princess” в течении 11 лет, в качестве профессионального танцора.
        Благодаря 20-ти летнему танцевальному стажу, есть опыт техники
        восстановления тела после травм, переломов, растяжений, физической и
        эмоциональной перегрузке , а также по биомеханике тела и работы мышц.
      </ul>
    </div>
  );
}

function Contacts() {
  return (
    <div>
      <h1>Contacts</h1>
      <img src={avatar} alt="Avatar" />
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
