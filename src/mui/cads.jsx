import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CssBaseline,
} from "@mui/material";
export default function CustomCard({ image, title, discription }) {
  return (
    <>
      <CssBaseline />
      <Card
        sx={{
          background: "black",
          color: "white",
          border: "1px solid whitesmoke",
          borderRadius: "20px",
          padding: "15px",
          marginTop: "10px",
          flex: "1",
        }}
      >
        <CardActionArea
          sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <CardMedia
            component="img"
            height="240"
            image={image}
            alt="green iguana"
            sx={{
              borderRadius: "20px",
            }}
          />
          <CardContent sx={{ color: "white" }}>
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="body2" sx={{}}>
              {discription}
            </Typography>
            <Button
              variant="outlined"
              color="text.disabled"
              sx={{
                width: "100%",
                borderRadius: "20px",
                marginTop: "20px",
              }}
            >
              watch video
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
