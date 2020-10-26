import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import { Typography } from "@material-ui/core";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import DirectionsBoatIcon from "@material-ui/icons/DirectionsBoat";
import SchoolIcon from "@material-ui/icons/School";
import InfoIcon from "@material-ui/icons/Info";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export const About = () => {
  const classes = useStyles();
  return (
    <Timeline style={{marginTop: 80}} align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary"></Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <InfoIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Информация
            </Typography>
            <Typography>
              Все вышеперечисленные виды массажа, хорошо работают, как для
              мужчин , так и для женщин. И в зависимости от состояния здоровья и
              физической кондиции человека, могут исполняться с легкой, средней
              и интенсивной нагрузкой.
            </Typography>
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
            <BusinessCenterIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Обучение, практика и работа.
            </Typography>
            <Typography>
              Работал массажистом с профессиональными танцорами, гимнастами и
              цирковыми акробатами. Благодаря 20-ти летнему танцевальному стажу,
              есть опыт техники восстановления тела после травм, переломов,
              растяжений, физической и эмоциональной перегрузке , а также по
              биомеханике тела и работы мышц.
            </Typography>
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
          <TimelineDot color="primary" variant="outlined">
            <DirectionsBoatIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Работа
            </Typography>
            <Typography>
              Работа на круизных лайнерах компаний как "Cunard", "Princess
              Cruises" в качестве профессионального танцора.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2002-2007
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Образование
            </Typography>
            <Typography>
              выпускник университета им. М. П. Драгоманова, педагогический
              факультет.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
