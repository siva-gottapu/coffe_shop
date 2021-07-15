import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import { Typography } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { Amount, OrdersItem } from "../model";
import OrdeerUtil from "../util/OrderUtil";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "40%",
      backgroundColor: theme.palette.background.paper,
      padding: "10px",
    },
    flexContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      padding: 10,
      justifyContent: "space-between",
      flexWrap: "wrap",
      flex: 1,
    },
    amount: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      padding: 10,
      justifyContent: "space-between",
    },
  })
);

function Cart(props: any) {
  const classes = useStyles();
  let amount: Amount = {} as Amount;
  const cartItems = () => {
    if (props.cart) {
      let ordeerUtil = new OrdeerUtil();
      ordeerUtil.calculateOrderBill(props.discounts, props.cart);

      amount = ordeerUtil.getBillAmount();
      const items = props.cart.map((product: OrdersItem) => {
        return <ListItem>{productCard(product)}</ListItem>;
      });
      return items;
    }
  };

  const productCard = (product: OrdersItem) => {
    return (
      <Card className={classes.flexContainer}>
        <Typography> {product.product_name} </Typography>
        <Typography> Qty : {product.quantity}</Typography>
        <div>
          {product.discount && (
            <Typography style={{ textDecoration: "line-through" }}>
              {" "}
              Rs : {product.list_price * product.quantity}
            </Typography>
          )}
          <Typography> Rs {product.total_price}</Typography>
        </div>
      </Card>
    );
  };
  return (
    <div className={classes.root}>
      <Typography color="primary">Bill Details</Typography>
      {props.cart.length > 0 ? (
        <>
          {cartItems()}
          <Card style={{ padding: 10, margin: 10 }}>
            <div className={classes.amount}>
              <Typography> Sub total : </Typography>
              <Typography> Rs {amount && amount.subtotal} </Typography>
            </div>
            <div className={classes.amount}>
              <Typography> Tax : </Typography>
              <Typography> Rs {amount && amount.tax} </Typography>
            </div>
            <div className={classes.amount}>
              <Typography>
                {" "}
                -------------------------------------------------------------------------------{" "}
              </Typography>
            </div>
            <div className={classes.amount}>
              <Typography> Total : </Typography>
              <Typography> Rs {amount && amount.total} </Typography>
            </div>
          </Card>
        </>
      ) : (
        <Typography color="secondary" style={{ margin: "20px" }}>
          {" "}
          Add items to cart...
        </Typography>
      )}
    </div>
  );
}

export default Cart;
