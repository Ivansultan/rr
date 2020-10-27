import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  makeStyles,
  CardActionArea,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import MasonryLayout from "../MasonryLayout/MasonryLayout";
import { FormattedMessage } from "react-intl";

export type MassageType = "japanese" | "vietnamese" | "relaxing" | "visceral";
type ExtraInfo = {
  title: string;
  items: string[];
};

export type Massage = {
  title: any;
  shortDescription: string;
  description: string;
  images: any[];
  extraInfo: ExtraInfo[];
};
export type MassageList = { [M in MassageType]: Massage };

type Props = {};

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    margin: 5,
    cursor: "pointer",
  },
  bullet: {
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    textAlign: "center",
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    paddingTop: "56.25%", // 16:9
    height: "100%",
    width: "100%",
  },
  img: {
    height: 150,
    width: 150,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),

    overflow: "scroll",
    height: 500,
    maxWidth: 600,
  },
}));

export const Massages = (props: Props) => {
  const massagesData: MassageList = {
    japanese: {
      title: <FormattedMessage id="Japanies" />,
      shortDescription: "Юмейхо терапия 1 ступень (японская техника массажа) ",
      description:
        "Юмейхо терапия 1 ступень (японская техника массажа) Построена на основе биомеханики тела и влиянии смещения центра тяжести костей таза, на здоровье человека. Юмейхо терапия включает в себя лимфатический массаж всего тела, мягкую мануальную терапию и проработку мышц всего тела.",
      images: [
        require("./media/japanese(1).jpg"),
        require("./media/japanese(2).png"),
        require("./media/japanese(3).jpg"),
        require("./media/japanese(4).jpg"),
      ],
      extraInfo: [
        {
          title:
            "Благодаря системному и комплексному подходу двух техник (Юмейхо 1,2 ступень), решаются такие проблемы как:",
          items: [
            "Головные боли",
            "Болезненные месячные",
            "Боли в шее, спине, пояснице",
            "Повышенная утомляемость",
            "Плохой сон",
            "Сколиоз",
            "Боли в суставах",
            "Высокое и низкое давление",
            "Расстройства пищеварения",
          ],
        },
        {
          title: "УЛУЧШАЕТСЯ:",
          items: [
            "Продуктивность работы",
            "Регенерация тканей",
            "Укрепляется иммунная система",
            "Нормализуется обмен веществ",
            "Профилактика заболеваний",
            "Сексуальное желание",
            "Осанка",
            "Кровообращение во всем теле",
          ],
        },
      ],
    },
    vietnamese: {
      title: "Вьетнамский",
      shortDescription:
        "Юмейхо терапия 2 ступень (вьетнамская техника массажа)",
      description:
        "Юмейхо терапия 2 ступень (вьетнамская техника массажа) Это система специально подобранных приемов обдавливания, скруток и растяжек (основанных на приемах боевых искусств), направленных на глубокую проработку мышц и связок, снятия напряжения со всего тела и увеличения объема движения суставов.",
      images: [
        require("./media/vietnamese(1).jpg"),
        require("./media/vietnamese(2).jpg"),
        require("./media/vietnamese(3).jpg"),
        require("./media/vietnamese(4).jpg"),
        require("./media/vietnamese(5).jpg"),
      ],

      extraInfo: [
        {
          title:
            "Благодаря системному и комплексному подходу двух техник (Юмейхо 1,2 ступень), решаются такие проблемы как:",
          items: [
            "Головные боли",
            "Болезненные месячные",
            "Боли в шее, спине, пояснице",
            "Повышенная утомляемость",
            "Плохой сон",
            "Сколиоз",
            "Боли в суставах",
            "Высокое и низкое давление",
            "Расстройства пищеварения",
          ],
        },
        {
          title: "Улучшается:",
          items: [
            "Продуктивность работы",
            "Регенерация тканей",
            "Укрепляется иммунная система",
            "Нормализуется обмен веществ",
            "Профилактика заболеваний",
            "Сексуальное желание",
            "Осанка",
            "Кровообращение во всем теле",
          ],
        },
      ],
    },
    relaxing: {
      title: "Расслабляющий",
      shortDescription: "Массаж шейно-воротниковой зоны",
      description:
        "Массаж шейно-воротниковой зоны.  Включает в себя проработку шеи, грудного отдела и плечевого пояса. ",
      images: [
        require("./media/relaxing(1).jpg"),
        require("./media/relaxing(2).jpg"),
        require("./media/relaxing(3).jpg"),
        require("./media/relaxing(4).jpg"),
      ],

      extraInfo: [
        {
          title: "",
          items: [
            "Расслабляет мышцы шейно-воротниковой зоны",
            "Улучшает кровообращение и обмен веществ в шейном отделе.",
            "Ускоряет отток лимфы.",
            "Улучшает кровоснабжение головного мозга.",
            "Убирает боли в зоне головы, шеи и спины.",
            "Устраняет перенапряжение и скованность в мышцах.",
            "Нормализуется сон.",
            "Улучшается работа нервной системы",
          ],
        },
      ],
    },
    visceral: {
      title: "Массаж живота",
      shortDescription: "Висцеральная хиропрактика(массаж живота)",
      description:
        "Висцеральная хиропрактика (массаж живота) Это техника воздействия руками на внутренние органы посредством надавливания, простукивания, сдвижения, массажа, с целью восстановления правильного положения органов и микроциркуляции вокруг них. Помогает справляться с широким спектром ослабления функций органов всего тела.",
      images: [
        require("./media/visceral(1).jpg"),
        require("./media/visceral(2).jpg"),
        require("./media/visceral(3).jpg"),
        require("./media/visceral(4).jpg"),
      ],

      extraInfo: [
        {
          title: "Массаж живота устраняет:",
          items: [
            "Дисфункции работы желудочно-кишечного тракта",
            "Патологии работы почек",
            "Нарушение работы половой системы у мужчин и женщин",
            "Плохая циркуляция крови",
            "Недуги органов дыхания",
            "Воспаление поджелудочной железы, ослабление работы печени и желчного пузыря.",
          ],
        },
        {
          title: "Улучшает:",
          items: [
            "Работу сердечно-сосудистой системы",
            "Метаболизм",
            "Корректирует избыточный вес",
            "Психоэмоциональное состояние",
            "Профилактика простудных заболеваний и стимуляция иммунной системы.",
          ],
        },
      ],
    },
  };

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const [activeMassage, setActiveMassage] = React.useState<Massage | undefined>(
    undefined
  );

  const handleCardInfo = (massage?: Massage) => {
    setOpen(!open);

    setActiveMassage(massage);
  };

  console.log("activeMassage?.images", activeMassage?.images);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        maxHeight: "100%",
        flexWrap: "wrap",
      }}
    >
      {Object.values(massagesData).map((massage) => {
        return (
          <Card
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: 300,
            }}
            className={classes.root}
          >
            <CardActionArea onClick={() => handleCardInfo(massage)}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <h2>{massage.title}</h2>
              </Typography>

              <CardMedia className={classes.media} image={massage.images[0]} />
              <CardContent>
                <Typography paragraph>{massage.shortDescription}</Typography>
                <Typography
                  className={classes.pos}
                  color="textSecondary"
                ></Typography>
                <Typography variant="body2" component="p">
                  <br />
                  {}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => handleCardInfo()}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2
              style={{ justifyContent: "center", display: "flex" }}
              id="transition-modal-title"
            >
              {activeMassage?.title}
            </h2>

            <div style={{ paddingLeft: 10, paddingRight: 10 }}>
              {activeMassage?.description}
            </div>
            <MasonryLayout images={activeMassage?.images! ?? []} />

            <div>
              {activeMassage?.extraInfo.map((info) => {
                console.log("info", info);
                return (
                  <div style={{ paddingLeft: 10, paddingRight: 10 }}>
                    {info.title}
                    <ol>
                      {info.items.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </ol>
                  </div>
                );
              })}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
