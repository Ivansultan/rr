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
import { FormattedMessage } from "react-intl";

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
              <FormattedMessage id="Information"/>
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
              <FormattedMessage id="Study, practice and work"/>
            </Typography>
            <Typography>
              <FormattedMessage id="At the moment he is a certified specialist in the field of rehabilitation massage, with 5 years of experience. He has worked with acrobats, gymnasts and professional dancers. Thanks to 20 years of dancing experience, he has experience in the technique of recovery the body after injuries, fractures, sprains, physical and emotional overload, as well as in the biomechanics of the body and muscle work."/>
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
              <FormattedMessage id="Work " />
            </Typography>
            <Typography>
              <FormattedMessage id="He worked for American companies Cunard, Princess for 11 years as a professional dancer."/>
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
              <FormattedMessage id="Education" />
            </Typography>
            <Typography>
              <FormattedMessage id="Higher education, pedagogical."/>
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
