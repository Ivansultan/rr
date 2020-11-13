import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

containerContactsDiplomas: {
    marginTop: 80,
    marginBottom: 30,
    padding: 15,
  },

  containerContacts: {
    flexDirection: "row",
    display: "flex",
  },

  contactsAvatar: {
    maxWidth: 100,
  },

  contacts: {
    marginLeft: 10,
    marginRight: 10
  },

  contactsName: { 
      marginTop: 1 
  },

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  }
 

}));