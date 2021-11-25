import React,{useContext,useEffect} from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { MyContext } from '../context/MyContextContainer'


    const NavigationTopContainer = styled.div`
   
     display:flex;
     justify-content: space-between;
     padding:10px 15px 5px 10px;
   
    `

export default function NavigationTop() {

    const { currentPlayer, setCurrentPlayer } = useContext(MyContext)
 

    // useEffect(() => {
    //    
    //   
    // }, [currentPlayer])

  
        
   
    return (
        <NavigationTopContainer>
            <MenuIcon /> 
            <span>{currentPlayer && currentPlayer.name}</span>
            <HelpOutlineOutlinedIcon/>
        </NavigationTopContainer>
    )
}
