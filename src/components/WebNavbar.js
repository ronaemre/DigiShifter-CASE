import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const WebNavbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        DIGISHIFTER
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        DIGISHIFTER
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>


                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default WebNavbar;
