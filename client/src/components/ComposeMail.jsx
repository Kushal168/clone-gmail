import React from 'react'
import { useState } from 'react';
// import Dialog from '@mui/material/Dialog';
// import Typography from '@mui/material/Typography';
import { Box,InputBase,Typography,Dialog,TextField,Button} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import styled from '@emotion/styled';
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api_urls';

const dialogStyle = {
    height: '90%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0',
}
const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    background: #f2f6fc;
    & > p {
        font-size: 14px;
        font-weight: 500;
    }
`;
const RecipientWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    & > div {
        font-size: 14px;
        border-bottom: 1px solid #F5F5F5;
        margin-top: 10px;
    }
`;
const Footer = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    align-items: center;
`;
const SendButton = styled(Button)`
    background: #0B57D0;
    color: #fff;
    font-weight: 500;
    text-transform: none;
    border-radius: 18px;
    width: 100px;
`

const ComposeMail = ({open,setOpenDrawer}) => {

  const [data, setData] = useState({});
  const sentEmailService = useApi(API_URLS.saveSentEmails);
  const saveDraftService = useApi(API_URLS.saveDraftEmails);
  

  const config = {
    Host : "smtp.elasticemail.com",
    // Username : process.env.REACT_APP_USERNAME,
    // Password : process.env.REACT_APP_PASSWORD,
    Username : 'kushalgoyal168@gmail.com',
    Password : '7CE02B7004B1B0458CC08BDB63A15CDA54E2',
    Port : 2525,
}

const onValueChange = (e) => {
  // console.log(e.target.value); 
   
  // console.log({ ...data, [e.target.name]: e.target.value })
  setData({ ...data, [e.target.name]: e.target.value })
  // console.log(data);
}

  const closeComposeMail = (e) => {
    e.preventDefault();
    const payload = {
      to : data.to,
      from : "kushalgoyal168@gmail.com",
      subject : data.subject,
      body : data.body,
      date: new Date(),
      image: '',
      name: 'Code for Interview',
      starred: false,
      type: 'drafts'
  }
  saveDraftService.call(payload);
  if (!saveDraftService.error) {
    setOpenDrawer(false);
    setData({});
} else {

  }
}

  const sendEmail = (e) => {
    e.preventDefault();
    if(window.Email){
      window.Email.send({
        ...config,
        To : data.to,
        From : "kushalgoyal168@gmail.com",
        Subject : data.subject,
        Body : data.body
      }).then(
      message => alert(message)

     );
    }
    const payload = {
      to : data.to,
      from : "kushalgoyal168@gmail.com",
      subject : data.subject,
      body : data.body,
      date: new Date(),
      image: '',
      name: 'Code for Interview',
      starred: false,
      type: 'sent'
  }
  sentEmailService.call(payload);
  if (!sentEmailService.error) {
    setOpenDrawer(false);
    setData({});
} else {

}
    setOpenDrawer(false)
  }
  return (
    <Dialog
    open={open}
    PaperProps={{ sx: dialogStyle }}
    // onClose={handleClose}
    >
      <Header>
       <Typography>New message</Typography>
       <CloseIcon fontSize="small" onClick={(e) => closeComposeMail(e)} />
       </Header>

       <RecipientWrapper>
       {/* <InputBase  placeholder='Recipients' name="to" onChange={(e) => onValueChange(e)} value={data.to}/>
       <InputBase placeholder='Subject' name="subject" onChange={(e) => onValueChange(e)} value={data.subject}/> */}
       <InputBase  placeholder='Recipients' name="to" onChange={(e) => onValueChange(e)} />
       <InputBase placeholder='Subject' name="subject" onChange={(e) => onValueChange(e)} />
       </RecipientWrapper>

       <TextField 
                multiline
                rows={18 }
                sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
                name="body"
                onChange={(e) => onValueChange(e)}
                // value={data.body}
            />
          
          <Footer>
                <SendButton onClick={(e) => sendEmail(e)}>Send</SendButton>
                <DeleteOutlineOutlinedIcon onClick={() => setOpenDrawer(false)} />
            </Footer>


    </Dialog>
  )
}

// export default ComposeMail;
export default ComposeMail;
