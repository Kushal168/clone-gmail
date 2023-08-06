import React, { Suspense } from 'react'
import { useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Emails from '../components/Emails';
import SuspenseLoader from '../components/common/SuspenseLoader';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const Main = () => {

    const [openDrawer,setOpenDrawer] = useState(true);

    const toggleDrawer=()=>{
        setOpenDrawer(prevstate => !prevstate)
    }
  return (
    <>
      <Header toggleDrawer={toggleDrawer}></Header>
      <Box>
      <SideBar openDrawer={openDrawer}></SideBar>
      {/* <Emails openDrawer={openDrawer}></Emails> */}
    {/* sonethinf that is written in betwwen opening and closing tag is outlet child component */}

      <Suspense fallback={<SuspenseLoader/>}>
      <Outlet context={{ openDrawer }} />
     </Suspense>
    </Box >
    </> 
  )
}

export default Main;
