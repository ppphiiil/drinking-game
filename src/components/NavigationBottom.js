import React,{useContext,createContext} from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import {MyContext} from '../context/MyContextContainer';


/**
 * MUI
 * 
 */
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

//Icons
import RestoreIcon from '@mui/icons-material/Restore';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';



    const NavigationButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
  `


export default function NavigationBottom() {
    const { page,setPage } = useContext(MyContext);
     const { skip, setSkip } = useContext(MyContext)
    // const [value, setValue] = React.useState( 2 );

    return (
        <NavigationButtonContainer>
            <Box sx={ { width: 375 } }>
                <BottomNavigation
                    showLabels
                    value={ page }
                    onChange={ ( event, newValue ) => {
                        setPage( newValue );
                    } }
                >
                  <BottomNavigationAction label="Game" icon={ <DashboardIcon /> } />
                    <BottomNavigationAction label="History" icon={ <RestoreIcon /> } />
                    <BottomNavigationAction label="Settings" icon={ <SettingsIcon /> } />
                    
                    <BottomNavigationAction label="Skip" onClick={()=>{setSkip(!skip)}} icon={ <SkipNextIcon /> } />
                </BottomNavigation>
            </Box>
        </NavigationButtonContainer>
    )
}
