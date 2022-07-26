import React from "react";
import { Grid, Card, CardMedia } from "@mui/material";

const CardItem = ({ cardItem }) => {
  return (
    <Grid item md={4} xs={12} lg={4}>
      <Card>
        <CardMedia component="img" image={cardItem.image} alt="carta" />
      </Card>
    </Grid>
  );
};

export default CardItem;
