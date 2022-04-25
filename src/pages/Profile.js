import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';



export default function Profile() {
  return (
    <Card sx={{ minWidth: 275, display:"flex",  alignItems: "center", justifyContent: "center", width:"30rem", height:"20rem", flexGrow:1, textAlign :"center", margin:"auto", marginTop:"10rem" }}>
      <CardContent sx={{textAlign:"center"}}>
      <CardMedia
        component="img"
        height="70"
        image=""
        alt="Profile-img"
      />
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Display Name
        </Typography>
        <Typography variant="h5" component="div">
         Recep GÜÇ
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Email
        </Typography>
        <Typography variant="body2">
          gocmezmurat@gmail.com
        </Typography>
      </CardContent>
      
    </Card>
  );
}