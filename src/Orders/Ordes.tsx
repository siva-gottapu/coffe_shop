import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import { List, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      padding: 0,
    },
  })
);

function Orders(props: any) {
  const classes = useStyles();

  const orderList = () => {
    if (props.orders) {
      const items = props.orders.map((text: any) => {
        return (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        );
      });
      return items;
    }
  };
  return (
    <div className={classes.root}>
      <List className={classes.flexContainer}>{orderList()}</List>
    </div>
  );
}

export default Orders;
