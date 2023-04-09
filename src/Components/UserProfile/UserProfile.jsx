import React from 'react'
import './UserProfile.css'
import NavBar from '../NavBar/NavBar'
import ArrowAndLogo from '../ArrowAndLogo/ArrowAndLogo'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';

export default function UserProfile() {

  const [user, setUser] = useState({});

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {

      setUser(user);
    } else {
      console.log(`User not loged`)
    }
  });

  return (
    <>
      <div id='userProfileContainer'>
        <ArrowAndLogo />
        <div id='firstContainerUserProfile'>
          <img id='profilePicture' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profilePicture" />
          <div id='informationUser'>
            <h3>Username</h3>
            <p>Information about the user </p>
          </div>
        </div>
        <ul id='ulUserProfile'>
          <li>
            <p>Plants</p>
            0
          </li>
          <li>
            <p>Comments</p>
            0
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

    </>
  )
}
