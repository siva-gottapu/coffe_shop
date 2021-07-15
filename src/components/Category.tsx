import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import { List, ListItemText } from "@material-ui/core";
import Product from "../feature/products/Product";
import { CategoryModel, Data, ProductModel } from "../model";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "60%",
      marginRight: "10px",
      backgroundColor: theme.palette.background.paper,
      "&$selected": {
        backgroundColor: theme.palette.primary.main,
        color: "white",
        "&:hover": {
          backgroundColor: theme.palette.secondary.light,
        },
      },
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: theme.palette.primary.light,
      padding: "10px",
    },
    gridContainer: {
      display: "grid",
      gridGap: "10px 10px",
      marginTop: "20px",
      gridTemplateColumns: "auto auto auto",
    },
    selected: {},
  })
);

type CategoryProps = {
  data: Data;
  addItem: Function;
};

function Category(props: CategoryProps) {
  const classes = useStyles();
  const [selCat, setSelCat] = useState({} as CategoryModel);

  const menuClick = (cat: CategoryModel) => {
    setSelCat(cat);
  };
  const categoryList = () => {
    let categories = props.data.categories;
    if (categories) {
      const items = categories.map((cat: CategoryModel) => {
        return (
          <ListItem
            button
            key={cat.name}
            onClick={() => menuClick(cat)}
            selected={cat.id === selCat.id}
            classes={{ root: classes.root, selected: classes.selected }}
          >
            <ListItemText primary={cat.name} />
          </ListItem>
        );
      });
      return items;
    }

    return [];
  };

  const productsList = () => {
    let categories = props.data.categories;
    if (categories && !selCat.products) {
      setSelCat(categories[0]);
    }

    if (selCat.products) {
      const items = selCat.products.map((product: ProductModel) => {
        return (
          <Product data={product} key={product.id} addItem={props.addItem} />
        );
      });
      return items;
    }
    return [];
  };

  return (
    <div className={classes.root}>
      <List className={classes.flexContainer}>{categoryList()}</List>
      <div className={classes.gridContainer}>{productsList()}</div>
    </div>
  );
}

export default Category;
