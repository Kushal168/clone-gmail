
import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { useOutletContext, useLocation } from 'react-router-dom';
import { emptyProfilePic } from '../constants/constant';
import { ArrowBack, Delete } from '@mui/icons-material';
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api_urls';
// import { useOutletContext } from 'react-router-dom';

const IconWrapper = styled(Box)({
    padding: 15
});

const Subject = styled(Typography)({
    fontSize: 22,
    margin: '10px 0 20px 75px',
    display: 'flex'
})

const Indicator = styled(Typography)({

    fontSize: '12px !important',
    background: '#ddd',
    color: '#222',
    borderRadius: 4,
    marginLeft: 6,
    padding: '2px 4px',
    alignelf: 'center',
})

const Image = styled('img')({
    borderRadius: '50%',
    width: 40,
    height: 40,
    margin: '5px 10px 0 10px',
    backgroundColor: '#cccccc'
});

const Container = styled(Box)({
    marginLeft: 15,
    width: '100%',
    '& > div': {
        display: 'flex',
        '& > p > span': {
            fontSize: 12,
            color: '#5E5E5E'
        }
    }
});

const Date = styled(Typography)({
    margin: '0 50px 0 auto',
    fontSize: 12,
    color: '#5E5E5E'
})

const ViewEmail = () => {

    const { openDrawer } = useOutletContext();
    
    //as second parameter in usenavigate in Email there is a object with state as a kry and in this key there is another object having key as email , so we use here destructuring of obejct.
    const { state } = useLocation();
    const { email } = state;

    const moveEmailsToBin = useApi(API_URLS.moveEmailsToBin);

    const deleteEmails =()=>{ 
        moveEmailsToBin.call([email._id])
        window.history.back();
    }

    return (
        
        <Box style={openDrawer ? { marginLeft: 250, width: 'calc(100%-250px)' } : { width: '100%' } }>
            <IconWrapper>
                <ArrowBack fontSize='small' color="action" onClick={() => window.history.back() } />
                <Delete fontSize='small' color="action" style={{ marginLeft: 40 }} onClick={()=>deleteEmails()}/>
            </IconWrapper>
    <Subject>{email.subject} <Indicator component="span">Inbox</Indicator></Subject>
            <Box style={{ display: 'flex' }}>
                <Image src={emptyProfilePic} alt="profile" />
                <Container>
                    <Box>
                        <Typography style={{ marginTop: 10 }}>    
                            {email.to.split('@')[0]} 
                            <Box component="span">&nbsp;&#60;{email.to}&#62;</Box>
                        </Typography>
                        <Date>
                            {(new window.Date(email.date)).getDate()}&nbsp;
                            {(new window.Date(email.date)).toLocaleString('default', { month: 'long' })}&nbsp;
                            {(new window.Date(email.date)).getFullYear()} 
                        </Date>
                    </Box>
                    <Typography style={{ marginTop: 20 }}>{email.body}</Typography>
                </Container>
               </Box> 
              </Box>
        //  <div style={openDrawer ? { marginLeft: 250, width: '100%' } : { width: '100%' } }>Hello from view mail</div>
         
    );
};

export default ViewEmail;