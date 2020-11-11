import React, { useReducer } from "react";
import { About } from "./components/About/About";

import { Massages } from "./components/Massages/Massages";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import { FormattedMessage, IntlProvider } from "react-intl";
import Russian from "./translations/ru.json";
import English from "./translations/en.json";
import Contacts from "./components/Contacts";

type Locale = "en" | "ru";

type State = {
  locale: Locale;
};

type Action = State & {
  type: "setLocale";
};

const messages = {
  en: English,
  ru: Russian,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "setLocale":
      return { locale: action.locale };
    default:
      throw new Error();
  }
};

type Language = {
  name: string;
  locale: Locale;
};

const languages: Language[] = [
  { name: "English", locale: "en" },
  { name: "Russian", locale: "ru" },
];

export default function App() {
  const [state, dispatch] = useReducer(reducer, { locale: "en" });

  const { locale } = state;
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
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
              <FormattedMessage id="Massage to relax and rehab" />
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
                    {languages.map((language) => {
                      const isActiveLocale = language.locale === state.locale
                      return (
                        <div
                          style={{
                            paddingLeft: 10,
                            cursor: isActiveLocale
                                ? "default"
                                : "pointer",
                            fontWeight: isActiveLocale ? "bold" : "normal"
                          }}
                          onClick={() => {
                            if (!isActiveLocale) {
                              dispatch({
                                type: "setLocale",
                                locale: language.locale,
                              })
                            }
                          }}
                        >
                          {language.name}
                        </div>
                      );
                    })}
                  </Grid>
                </Typography>
              </FormGroup>
            </div>
          </div>
        </div>
        <hr style={{ marginBottom: 30, border: "1px dotted #f0f5f5" }} />
      </div>
      <Massages />
      <About />
      <Contacts />
    </IntlProvider>
  );
}
