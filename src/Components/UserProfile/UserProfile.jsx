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
      {!loading &&
        <>
          <section id='userProfileSection'>
            <div id='userProfileContainer'>
              <ArrowAndLogo />
              <h1 id='editProfileTitle'>Edit profile</h1>
              <div id='firstContainerUserProfile'>
                <div id='photoContainerProfile'>
                  <img src={userData.information.photo} alt='profilePhoto' id='photoProfile' />
                  <p>Edit photo</p>
                </div>
                <div className="usernameContainerProfile">
                  <p className='titlesProfile'>Username</p>
                  <p className='userParagraphInfo'>{userData.information.username}</p>
                </div>
                <div className="usernameContainerProfile">
                  <p className='titlesProfile'>Email</p>
                  <p className='userParagraphInfo'>Aca iria el email</p>
                </div>
                <div className="usernameContainerProfile">
                  <p className='titlesProfile'>Description</p>
                  {userData.information.description !== '' ?
                    <p className='userParagraphInfo'>{userData.information.description}</p> :
                    <p className='userParagraphInfo'>Type something about you</p>}
                </div>

              </div>

              <h1 id='statisticsTitle'>Statistics</h1>
              <section id='statisticsSection'>
                <p>Posts: {userData.information.posts}</p>
                <p>Comments: {userData.information.comments}</p>
                <p>Registered since: </p>
              </section>
            </div>
          </section>
          <NavBar />
        </>
      }</>
  )
}
