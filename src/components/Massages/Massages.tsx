import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  makeStyles,
  useMediaQuery,
  CardActionArea,
} from "@material-ui/core";
import { massagesData } from "./constants";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
// import MasonryLayout from "src/components/MasonryLayout/MasonryLayout";
import MasonryLayout from "../MasonryLayout/MasonryLayout";
//import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

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
    backgroundColor: "transparent",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    // paddingBottom: 15,
    // marginLeft: 70,
    // marginRight: 70,
    overflow: "scroll",
    height: 500,
    maxWidth: 600,
  },
}));

export const Massages = (props: Props) => {
  const classes = useStyles();

  //   const matches = useMediaQuery("(min-width:600px)");

  //const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const [open, setOpen] = React.useState(false);
  //   const [cardDescription, setCardDescription] = React.useState("");
  //   const [cardTitle, setCardTitle] = React.useState("");
  //   const [cardImages, setCardImages] = React.useState<any[]>([]);
  //   const [cardExtraInfo, setCardExtraInfo] = React.useState([{}]);

  const [activeMassage, setActiveMassage] = React.useState<Massage | undefined>(
    undefined
  );

  //console.log("cardListDescription", cardListDescription);
  // console.log("cardTitle", cardTitle);

  // console.log("open", open);
  // console.log("cardDescription", cardDescription);

  //  const handleOpen = () => {
  //    setOpen(true);
  //  };

  //  const handleClose = () => {
  //    setOpen(false);
  //  };

  const handleCardInfo = (
    // title: string,
    // description: string,
    // images: any[],
    // extraInfo: string[{}]
    massage?: Massage
  ) => {
    // console.log("listDescription", listDescription);

    setOpen(!open);

    setActiveMassage(massage);
    // setCardDescription(description);
    // setCardExtraInfo(extraInfo);
    // setCardImages(images);
    // setCardTitle(title);
  };

  console.log("activeMassage?.images", activeMassage?.images);

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
      {Object.values(massagesData).map((massage) => {
        // console.log("data", data.description);
        return (
          <Card
            style={{
              //  backgroundColor: "gray",
              display: "flex",
              justifyContent: "space-around",
              // maxHeight: "100%",
              width: 300,
            }}
            className={classes.root}
          >
            <CardActionArea
              onClick={() =>
                handleCardInfo(
                  massage
                  //   data.title,
                  //   data.description,
                  //   data.images,
                  //   data.extraInfo
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

      {/* <Fade in={open}>
        <MasonryLayout images={cardImages} cardDescription={cardDescription} />
    </Fade> */}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        // onClose={handleClose}
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
                // return <div>{description}</div>;
              })}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

// {/* <Fade in={open}>
//             <div className={classes.paper}>
//               <h2 id="transition-modal-title">Подробная информация</h2>
//               {/* <p id="transition-modal-description">{data.description}</p> */}
//               <p id="transition-modal-description">{cardDescription}</p>
//               <div>
//                 {cardImages.map((image) => {
//                   // return <CardMedia className={classes.img} image={image} />;
//                   return <img style={{ maxWidth: "100%" }} src={image} />;
//                   // console.log("image", image);
//                 })}
//               </div>
//             </div>
//           </Fade> */}
