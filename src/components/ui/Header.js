import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Button,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0.6rem",
    },
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
  logo: {
    height: "6rem",
    [theme.breakpoints.down("md")]: {
      height: "5rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "4rem",
    },
  },
  logoContainer: {
    padding: 0,
    margin: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "Auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    color: "#fafafa",
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "35px",
    width: "35px",
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "#fafafa",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    ...theme.typography.tab,
    color: "#fafafa",
    opacity: 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const { value, setValue, selectedMenuItem, setSelectedMenuItem } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (navValue) => {
    setValue(navValue);
  };

  const handleAnchorEl = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };
  const menuOptions = [
    { name: "Services", path: "/services", activeIndex: 1, selectedIndex: 0 },
    {
      name: "Custom Software Developement",
      path: "/customsoftware",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "iOS/Android App Developement",
      path: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "Website Developement",
      path: "/websites",
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  const mainRoutes = [
    { name: "Home", path: "/", activeIndex: 0 },
    {
      name: "Services",
      path: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "services-menu" : undefined,
      ariaPopup: anchorEl ? true : undefined,
      mouseOver: (event) => handleAnchorEl(event),
    },
    { name: "The Revolution", path: "/revolution", activeIndex: 2 },
    { name: "About Us", path: "/about", activeIndex: 3 },
    { name: "Contact Us", path: "/contact", activeIndex: 4 },
  ];

  useEffect(() => {
    [...menuOptions, ...mainRoutes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.path}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== selectedMenuItem
            ) {
              setSelectedMenuItem(route.selectedIndex);
            }
          }
          break;
        case "/estimate":
          setValue(null);
          break;
        default:
          break;
      }
    });
  }, [
    value,
    mainRoutes,
    menuOptions,
    selectedMenuItem,
    setValue,
    setSelectedMenuItem,
  ]);

  const HeaderTabs = (
    <>
      <Tabs
        value={value}
        className={classes.tabContainer}
        onChange={handleChange}
        indicatorColor="primary"
      >
        {mainRoutes.map((route, index) => (
          <Tab
            key={index}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            className={classes.tab}
            onMouseOver={route.mouseOver}
            component={Link}
            to={route.path}
            label={route.name}
          />
        ))}
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        component={Link}
        to="/estimate"
        onClick={() => handleClick(null)}
        className={classes.button}
      >
        Free Estimate
      </Button>
      <Menu
        id="services-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {menuOptions.map((menuOption, index) => (
          <MenuItem
            onClick={() => {
              handleClose();
              handleClick(1);
              handleMenuItemClick(index);
            }}
            key={index}
            component={Link}
            to={menuOption.path}
            classes={{ root: classes.menuItem }}
            selected={index === selectedMenuItem && value === 1}
          >
            {menuOption.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {mainRoutes.map((route, index) => (
            <ListItem
              key={index}
              divider
              button
              component={Link}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              to={route.path}
              selected={value === route.activeIndex}
            >
              <ListItemText
                className={
                  value === route.activeIndex
                    ? classes.drawerItemSelected
                    : classes.drawerItem
                }
                disableTypography
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            divider
            button
            component={Link}
            onClick={() => {
              setOpenDrawer(false);
              setValue(null);
            }}
            to="/estimate"
            className={classes.drawerItemEstimate}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => handleClick(0)}
              disableRipple
            >
              <img src={logo} alt="Company logo" className={classes.logo} />
            </Button>
            {matches ? drawer : HeaderTabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </>
  );
};

export default Header;
