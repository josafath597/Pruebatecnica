import { Button, Container, Grid, ImageList, ImageListItem, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { logoutFirebase } from './firebase/providers';

export const Images = () => {

    const {setIsAuthenticated, isAuthenticated} = useContext(AuthContext);
    const [show, setShow] = useState(false);

    const logout = () => {
        logoutFirebase();
        setIsAuthenticated(false);
    }

    const navigate = useNavigate();

    useEffect(() => {

        if(!isAuthenticated){
          navigate('/home');
        }
      }, [isAuthenticated])
  return (
    <Container>
        <Typography sx={{}} variant='h2'>Mostrar Imagenes</Typography>
        <Grid container sx= {{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',

        }}>
            <Grid item sx= {{mb: 5}}>
                <Button variant='contained' color='primary' onClick={logout}>
                    Cerrar Sesion
                </Button>
            </Grid>
            <Grid item>
                <Button variant='contained' color='primary' onClick={ () => setShow(!show)}>
                    Mostrar Imagenes
                </Button>
            </Grid>

            {
                show && 
                <ImageList sx={{ width: 1000, height: 800 }} cols={3} rowHeight={164}>
                    {itemData.map((item, index) => (
                            <a key={index} href={item.img}>
                        <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                        </ImageListItem>
                            </a>
                    ))}
                </ImageList>
            }
        </Grid>
    </Container>
  )
}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];