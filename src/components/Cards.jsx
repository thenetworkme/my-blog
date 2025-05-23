import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardHeader,
  Box,
} from "@mui/material";

export default function Cards({ title, text, textButton, link, fullWidth, icon, bgColor }) {
  return (
    <div className={fullWidth ? "fullWidth" : ""}>
      <Card 
        sx={{ 
          maxWidth: fullWidth ? "100%" : 345,
          backgroundColor: bgColor || "#7077a1"
        }} 
        className="cardComp"
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="cards"
          >
            {icon && <Box component="span" sx={{ mr: 1, verticalAlign: 'middle', display: 'inline-block' }}>{icon}</Box>}
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
