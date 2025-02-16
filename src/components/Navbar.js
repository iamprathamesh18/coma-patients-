import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box, Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Menu as MenuIcon, AccountCircle } from "@mui/icons-material";
import { motion } from "framer-motion";

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = (open) => () => {
        setMobileOpen(open);
    };

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: "#1E88E5", boxShadow: 3 }}>
                <Toolbar>
                    {/* Mobile Menu Button */}
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { xs: "block", md: "none" } }} onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>

                    {/* Logo & Title */}
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, fontWeight: "bold", display: "flex", alignItems: "center" }}
                    >
                        🏥 Patient Dashboard
                    </Typography>

                    {/* Desktop Navigation Links */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">Patients</Button>
                        <Button color="inherit">Reports</Button>
                        <Button color="inherit">Settings</Button>
                    </Box>

                    {/* Profile Icon */}
                    <IconButton color="inherit" onClick={handleMenuOpen}>
                        <AccountCircle />
                    </IconButton>

                    {/* Profile Dropdown */}
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>

            {/* Mobile Sidebar Drawer */}
            <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                    <List>
                        {["Home", "Patients", "Reports", "Settings"].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Navbar;
