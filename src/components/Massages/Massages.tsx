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

export type MassageType = "japanese" | "vietnamese" | "relaxing" | "visceral";
type Massage = {
  title: string;
  shortDescription: string;
  description: string;
  images: any[];
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
    // display: "inline-block",
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
    //height: 0,
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
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    marginLeft: 100,
    marginRight: 100,
    // backgroundColor: "red",
    overflow: "scroll",
    height: 500,
  },
}));

export const Massages = (props: Props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [cardDescription, setCardDescription] = React.useState("");
  const [cardImages, setCardImages] = React.useState<any[]>([]);
  console.log("cardImages", cardImages);
  // console.log("open", open);
  // console.log("cardDescription", cardDescription);

  //  const handleOpen = () => {
  //    setOpen(true);
  //  };

  //  const handleClose = () => {
  //    setOpen(false);
  //  };

  const handleCardInfo = (description: string, images: any[]) => {
    setOpen(!open);
    setCardDescription(description);
    setCardImages(images);
  };

  return (
    <div
      style={{
        // TODO: move to `useStyles`
        // backgroundColor: "yellow",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        maxHeight: "100%",
        flexWrap: "wrap",
      }}
    >
      {Object.values(massagesData).map((data) => {
        // console.log("data", data.description);
        return (
          <Card
            style={{
              //  backgroundColor: "gray",
              display: "flex",
              justifyContent: "space-around",
              //maxHeight: "100%",
              width: 300,
            }}
            className={classes.root}
          >
            <CardActionArea
              onClick={() => handleCardInfo(data.description, data.images)}
            >
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <h2>{data.title}</h2>
              </Typography>

              <CardMedia className={classes.media} image={data.images[0]} />
              <CardContent>
                <Typography paragraph>{data.shortDescription}</Typography>
                <Typography
                  className={classes.pos}
                  color="textSecondary"
                ></Typography>
                <Typography variant="body2" component="p">
                  <br />
                  {}
                </Typography>
              </CardContent>
              {/*<button
                type="button"
                // onClick={handleOpen}
              >
                Button
              </button> */}
            </CardActionArea>
          </Card>
        );
      })}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        // onClose={handleClose}
        onClose={() => handleCardInfo("", [])}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Подробная информация</h2>
            {/* <p id="transition-modal-description">{data.description}</p> */}
            <p id="transition-modal-description">{cardDescription}</p>
            <div>
              {cardImages.map((image) => {
                // return <CardMedia className={classes.img} image={image} />;
                return <img style={{ maxWidth: "100%" }} src={image} />;
                // console.log("image", image);
              })}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
