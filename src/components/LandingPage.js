// render two buttons login form(renders loginform on click) and sign up form(renders signup form on click)
// render two buttons login form(renders loginform on click) and sign up form(renders signup form on click)
import React from 'react';
import styled from 'styled-components'
import {NavLink} from 'react-router-dom';
import { Container, Button, Figure } from 'react-bootstrap'

const Styles = styled.div`
    .title {
        "Lucida Console", "Courier New", monospace;
        font-size: 50px;
        padding-bottom: 20px;
        padding-right: 40px;
    }

    // @media (prefers-reduced-motion: no-preference) {
    //     .logo {
    //         animation: App-logo-spin infinite 15s linear;
    //     }
    // }
`
//d-flex justify-content-center align-items-center

function LandingPage() {
    const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=bb70477ae18942578967a97b35b07207&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

    return (
        <div>
        <Styles>   
            <Figure>
                <Figure.Image
                    className="logo"
                    width="440"
                    height="280"
                    alt=""
                    src="Q1.png"
                    style={{ justifyContent: "center", paddingRight: 50}}  />
            </Figure>
            <h1 className="title">Q Music Player</h1> 
        </Styles> 
        <Button 
            variant="Success" 
            style={{ padding: 40, marginRight: 40 }}
        >
            <a className='btn btn-success btn-lg' href={AUTH_URL}>
                Login To Listen
            </a>
        </Button>
        </div>
    )
}

export default LandingPage
