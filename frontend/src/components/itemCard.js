
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

/*
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

*/


export default function ItemCard(props) {

  const item = props.item 

  return (
    // <>
    //   <h1>
    //     {item.name}
    //   </h1>
    //   <p>
    //     ${item.cost}
    //   </p>
    //   <img src={item.image}/>
    //   <button type='submit'>
    //     Buy
    //   </button>
    // </>

    <Card variant="outlined" sx={{ maxWidth: 300, marginY:"15px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.image}
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }}>
          {item.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }}>
          ${item.cost}
        </Typography>
      </CardContent>
      <CardActions>
        <Button type='submit' size="small">Add to Cart !</Button>
      </CardActions>
    </Card>


  );
  
}
