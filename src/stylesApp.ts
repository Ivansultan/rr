import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

headLineContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

logo: {
    marginLeft: 25,
  },

titleContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginRight: 25,
  },

title: { 
    textAlign: "center", 
    marginTop: 7, 
    marginBottom: 7, 
  },

  switcher: {
    display: "flex", 
    flexDirection: "row"
  },

delimiter: { 
    marginBottom: 30, 
    border: "1px dotted #f0f5f5" 
  },

}));