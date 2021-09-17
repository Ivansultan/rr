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
  const [state, dispatch] = useReducer(reducer, { locale: "ru" });

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
              src={require("./components/Massages/media/jensHand.png")}
              width="60"
             // width="100"
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
      
      <div style={{marginLeft: 15, marginTop: 10, display: 'flex', marginRight: 15}}>
        
        <big>
        <div>
        <img style={{maxWidth: 175, borderRadius: 5, float: 'left', marginRight: 15, marginTop: 5}}
            alt="about" 
            src={require("../src/images/about.jpg")}
        />
        </div>
          Здравствуйте! Меня зовут Евгений Солтынчук, я представляю оздоровительную массажную систему Юмейхо, которая посредством комплекса манипуляций, позволяет устранить дисбаланс костей таза и позвоночника, а также эффективно и безопасно восстановить функциональное состояние всего организма.
        Также, система Юмейхо позиционирует себя как техника, позволяющая достичь идеала женской красоты и здоровья.
        <p>С 2016 года я являюсь сертифицированным специалистом в области реабилитационного массажа, и имею большой опыт работы массажем с людьми, связанными с тяжелыми физическими нагрузками, а также с теми, кто ведет малоподвижный образ жизни.
        Благодаря 20 летнему стажу профессиональной танцевальной карьеры, имею практику техники восстановления тела после травм: переломов костей, растяжений мышц и связок, ушибов, физических и эмоциональных перегрузок.</p>

        </big>
          
      </div>
      <div style={{marginLeft: 15, marginTop: 10, marginBottom: 10}}>
        <h3>Какие проблемы решает Юмейхо терапия:</h3>
        
        <ol><big>- опорно-двигательного аппарата: остеохондроз, сколиоз, артрозы, протрузии</big></ol>
        <ol><big>- сердечно-сосудистой системы: ишемия, дистония, гипертония</big></ol>
        <ol><big>- нарушения дыхательной и пищеварительных систем</big></ol>
        <ol><big>- заболевания, нарушения обмена веществ</big></ol>
        <ol><big>- синдром хронической усталости</big></ol>
        <ol><big>- неврозы</big></ol>
        <ol><big>- гипертонус мышц</big></ol>
        <ol><big>- болевые синдромы</big></ol>
        
        <big>Более детально вы можете узнать о каждой из техник ниже.</big>

      </div>

      
      

      <Massages />

      <div style={{marginLeft: 15, marginRight: 15}}>
        <text>
        <h3 style={{textAlign: 'center'}}>О ЮМЕЙХО ТЕРАПИИ</h3>


<big><div style={{}}>
        <img style={{maxWidth: 370, borderRadius: 5, float: 'right', marginLeft: 15, marginBottom: 15}}
            alt="yumeiho"
            src={require("../src/images/yumeiho.png")}
        />
        </div>
        Юмейхо терапия с японского языка, переводится как - "восстановление жизненных сил", эта система имеет холистический (целостный) подход к восстановлению организма человека. Под понятием "жизненные силы" подразумевается, что при коррекции костей таза, позвоночника, конечностей и гипертонуса мышц, полноценно восстанавливается движение крови, лимфы, иннервация (нервная связь), энергетика человека.
Сама терапия была создана профессором Масаюки Сайонджи, японским врачом-эсперантистом в 1978 году и на момент 2004 года, уже была признана и широко распространена в 73 странах мира.
В основе Юмейхо терапии лежат древние техники восстановления физиологии путем равновесия и баланса, работы с фасциями, мио-суставной функциональной коррекции, акупрессуры, мануальной терапии, висцеральной хиропрактики, гимнастики.</big>



<p><big>
<div>
        <img style={{maxWidth: 200, borderRadius: 5, float: 'right', marginLeft:15, marginTop: 5}}
            alt="yumeiho2"
            src={require("../src/images/yumeiho2.jpg")}
        />
        </div>
  Статистика утверждает, что около 98% людей имеет смещение тазовых костей практически с детства. Причины смещения могут быть самые разные: во время беременности и при родах у мам, у детей при рождении, при падениях , ушибах, привычка сидеть в неправильной позе, работа связанная с тяжелой физической нагрузкой, малоподвижный образ жизни.
Организм представляет собой единую систему рычагов и связок, при смещении любого его рычага-сустава, непременно возникает смещение во всех других суставах в той или иной степени. Центром организма является линия пересечения позвоночника и линия подвздошных костей (линия таза). По аналогии, можно сказать, что тазовая кость является "фундаментом здания",  а позвоночник и конечности его "стенами". Поэтому легко представить,  когда говорят, что "фундамент поплыл", стены начинают рушиться.
В этом случае Юмейхо терапия помогает привести в равновесие и баланс весь опорно-двигательный аппарат, улучшить работу внутренних органов, что в свою очередь стимулирует организм бороться с патологическими отклонениями и восстановить жизненные силы, для полноценной счастливой жизни без боли.</big></p>


        </text>
      </div>

      <About />
      <Contacts />
    </IntlProvider>
  );
}
