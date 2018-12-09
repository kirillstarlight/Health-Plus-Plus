import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import WrappedLink from "../../../utils/link-button/LinkButton";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    objectFit: "cover"
  }
};

const ProductCard = props => {
  const { title, text, img, _id } = props.item;
  return (
    <Card className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          className="media"
          height="140"
          image={require(`../../../images/${img}`)}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography component="p">{text}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to cart
        </Button>
        <WrappedLink to={`/itemview/:id${_id}`} linkText="Learn More" />
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(ProductCard);