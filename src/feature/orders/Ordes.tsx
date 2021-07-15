import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import { List, ListItemText } from "@material-ui/core";
import { OrdersModel } from "../../model";

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

type OrdersProps = {
  orders: OrdersModel[];
};

function Orders(props: OrdersProps) {
  const classes = useStyles();

  const orderList = () => {
    if (props.orders) {
      const items = props.orders.map((order: OrdersModel) => {
        return (
          <ListItem button key={order.id}>
            <ListItemText primary={order.id} />
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
