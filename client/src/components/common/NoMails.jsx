import { Box, Typography, styled, Divider } from '@mui/material';

const Component = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
    opacity: '1'
});
//some styling
 
const StyledDivider = styled(Divider)({
    width: '100%',
    marginTop: 10
})

const NoMails = ({ message }) => {
    return (
        <Component>
            <Typography>{message.heading}</Typography>
            <Typography>{message.subHeading}</Typography>
            <StyledDivider />
        </Component>
    )
}

export default NoMails;
