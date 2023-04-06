import React from 'react'
import './TermsAndConditions.css'
import NavBar from '../../NavBar/NavBar';
import ArrowAndLogo from '../../ArrowAndLogo/ArrowAndLogo';

export default function TermsAndConditions() {
    return (
        <>
            <section id='sectionTerms'>
                <ArrowAndLogo />
                <div id='whiteContainerTerms'>
                    <h3 id='titleTermsAndConditions'>Terms and Conditions</h3>
                    <div id='greenContainerTerms'>
                        <span>
                            <p id='pTerms'>
                                We are Cuidando Ecosistemas INC, a company registered in Virginia,
                                United States at Wilshire Boulevard, LA, VA 5555. Our VAT number si
                                GB999 9999 999 999.
                                <br />
                                <br />
                                We operate the mobile application Cuidando Ecosistemas (the "App"), as
                                well as any other related products and services that refer or link to
                                these legal terms (the "Legal Terms").
                                <br />
                                <br />
                                You can contac us by phone at 1-800-555-555, email at
                                cuidandoecosistemas@hotmail.com, or by mail to Wilshire Boulevard, LA,
                                VA 5555, United States.
                                <br />
                                <br />
                                These Legal Terms constitute a legally binding agreement made between you, whether personally or
                                on behalf of an entity ("you"), and Cuidando Ecosistemas INC,
                                concerning your access to and use of the Services.
                                You agree that by accessing the Services, you have read, understood,
                                and agreed to be bound by all of these Legal Terms.
                                <br />
                                <br />
                                <b>
                                    IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBIDT
                                    FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY
                                </b>
                            </p>

                        </span>
                    </div>
                </div>
            </section >
            <NavBar />
        </>
    )
}
