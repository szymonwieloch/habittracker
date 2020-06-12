import React from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";

const Habits = () => {
  return (
    <React.Fragment>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </React.Fragment>
  );
};

export default Habits;
