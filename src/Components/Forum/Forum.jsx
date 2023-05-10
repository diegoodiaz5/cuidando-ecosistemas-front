import React, { useEffect, useState } from 'react';
import "./Forum.css";
import NavBar from '../NavBar/NavBar';
import ArrowAndLogo from '../ArrowAndLogo/ArrowAndLogo';
import IndividualPost from './IndividualPost/IndividualPost';

export default function Forum() {

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState({});

    useEffect(() => {
        const getAllPlants = async () => {
            try {
                const res = await fetch('http://localhost:3001/allPlants', {
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                const resJson = await res.json();
                if (!res.ok) {
                    console.log("Error")
                }
                setPosts(resJson);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        getAllPlants();
    }, [])

    return (
        <section id='forum'>
            <div id='subConteinerForum'>
                <ArrowAndLogo />
                <div id='titleForum'>Forum</div>
                <div id='shareExperience'>Share your experience here</div>
                <section id='postsConteiner'>
                    {!loading &&
                        posts.map((plant) => (
                            <IndividualPost plant={plant} key={Math.random()} />
                        ))
                    }

                </section>
            </div>
            <NavBar />
        </section>
    )
}
