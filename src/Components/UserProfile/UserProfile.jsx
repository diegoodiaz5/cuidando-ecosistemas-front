import './UserProfile.css'
import NavBar from '../NavBar/NavBar'
import ArrowAndLogo from '../ArrowAndLogo/ArrowAndLogo'
import React, { useEffect } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';

export default function UserProfile() {

  const auth = getAuth();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let uid;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        uid = user.uid;
        const getUserInfo = async () => {
          const res = await fetch(`http://localhost:3001/userId/${uid}`, {
            headers: {
              "Content-Type": "application/json"
            }
          });
          const resJson = await res.json();
          setUserData(resJson);
          setLoading(false);
        }
        getUserInfo();
      }

    });
  })

  return (
    <>
      {loading ? <div>Hola</div> : <section id='userProfileSection'>
        <div id='userProfileContainer'>
          <ArrowAndLogo />
          <div id='firstContainerUserProfile'>
            <img id='profilePicture' src={require("../Images/avatarDefault.webp")} alt="profilePicture" />
            <div id='informationUser'>
              <h3>{userData.information.username}</h3>
              <p>Information about the user </p>
            </div>
          </div>
          <ul id='ulUserProfile'>
            <li>
              <p>Plants</p>
              {userData.information.posts}
            </li>
            <li>
              <p>Comments</p>
              {userData.information.comments}
            </li>
            <li>
              <p>Followers</p>
              0
            </li>
            <li>
              <p>Following</p>
              0
            </li>
          </ul>


        </div>
        <h1>User posts here</h1>
        <NavBar />
      </section>}
    </>
  )
}
