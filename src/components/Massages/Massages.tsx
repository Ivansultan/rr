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
  title: React.ReactFragment;
  items: React.ReactElement[];
};

export type Massage = {
  title: React.ReactElement;
  shortDescription: React.ReactElement;
  description: React.ReactElement;
  images: any[];
  extraInfo: ExtraInfo[];
};
export type MassageList = { [M in MassageType]: Massage };

type Props = {};

export const useStyles = makeStyles((theme) => ({
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
      title: <FormattedMessage id="Japanese" />,
      shortDescription: <FormattedMessage id="Yumeiho therapy dan 1 (Japanese massage technique) "/>,
      description:
        <FormattedMessage id="Yumeiho therapy dan 1 (Japanese massage technique) It is based on the body biomechanics and the effect of centere-of-gravity shift of the pelvic bones on human health.Yumeiho therapy includes the whole body lymphatic massage, gentle manual therapy and whole body muscle massage." />,
      images: [
        require("./media/japanese1.jpg"),
        require("./media/japanese2.jpg"),
        require("./media/japanese3.jpg"),
        require("./media/japanese4.jpg"),
      ],
      extraInfo: [
        {
          title:
            <FormattedMessage id="Applying these two techniques systematically and comprehensively (Yumeiho therapy dan 1,2), such problems are solved as:"/>, 
          items: [
               <FormattedMessage id="Headaches"/>,
               <FormattedMessage id="Painful menstruation"/>,
               <FormattedMessage id="Neck, back, lumbar pain"/>,
               <FormattedMessage id="Increased fatigability"/>,
               <FormattedMessage id="Poor sleep quality"/>,
               <FormattedMessage id="Scoliosis"/>,
               <FormattedMessage id="Joint pain"/>,
               <FormattedMessage id="Hyper and hypotension"/>,
               <FormattedMessage id="Digestive disorders"/>,
          ],
          
        },
        {
          title: <FormattedMessage id="It improves:"/>,
          items: [
               <FormattedMessage id="Work productivity"/>,
               <FormattedMessage id="Tissue regeneration"/>,
               <FormattedMessage id="The immune system, which is fortified"/>,
               <FormattedMessage id="Metabolism, which is normalized"/>,
               <FormattedMessage id="Disease prevention"/>,
               <FormattedMessage id="Sexual desire"/>,
               <FormattedMessage id="Posture"/>,
               <FormattedMessage id="Circulation throughout the body"/>,

          ],
        },
      ],
    },
    vietnamese: {
      title: <FormattedMessage id="Vietnamese"/>,
      shortDescription:
        <FormattedMessage id="Yumeiho therapy dan 2 (Vietnamese massage technique)"/>,
      description:
        <FormattedMessage id="Yumeiho therapy dan 2 (Vietnamese massage technique) This is a system of specially selected compressions, twists and stretches (based on martial arts techniques) aimed at deeply massaging muscles and ligaments, relieving stress from the whole body and increasing the joint range of motions."/>,
      images: [
        require("./media/vietnamese1.jpg"),
        require("./media/vietnamese2.jpg"),
        require("./media/vietnamese3.jpg"),
        require("./media/vietnamese4.jpg"),
      ],

      extraInfo: [
        {
          title:
            <FormattedMessage id="Applying these two techniques systematically and comprehensively (Yumeiho therapy dan 1,2), such problems are solved as:"/>,
          items: [
               <FormattedMessage id="Headaches"/>,
               <FormattedMessage id="Painful menstruation"/>,
               <FormattedMessage id="Neck, back, lumbar pain"/>,
               <FormattedMessage id="Increased fatigability"/>,
               <FormattedMessage id="Poor sleep quality"/>,
               <FormattedMessage id="Scoliosis"/>,
               <FormattedMessage id="Joint pain"/>,
               <FormattedMessage id="Hyper and hypotension"/>,
               <FormattedMessage id="Digestive disorders"/>,

          ],
        },
        {
          title: <FormattedMessage id="It improves:"/>,
          items: [
               <FormattedMessage id="Work productivity"/>,
               <FormattedMessage id="Tissue regeneration"/>,
               <FormattedMessage id="The immune system, which is fortified"/>,
               <FormattedMessage id="Metabolism, which is normalized"/>,
               <FormattedMessage id="Disease prevention"/>,
               <FormattedMessage id="Sexual desire"/>,
               <FormattedMessage id="Posture"/>,
               <FormattedMessage id="Circulation throughout the body"/>,

          ],
        },
      ],
    },
    relaxing: {
      title: <FormattedMessage id="Remedial & Relaxing"/>,
      shortDescription: <FormattedMessage id="Neck-collar area (remedial and relaxing massage)"/>,
      description:
        <FormattedMessage id="Neck-collar area massage. It is focused on the muscles around the neck, chest, and shoulder area."/>,
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
            <FormattedMessage id="Relaxes the muscles of the neck and collar area"/>,
            <FormattedMessage id="Improves blood circulation and metabolism in the cervical spine."/>,
            <FormattedMessage id="Accelerates the lymph drainage"/>,
            <FormattedMessage id="Improves the cerebral circulation"/>,
            <FormattedMessage id="Relieves pain in the head, neck, and back area"/>,
            <FormattedMessage id="Eliminates tight and stiff muscles"/>,
            <FormattedMessage id="Normalizes sleep"/>,
            <FormattedMessage id="Improves the nervous system function"/>,
          ],
        },
      ],
    },
    visceral: {
      title: <FormattedMessage id="Abdominal"/>,
      shortDescription: <FormattedMessage id="Visceral chiropractic (abdominal massage)"/>,
      description:
        <FormattedMessage id="Visceral chiropractic (abdominal massage) This is a massage technique for influencing internal organs through compression, pounding, kneading, effleurage to recover the correct organ positions and microcirculation around them. It helps to manage a wide range of organ dysfunctions throughout the body."/>,
      images: [
        require("./media/visceral(1).jpg"),
        require("./media/visceral(2).jpg"),
        require("./media/visceral(3).jpg"),
        require("./media/visceral(4).jpg"),
      ],

      extraInfo: [
        {
          title: <FormattedMessage id="Abdominal massage eliminates:"/>,
          items: [
             <FormattedMessage id="Gastrointestinal tract dysfunctions"/>,
             <FormattedMessage id="Kidney pathologies"/>,
             <FormattedMessage id="Reproductive system disorders in men and women"/>,
             <FormattedMessage id="Poor blood circulation"/>,
             <FormattedMessage id="Respiratory diseases"/>,
             <FormattedMessage id="Pancreatitis, the liver and gallbladder dysfunctions."/>,
          ],
        },
        {
          title: <FormattedMessage id="It improves:"/>,
          items: [
             <FormattedMessage id="The cardiovascular system function"/>,
             <FormattedMessage id="Metabolism"/>,
             <FormattedMessage id="Corrects overweight"/>,
             <FormattedMessage id="Psychoemotional state"/>,
             <FormattedMessage id="Catarrhal diseases prevention and immune system stimulation."/>,
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


 // console.log("activeMassage?.images", activeMassage?.images);

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
              marginBottom: 30
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

            <div style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 20 }}>
              {activeMassage?.description}
            </div>

            <div style={{paddingBottom: 20}}>
            <MasonryLayout images={activeMassage?.images! ?? []} />
            </div>

           

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
