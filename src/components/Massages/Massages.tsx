import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  makeStyles,
  CardActionArea,
} from "@material-ui/core";
import { massagesData } from "./constants";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import MasonryLayout from "../MasonryLayout/MasonryLayout";

export type MassageType = "japanese" | "vietnamese" | "relaxing" | "visceral";
type ExtraInfo = {
  title: string;
  items: string[];
};

export type Massage = {
  title: string;
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
  const classes = useStyles();

  
  const [open, setOpen] = React.useState(false);
  

  const [activeMassage, setActiveMassage] = React.useState<Massage | undefined>(
    undefined
  );

  

  const handleCardInfo = (
    
    massage?: Massage
  ) => {

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
            <CardActionArea
              onClick={() =>
                handleCardInfo(
                  massage
                  
                )
              }
            >
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

