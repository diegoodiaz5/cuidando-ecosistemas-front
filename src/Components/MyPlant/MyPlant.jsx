import React, { useEffect, useState } from "react";
import "./MyPlant.css";
import NavBar from "../NavBar/NavBar";
import IndividualPlant from "./IndividualPlant/IndividualPlant"
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function MyPlant() {

  const auth = getAuth();
  const [myPlantsList, setMyPlantsList] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const getPlants = async () => {
          const response = await fetch('http://localhost:3001/myPlants', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ uid })
          });
          const responseJson = await response.json();
          const plants = responseJson.plants;
          setMyPlantsList(plants);
          setLoading(false);
        };
        getPlants();
      }
    });
  }, [auth]);

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
          {loading ? <div id="loadingDiv">
            <img src={require('../Images/greyFlower.jpg')} alt="greyFlower" className="greyFlower" />
            <img src={require('../Images/greyFlower.jpg')} alt="greyFlower" className="greyFlower" />
            <img src={require('../Images/greyFlower.jpg')} alt="greyFlower" className="greyFlower" />
            <img src={require('../Images/greyFlower.jpg')} alt="greyFlower" className="greyFlower" />
            <img src={require('../Images/greyFlower.jpg')} alt="greyFlower" className="greyFlower" />
            <img src={require('../Images/greyFlower.jpg')} alt="greyFlower" className="greyFlower" />
            <img src={require('../Images/greyFlower.jpg')} alt="greyFlower" className="greyFlower" />
            <img src={require('../Images/greyFlower.jpg')} alt="greyFlower" className="greyFlower" />
          </div> :

            <div id="plantsContainer">
              {myPlantsList.map((plant) => (
                <IndividualPlant plant={plant} key={Math.random()} />
              ))}
            </div>
          }


        </section>
      </div >
      <NavBar />
    </>
  );
}
