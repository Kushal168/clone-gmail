import React from 'react'

// import styled from 'styled-components';
import Drawer from '@mui/material/Drawer';
import SideBarContent from './SideBarContent';


const SideBar = ({openDrawer}) => {
  return (
   <Drawer
   anchor = 'left'
   open = {openDrawer}
   hideBackdrop = {true}
  ModalProps={{
    keepMounted:true
  }}
  variant='persistent'
  sx={{
    '& .MuiDrawer-paper': { 
        width: 250,
        borderRight: 'none',
        background: '#f5F5F5',
        marginTop: '64px',
        height: 'calc(100vh - 64px)'
    },
}}

   >
<SideBarContent/>
    
   </Drawer>
  )
}

export default SideBar
