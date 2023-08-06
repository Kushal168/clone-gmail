// import React from 'react'
import { Box, Checkbox, Typography } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from "react-router-dom";
import {routes} from '../routes/routes'
import styled from '@emotion/styled';
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api_urls';

const Wrapper = styled(Box)({

    padding:' 0 0 0 10px',
    background: '#f2f6fc',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center ',
    ' & > div': {
        display: 'flex',
        width:' 100%',
       ' & > div > p':{
        fontSize: '14px',
        }
    }
})


const Indicator = styled(Typography)({
    fontSize: '12px',
    background: '#ddd',
    color: '#222',
    borderRadius: '4px',
    marginRight: '6px',
    padding: '0 4px',
});

const Date = styled(Typography)({
    marginLeft: 'auto',
    marginRight: 20,
    fontSize: 12,
    color: '#5F6368'
});


const Email = ({email,selectedEmails,setStarredEmail,setSelectedEmails}) => {
    const toggleStarredEmailService  = useApi(API_URLS.toggleStarredMails);
    
    const navigate = useNavigate();

    const toggleStarredEmail = () => {
        toggleStarredEmailService.call({ id: email._id, value: !email.starred });
        setStarredEmail(prevState => !prevState);
    }

    const onValueChange = () => {
        if (selectedEmails.includes(email._id)) {
            setSelectedEmails(prevState => prevState.filter(id => id !== email._id));
        } else {
            setSelectedEmails(prevState => [...prevState, email._id]);
        } 
    }
    
  return (
   
    <Wrapper>
        <Checkbox 
        size="small" 
        checked = {selectedEmails.includes(email._id)}
        onChange={()=>onValueChange()}
        
        />
           { 
                email.starred ? 
                    <StarIcon fontSize="small" style={{ marginRight: 10, color:'#FFF200'}}  onClick={() => toggleStarredEmail()} />
                : 
                    <StarBorderIcon fontSize="small" style={{ marginRight: 10 }} onClick={() => toggleStarredEmail()} /> 
            } 
        {/* <StarBorderIcon  fontSize="small" style={{ marginRight: 10 }}/> */}
        <Box  onClick={() => navigate(routes.view.path, { state: { email: email }})}>

        <Typography style={{width:200, overflow: 'hidden'}} >{email.name}</Typography>
        <Indicator>Inbox</Indicator>
        <Typography>{email.subject} {email.body && '-'} {email.body}</Typography>

        <Date>
            {(new window.Date(email.date)).getDate()}&nbsp;
            {(new window.Date(email.date)).toLocaleString('default', { month: 'long' })}
        </Date>
        </Box>
    </Wrapper>
  )
}
export default Email;
