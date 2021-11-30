import React from 'react'
import {Link } from 'react-router-dom'

import Button from '@mui/material/Button';

export default function StartPage() {
    return (
        <div>
            <Link to={process.env.PUBLIC_URL+"/drinking-game/game"}> <Button variant="contained">Start Game</Button></Link>
        </div>
    )
}
