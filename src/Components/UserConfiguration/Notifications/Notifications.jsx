import React from 'react'
import './Notifications.css'
import NavBar from '../../NavBar/NavBar'
import ArrowAndLogo from '../../ArrowAndLogo/ArrowAndLogo'
import ConfigurationBox from '../ConfigurationBox/ConfigurationBox'

export default function Notifications() {
    const info = {
        title: 'Notifications',
        list: {
            firstItem: 'Reminders',
            secondItem: 'Messages',
            thirdItem: 'News'
        }
    }
    return (
        <>
            <div className='ContainerConfigs'>
                <ArrowAndLogo />
                <ConfigurationBox info={info} />
            </div>
            <NavBar />
        </>
    )
}
