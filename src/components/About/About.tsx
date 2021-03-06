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

import { FormattedMessage } from "react-intl";
import { useStyles } from "./styles";


export const About = () => {
  const classes = useStyles();
  return (
    <Timeline className={classes.root} align="alternate">
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
              <FormattedMessage id="All of the above types of massage work well for both men and women. Depending on the person’s health status and physical condition, they can be performed in mild, medium and intense manner."/>
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
              <FormattedMessage id="At the moment he is a certified specialist in the field of rehabilitation massage, with 5 years of experience. I have worked with acrobats, gymnasts and professional dancers. Thanks to 20-year dancing experience, I have mastered the techniques of body recovery from injuries, fractures, sprains, physical and emotional overload, as well as in the biomechanics of the body and muscle work."/>
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
              <FormattedMessage id="I have worked in the American companies Cunard, Princess for 11 years as a professional dancer."/>
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
              <FormattedMessage id="I have a graduate degree in Pedagogy."/>
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
