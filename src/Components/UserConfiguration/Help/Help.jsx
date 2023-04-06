import React from 'react'
import './Help.css'
import ArrowAndLogo from '../../ArrowAndLogo/ArrowAndLogo'
import NavBar from '../../NavBar/NavBar'
import ConfigurationBox from '../ConfigurationBox/ConfigurationBox'

export default function Help() {
    const info = {
        title: 'Help',
        list: {
            firstItem: 'My plants',
            secondItem: 'Forum',
            thirdItem: 'Searcher'
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
