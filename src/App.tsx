import React from "react";
import { About } from "./components/About/About";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import avatar from "./images/contacts.png";
import { Massages } from "./components/Massages/Massages";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import { Masonry, Tile } from "./components/MasonryLayout/MasonryLayout";
import { FormattedMessage, IntlProvider } from "react-intl";
import Russian from "./translations/ru.json";
import English from "./translations/en.json";

const messages = {
  en: English,
  ru: Russian,
};

const locale = "en";

let brakePoints = [350, 500, 750];

export default function App() {
  const handleChange = (event: any) => {
    localStorage.setItem("locale", event.target.checked ? "en" : "ru");
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [state, setState] = React.useState({
    checkedA: true,
  });

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Router>
        <div>
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
                marginLeft: 50,
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
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div>
                <h1 style={{ textAlign: "center" }}>
                <FormattedMessage id="Massage to relax and rehab"/>
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

          <Redirect to="/massages" />

          <Route path="/massages">
            <MassagesRoute />
          </Route>

          <Route path="/contacts">
            <Contacts />
          </Route>
        </div>
      </Router>
    </IntlProvider>
  );
}

function MassagesRoute() {
  return (
    <Router>
      <Massages />

      <About />

      <Contacts />
    </Router>
  );
}

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
        marginTop: 80,
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
            marginLeft: 20,
          }}
        >
          <h1 style={{ marginTop: 1 }}>
            <FormattedMessage id="Evgeny Soltynchuk "/>
            </h1>
          <h2>Email: bigmavr5@gmail.com</h2>
          <h3>
            <FormattedMessage id="Phone: +38 093 110 44 35; +38 066 118 16 08;"/>
            </h3>
        </div>
      </div>

      <Masonry brakePoints={brakePoints}>
        {diplomas.map((image, id) => {
          return <Tile src={image} />;
        })}
      </Masonry>
    </div>
  );
}
