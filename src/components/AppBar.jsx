import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBarMUI from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PropTypes from "prop-types"
import { Divider, Dropdown } from 'antd';
import Button from './Button'
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const AppBar = props => {
    const { hasMail, hasNotification, hasAccount } = props
    const menuId = 'primary-search-account-menu';
    const notification = hasNotification => {
        const items = hasNotification.data
        return (Object.keys(hasNotification).length > 0 ? (
            <Dropdown
                menu={{ items }}
                trigger={['click']}

            >
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={hasNotification.quantity} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Dropdown>
        ) : "")
    }
    const mail = hasMail => {
        const items = hasMail.data
        return (Object.keys(hasMail).length > 0 ? (
            <Dropdown
                menu={{ items }}
                trigger={['click']}

            >
                <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={(e) => e.preventDefault()}>
                    <Badge badgeContent={hasMail.quantity} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
            </Dropdown>) : "")
    }


    const account = hasAccount => {
        const items = [
            {
                label: <Button type='link' onClick={hasAccount.handleProfile}>Profile</Button>,
                key: '0',
            },
            {
                label: <Button type='link' onClick={hasAccount.handleMyAccount}>My account</Button>,
                key: '2',
            },
        ]
        return (Object.keys(hasAccount).length > 0 ? (
            <Dropdown
                menu={
                    { items }
                }

            >
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
            </Dropdown>) : "")
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBarMUI position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {notification(hasNotification)}
                        {mail(hasMail)}
                        {account(hasAccount)}
                    </Box>
                </Toolbar>
            </AppBarMUI>

        </Box>
    );
}
AppBar.propTypes = {
    hasMail: PropTypes.object,
    hasNotification: PropTypes.object,
    hasAccount: PropTypes.object,
}
AppBar.defaultProps = {
    hasMail: {},
    hasNotification: {},
    hasAccount: {}
}
export default AppBar
