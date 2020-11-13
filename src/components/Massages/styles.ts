import { makeStyles } from "@material-ui/core";

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

    cardsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        maxHeight: "100%",
        flexWrap: "wrap",
    },

    card: {
        display: "flex",
        justifyContent: "space-around",
        width: 300,
        marginBottom: 30,
        minWidth: 275,
        margin: 5,
        cursor: "pointer"
    },

    modalTitle: { 
        justifyContent: "center", 
        display: "flex" 
    },

    modalDescription: { 
        paddingLeft: 10, 
        paddingRight: 10, 
        paddingBottom: 20, 
    },

    modalImages: {
        paddingBottom: 20
    },

    modalExtraInfo: { 
        paddingLeft: 10, 
        paddingRight: 10 
    },

  }));