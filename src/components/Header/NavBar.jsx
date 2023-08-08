import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../../assets/Navbar/G G Garments-logos_.jpeg";
import { navBarMenu } from "../../data/navbar";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";

import "./NavBar.css";

import { Drawer, List, ListItem } from "@mui/material";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar() {
  const [openMobileDrawer, setOpenMobileDrawer] = React.useState(false);
  const handleOpenDrawer = () => {
    setOpenMobileDrawer(true);
  };
  const HandleClose = () => {
    setOpenMobileDrawer(false);
  };
  return (
    <>
      <Box>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Box
              sx={{
                mr: 2,
                mt: "5px",
              }}
            >
              <img src={Logo} alt="logo " height="64px" width="100px" />
            </Box>
            <Typography
              variant="h6"
              noWrap
              className="logo-text"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Garment
            </Typography>
            
            <Box
              className="Nav-Bar-Menus"
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              {navBarMenu.map((menu) => {
                return (
                  <a key={menu.id} href={menu.path}>
                    {menu.title}
                  </a>
                );
              })}
            </Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
              className="header-logo"
            >
              <MenuIcon onClick={handleOpenDrawer} />
            </IconButton>
            <Search
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <AddShoppingCartIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
        }}
      >
        <AppBar
          position="static"
          color="inherit"
          className="mobile-search-header"
        >
          <Toolbar>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <AddShoppingCartIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer
        anchor="right"
        open={openMobileDrawer}
        onClose={HandleClose}
        sx={{
          "& .MuiPaper-root ": {
            width: "80%",
          },
        }}
      >
        <Box
          sx={{ p: 5, widht: "70%", overflowY: "hidden" }}
          className="mobile-drawer-box"
        >
          <Box onClick={HandleClose} className="mobile-drawer-closeIcon">
            <CloseIcon
              onClick={HandleClose}
              sx={{
                fontSize: "30px",
              }}
            />
          </Box>
          <List>
            {navBarMenu.map((menu) => {
              return (
                <ListItem key={menu.id} className="mobile-drawer-listitem">
                  <a href={menu.path}>{menu.title}</a>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
