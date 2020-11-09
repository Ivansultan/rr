import { Modal } from "@material-ui/core";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import avatar from "../images/contacts.png"
import { Masonry, Tile } from "./MasonryLayout/MasonryLayout";

let brakePoints = [350, 500, 750];

function Contacts() {


 // const [state, setState] = useState(undefined)

  // const dataStateAndActions = useState(undefined)
  // console.log("dataStateAndActions", dataStateAndActions)
  // dataStateAndActions[0]
  // dataStateAndActions[1]


  const [state, handleState] = useState({isModalVisible: false, activeImage: ""});

 const handleDiploma = (image: string) => {
  handleState({isModalVisible: true, activeImage: image})
 }
 
 const closeModal = () => {
  handleState({isModalVisible: false, activeImage: ""})

 }

  console.log("state", state)


  //console.log("setCount", setCount)
  // return (
    
    // <div>
    //   <p>Вы кликнули {count} раз(а)</p>
    //   <button onClick={() => setCount(count + 1)}>
    //     Нажми на меня
    //   </button>
    // </div>
  
  // );



    const diplomas = [
      require("./Massages/media/diploma(1).jpg"),
      require("./Massages/media/diploma(2).jpg"),
      require("./Massages/media/diploma(3).jpg"),
      require("./Massages/media/diploma(4).jpg"),
    ];

    return (
      <div
        style={{
         // backgroundColor: "gray",
          marginTop: 80,
          marginBottom: 30,
          padding: 15,
        }}
      >
        <div
          style={{
            flexDirection: "row",
            display: "flex",
          }}
        >
          <div
            style={{
              height: 100,
            }}
          >
            <img
              style={{
                maxWidth: 100,
              }}
              src={avatar}
              alt="Avatar"
            />
          </div>
  
          <div
            style={{
              marginLeft: 10,
              marginRight: 10
            }}
          >
            <h1 style={{ marginTop: 1 }}>
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
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "transparent",
         // cursor: "pointer"
        }}
       // aria-labelledby="transition-modal-title"
       // aria-describedby="transition-modal-description"
       // className={classes.modal}
        // open={open}
        open={state.isModalVisible}
         onClose={closeModal}
        closeAfterTransition
        // BackdropComponent={Backdrop}
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