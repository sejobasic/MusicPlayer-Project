//parent container of most of the the functioning app
import React, {useEffect, useState} from 'react'
import NavBar from './NavBar'
import Player from './Player'
import useAuth from './useAuth'
import {Container} from 'react-bootstrap'
// import Search from './Search'


function Home({code}) {
    const accessToken = useAuth(code)
    

    return (
        <Container>
            <div>
                <NavBar  fixed="top"/>
                <Player accessToken={accessToken} />
                {/* <Search /> */}
            </div> 
        </Container>
        
    )
}

export default Home
