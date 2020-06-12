import React from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import {
  Home as HomeIcon,
  Add as AddIcon,
  Person as PersonIcon,
  List as ListIcon,
} from "@material-ui/icons";

import { Link } from "react-router-dom";

const MenuList = () => {
  return (
    <List>
      <Link to="/">
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>
      <Link to="/addhabit">
        <ListItem button>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Add habit" />
        </ListItem>
      </Link>
      <Link to="/habits">
        <ListItem button>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="Habits" />
        </ListItem>
      </Link>
      <Link to="/login">
        <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>
      </Link>

      {/* <ListItem button key={text}> */}
      {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
    </List>
  );
};

export default MenuList;
