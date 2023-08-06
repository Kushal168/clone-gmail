import React from 'react'
import { styled } from '@mui/material/styles';
import { Search as SearchIcon, Tune as TuneIcon } from '@mui/icons-material';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AppBar from '@mui/material/AppBar';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar'; 
import MenuIcon from '@mui/icons-material/Menu';
import { gmailLogo } from '../constants/constant';

const StyledAppBar= styled(AppBar)`
backgroundColor:  '#F5F5F5',
boxShadow: 'none'
`;

const SearchWrapper = styled(Box)`
    background: #EAF1FB;
    margin-left: 80px;
    border-radius: 8px;
    min-width: 690px;
    max-width: 720px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    & > div {
        width: 100%
    }
`
const OptionsWrapper = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: end;
    & > svg {
        margin-left: 20px;
    }
`

const Header = ({toggleDrawer}) => {
  return (
    
    <StyledAppBar position="static" style={{backgroundColor:'#F5F5F5'}}>
      <Toolbar>
       
      <MenuIcon color="action" onClick={toggleDrawer} style={{cursor:'pointer'}}/>  
      <img src={gmailLogo} alt="Logo" style={{width: 110, marginLeft:15 }} />
      <SearchWrapper>
       <SearchIcon color="action"/>
      <InputBase placeholder='Search mail'/>
       <TuneIcon color="action"/>
       </SearchWrapper>
       
       <OptionsWrapper>
       <HelpOutlineOutlinedIcon color="action"/>
       <SettingsOutlinedIcon color="action"/>
       <AppsIcon color="action" />
       <AccountCircleOutlinedIcon color="action" />
       </OptionsWrapper>
      </Toolbar>
      </StyledAppBar>
    
   
  )
}

export default Header
 