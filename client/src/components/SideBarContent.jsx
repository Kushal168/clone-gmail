import React from 'react';
import { useState } from 'react';
// import styled from 'styled-components';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { Box } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { SIDEBAR_DATA } from '../config/sidebar.config';
import ComposeMail from './ComposeMail';
import { NavLink, useParams } from 'react-router-dom';
import { routes } from '../routes/routes';

// const ComposeButton = styled(Button)`
//     background: #c2e7ff;
//     color: #001d35;
//     border-radius: 16px;
//     padding: 15px;
//     min-width: 140px;
//     text-transform: none;
// `


const ComposeButton = styled(Button)({
    background: '#c2e7ff',
    color: '#001d35',
    borderRadius: '16px',
    padding: '15px',
    minWidth: '140px',
    textTransform: 'none',
})
const Container = styled(Box)`
    padding: 8px;
    & > ul {
        padding: 10px 0 0 5px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        & > a {
            text-decoration: none;
            color: inherit;
        }
    },
        & > ul > a > li > svg {
            margin-right: 20px;
        }
`

const SideBarContent = () => {
    const [openDrawer,setOpenDrawer] = useState(false);

    const {type}= useParams();

    const onComposeClick = () => {
        setOpenDrawer(true);
    }
  return (
    <Container>
    <ComposeButton variant="contained" onClick={() => onComposeClick()}>
    <CreateOutlinedIcon/>Compose
    </ComposeButton> 
    
    <List>
        {
            //here we take params from url and highlight the part from sidebar which is clicked like inbox, starred , bin etc
            SIDEBAR_DATA.map(data=>
                //here navlink is used whenever we clicked any content from side bar link inbox ,starred, bin we change the url and highlight it 
                <NavLink key ={data.name} to={`${routes.emails.path}/${data.name}`}> 
             <ListItem  style={ type === data.name.toLowerCase() ? {
                backgroundColor: '#d3e3fd',
                borderRadius: '0 16px 16px 0'
            } : {}}><data.icon fontSize='small'/>{data.title}
            </ListItem>
            </NavLink>
         )
        }
    </List>
    <ComposeMail  open={openDrawer} setOpenDrawer={setOpenDrawer} />
  </Container>
  )
}

export default SideBarContent
