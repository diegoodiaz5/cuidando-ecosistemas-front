import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./MyPlant.css";
import NavBar from "../NavBar/NavBar";
import IndividualPlant from "./IndividualPlant/IndividualPlant"

export default function MyPlant() {

  const [myPlantsList, setMyPlantsList] = useState({});
  const [loading, setLoading] = useState(true);
  const [userUid, setUserUid] = useState('');

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setUserUid(uid);
    } else {
      console.log(`User not loged`)
    }
  });

  useEffect(() => {
    const getPlants = async () => {
      const data = {
        uid: userUid
      }
      const response = await fetch('http://localhost:3001/getPlants', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseJson = await response.json();
      setMyPlantsList(responseJson);
      setLoading(false);
    };
    getPlants();
  });

  return (
    <>
      <div id="myplantsContainer">
        <div id="myplantsTitle">
          <span>
            <h2>
              My Plants </h2>
            <img id="florist" src={require('../Images/florist.png')} alt="florist" />
          </span>
          <img src={require('../Images/More.png')} alt="more" />
        </div>
        <section id="whiteContainer">
          {loading ? <img src={require('../Images/loading.gif')} alt="loadingGif" /> :

            <div id="plantsContainer">
              {myPlantsList.map((plant) => (
                <IndividualPlant plant={plant} />
              ))}
            </div>
          }


        </section>
      </div >
      <NavBar />
    </>
  );
}
