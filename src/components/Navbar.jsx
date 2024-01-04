import styled from "@emotion/styled"
import { AppBar, InputBase, Toolbar, Typography,Box,Menu,MenuItem } from "@mui/material"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';



import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:"space-between",

})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "10px",
    width: "40%",
  }));

const Icons = styled(Box)(({theme})=>({
    display:"flex",
    alignItems: "center",
    gap: "20px",
    
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "10px",
   // [theme.breakpoints.up("sm")]: {
    //  display: "none",
   // },
  }));

const Navbar =()=>{
    const [open,setOpen] =useState(false)
    return(
        <AppBar position="sticky">
        <StyledToolbar>
        <Typography variant="h6" sx={{display:{xs:'none',sm:'block'}}}>social media</Typography>
        <FacebookOutlinedIcon sx={{display:{xs:'block',sm:'none'}}}/>
        <Search ><InputBase placeholder="search...."></InputBase></Search>
        <Icons>
        <Badge badgeContent={4} color="error">
           <MailIcon  sx={{margin:'7px'}} />
         </Badge>

         <Badge badgeContent={2} color="error">
           <NotificationsIcon  sx={{margin:"7px"}}/>
         </Badge>
         <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => setOpen(true)}
          />

        </Icons>
        <UserBox >
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography variant="span">John</Typography>
        </UserBox>
        </StyledToolbar>

        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
        </AppBar>
    )
}

export default Navbar