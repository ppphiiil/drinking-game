import React from 'react'
import {NavLink } from 'react-router-dom'

import Button from '@mui/material/Button';

console.log(" startpage process.env.PUBLIC_URL",process.env.PUBLIC_URL)

export default function StartPage() {

    return (
        <div>
            <NavLink to={process.env.PUBLIC_URL+"/game"}> <Button variant="contained">Start Game</Button></NavLink>
        </div>
    )
}
