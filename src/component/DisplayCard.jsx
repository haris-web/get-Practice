import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
const Root = styled(Grid)({
  height: "100vh",
  width: "100%",
  "& .grid-line": {},
});

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
const DisplayCard = () => {
  return (
    <Root>
      {/* <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <Grid item xs={3} sm={3} md={6}>
            <Card>
              <CardMedia
                sx={{ height: 140 }}
                image="https://miro.medium.com/v2/resize:fit:720/format:webp/1*U4gZLnRtHEeJuc6tdVLwPw.png"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid> */}
      <Paper
     
      >
 
        
          <Grid container>
       
            <Grid className="de" item xs  spacing={8}  >
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Standard license
                </Typography>
              </Grid>
            </Grid>
            <Grid >
              <Typography variant="subtitle1" component="div">
                $19.000
              </Typography>
            </Grid>
          </Grid>

          <Grid container justifyContent="space-between" alignItems="center">
      <Grid item xs>
        <Typography variant="body1">Item 1</Typography>
      </Grid>
      <Grid>
        <Typography variant="body1">Item 2</Typography>
      </Grid>
    </Grid>
      
      </Paper>
    </Root>
  );
};

export default DisplayCard;
