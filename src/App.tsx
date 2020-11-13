import React, { useReducer } from "react";
import { About } from "./components/About/About";
import { Massages } from "./components/Massages/Massages";
import { FormattedMessage, IntlProvider } from "react-intl";
import Russian from "./translations/ru.json";
import English from "./translations/en.json";
import Contacts from "./components/Contacts/Contacts";
import { useStyles } from "./stylesApp";

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

  const classes = useStyles();

  const { locale } = state;
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div>
        <div
          className={classes.headLineContainer}
        >
          <div
            className={classes.logo}
            
          >
            <img
              alt="jensHand2"
              src={require("./components/Massages/media/jensHand2.png")}
             // width="60"
              width="100"
            />
          </div>
          <div
            className={classes.titleContainer}
          >
            <h1 className={classes.title}>
              <FormattedMessage id="Massage to relax and rehab" />
            </h1>

            <div className={classes.switcher}>
              
                    {languages.map((language) => {
                      const isActiveLocale = language.locale === state.locale
                      return (
                        <div
                          style={{
                            paddingLeft: 10,
                            cursor: isActiveLocale
                                ? "default"
                                : "pointer",
                            fontWeight: isActiveLocale ? "bold" : "normal",
                            textDecoration: isActiveLocale ? "" : "underLine",
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
                 
            </div>
          </div>
        </div>
        <hr className={classes.delimiter} />
      </div>
      <Massages />
      <About />
      <Contacts />
    </IntlProvider>
  );
}
