import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import { massagesData } from "./constants";

export type MassageType = "japanese" | "vietnamese" | "relaxing" | "visceral";
type Massage = { title: string; description: string; images: any[] };
export type MassageList = { [M in MassageType]: Massage };

type Props = {};

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    margin: 5,
  },
  bullet: {
    // display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    flexDirection: "row",
  },
  pos: {
    marginBottom: 12,
  },
}));

export const Massages = (props: Props) => {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {Object.values(massagesData).map((data) => {
        return (
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <h2>{data.title}</h2>
              </Typography>
              <CardMedia>
                {/* className={classes.media} 
            image="images/japanese (1).png" */}
              </CardMedia>
              <Typography variant="h5" component="h2"></Typography>
              <Typography
                className={classes.pos}
                color="textSecondary"
              ></Typography>
              <Typography variant="body2" component="p">
                <br />
                {}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
