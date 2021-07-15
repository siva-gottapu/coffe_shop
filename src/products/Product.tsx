import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { ProductModel, OrdersItem } from "../model";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "250px",
      backgroundColor: theme.palette.background.paper,
      padding: "20px",
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      padding: 0,
    },
    addButton: {
      marginTop: "10px",
    },
  })
);

type ProductProps = {
  data: ProductModel;
  addItem: Function;
};

function Product(props: ProductProps) {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(1);
  let orderItem = {} as OrdersItem;

  let product: ProductModel = props.data;
  const onChange = (e: any) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setQuantity(e.target.value);
    }
  };

  const onAddClick = () => {
    if (orderItem) {
      orderItem.product_id = product.id;
      orderItem.product_name = product.name;
      orderItem.list_price = product.list_price;
      orderItem.tax = product.tax;
    }
    orderItem.quantity = quantity;
    props.addItem(orderItem);
  };

  return (
    <Card className={classes.root}>
      <Typography className={classes.addButton}>
        {product && product.name}
      </Typography>
      <Typography className={classes.addButton}>
        Price : Rs {product && product.list_price}
      </Typography>
      {product.discount && (
        <Typography className={classes.addButton}>
          Discount : {product.discount + +product.discount_unit}
        </Typography>
      )}
      <TextField
        className={classes.addButton}
        label="Quantiy"
        variant="outlined"
        type="number"
        value={quantity}
        size="small"
        onChange={onChange}
      ></TextField>
      <Button
        className={classes.addButton}
        color="primary"
        variant="outlined"
        onClick={onAddClick}
      >
        Add
      </Button>
    </Card>
  );
}

export default Product;
