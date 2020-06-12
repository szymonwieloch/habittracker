import React from "react";
import {
  AppBar,
  IconButton,
  Typography,
  Toolbar,
  Hidden,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

interface Props {
  menuToggle: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const TopBar = (props: Props) => {
  return (
    <Hidden smUp implementation="css">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={props.menuToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Habit Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </Hidden>
  );
};

export default TopBar;
