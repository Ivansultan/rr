import { Modal } from "@material-ui/core";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import avatar from "./Diplomas/contacts.png"
import { Masonry, Tile } from "../MasonryLayout/MasonryLayout";
import { useStyles } from "./styles";


let brakePoints = [350, 500, 750];

function Contacts() {

 const [state, handleState] = useState({isModalVisible: false, activeImage: ""});

 const handleDiploma = (image: string) => {
  handleState({isModalVisible: true, activeImage: image})
 }
 
 const closeModal = () => {
  handleState({isModalVisible: false, activeImage: ""})

 }

    const diplomas = [
      require("./Diplomas/diploma(1).jpg"),
      require("./Diplomas/diploma(2).jpg"),
      require("./Diplomas/diploma(3).jpg"),
      require("./Diplomas/diploma(4).jpg"),
    ];

    const classes = useStyles();

    return (
      <div
        className={classes.containerContactsDiplomas}
      >
        <div
          className={classes.containerContacts}
        >
          <div>
            <img
              className={classes.contactsAvatar}
              src={avatar}
              alt="Avatar"
            />
          </div>
  
          <div
            className={classes.contacts}
          >
            <h1 className={classes.contactsName}>
              <FormattedMessage id="Evgeny Soltynchuk "/>
              </h1>
            <h3>Email: bigmavr5@gmail.com</h3>
            <h3>
              <FormattedMessage id="Phone: +380931104435; +380661181608;"/>
              </h3>
          </div>
        </div>
  
        
        <div>
         
           <Masonry cardStyle={{cursor: "pointer"}} brakePoints={brakePoints}>
             {diplomas.map((image, id) => {
              return(
                <div
                  onClick={() => handleDiploma(image)}
                >
                  <Tile src={image} />
                </div>
              )
  
              })}
           </Masonry>
        </div>
        <Modal
          className={classes.modal}
       
        open={state.isModalVisible}
         onClose={closeModal}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div onClick={closeModal}>
        <Tile src={state.activeImage} />
         
        </div>
      </Modal>

      </div>
    );
  }
 
export default Contacts