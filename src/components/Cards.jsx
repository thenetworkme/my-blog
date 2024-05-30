import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardHeader,
} from "@mui/material";

export default function Cards({ title, text, textButton, link }) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} className="cardComp">
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="cards"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="cards">
            {text}
          </Typography>
        </CardContent>
        <CardActions>
          <a href={link} target="_blank">
            <Button size="small" className="cardsBtn">
              {textButton}
            </Button>
          </a>
        </CardActions>
      </Card>
    </div>
  );
}
