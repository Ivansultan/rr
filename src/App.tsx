import React from "react";
import { About } from "./components/About/About";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { Massages } from "./components/Massages/Massages";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import { FormattedMessage, IntlProvider } from "react-intl";
import Russian from "./translations/ru.json";
import English from "./translations/en.json";
import Contacts from "./components/Contacts";


const messages = {
  en: English,
  ru: Russian,
};

const locale = "en";



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
             // backgroundColor: "gray",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div
              style={{
               // backgroundColor: "red",
                marginLeft: 25,
              }}
              onClick={() => {
                alert("Redirect to home page");
              }}
            >
              <img
                alt="jestHand"
                src={require("./components/Massages/media/jensHand.png")}
                width="60"
              />
            </div>
            <div
              style={{
               // backgroundColor: "green",
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                marginRight: 25,
              }}
            >
              
                <h1 style={{ textAlign: "center", marginTop: 7, marginBottom: 7 }}>
                <FormattedMessage id="Massage to relax and rehab"/>
                </h1>
              

              <div>
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
          <hr style={{marginBottom: 30, border: "1px dotted #f0f5f5"}}/>

          <Redirect to="/massages" />

          <Route path="/massages">
            <MassagesRoute />
          </Route>

          {/* <Route path="/contacts">
            <Contacts />
          </Route> */}
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

