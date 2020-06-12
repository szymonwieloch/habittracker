import React from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import {
  Home as HomeIcon,
  Add as AddIcon,
  Person as PersonIcon,
  List as ListIcon,
} from "@material-ui/icons";

import withFirebaseAuth from "react-with-firebase-auth";
import { WrappedComponentProps } from "react-with-firebase-auth";

import { providers, auth } from "../firebase";

import { Link } from "react-router-dom";

interface AuthProps {}

const MenuList = (props: WrappedComponentProps) => {
  let loginUrls = null;
  if (props.user) {
    loginUrls = (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
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

      {loginUrls}
      <ListItem
        button
        onClick={props.user ? props.signOut : props.signInWithGoogle}
      >
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText
          // primary="Login"
          primary={props.user ? `Logout ${props.user.displayName}` : "Login"}
        />
      </ListItem>
    </List>
  );
};

export default withFirebaseAuth({
  providers: providers,
  firebaseAppAuth: auth,
})(MenuList);
