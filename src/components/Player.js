import React, {useEffect, useState} from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'



function Player({accessToken, trackUri}) {
    const [play, setPlay] = useState(false)

    useEffect(() => setPlay(true), [trackUri])

// if we dont have an access token we dont want to render a player
    if(!accessToken) return null
    return (
            <SpotifyPlayer 
                token={accessToken}
                showSaveIcon
                callback={state => {
                    if(!state.isPlaying) setPlay(false)
                }}
                play={play}
                styles={{
                    activeColor: '#fff',
                    bgColor: 'purple',
                    color: '#fff',
                    loaderColor: '#fff',
                    sliderColor: '#1cb954',
                    trackArtistColor: '#ccc',
                    trackNameColor: '#fff',
                  }}
// Here we are checking if we have a song to play, we pass it into the trackUri array otherwise leave it empty if we dont have tracks to play
                uris={trackUri ? [trackUri] : []}
                
            />
    )
}

export default Player
