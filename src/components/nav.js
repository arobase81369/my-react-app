 import { Outlet, Link} from "react-router-dom";
 import { Menu, NoEncryption } from "@mui/icons-material";
 import { MenuItem } from "@mui/material";
 import Box from '@mui/material/Box';

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

const Nav = () => {
    
    return <>
    <Box
      sx={{
        display: 'flex',
        backgroundColor: '#f9f9f9',
        flexWrap: 'wrap',
        justifyContent: 'center',
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      <MenuItem>
<Link to="/" style={{ textDecoration:'none'}}>Home</Link>
</MenuItem>
<MenuItem>
<Link to="/about" style={{ textDecoration:'none'}}>About</Link>
</MenuItem>
<MenuItem>
<Link to="/products/" style={{ textDecoration:'none'}}>Products</Link>
</MenuItem>
<MenuItem>
 <Link to="/extra" style={{ textDecoration:'none'}}>Extra</Link>
</MenuItem>
    </Box>

    <Outlet />
    </>
}

export default Nav;