import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();

  const { isAuthenticating, loginWithEmailPassword, error, isAuthenticated } = useContext(AuthContext);

  const onSubmit = async ( {email, password} ) => {
    await loginWithEmailPassword( email, password );
    if(isAuthenticated){
    }
  }

  useEffect(() => {

    if(isAuthenticated){
      navigate('/images');
    }

  }, [isAuthenticated])
  
  
  return (

    <Container>
      <Typography sx={{}}  variant= 'h2'>Iniciar Sesion</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>

          <Grid item xs={12} sx={{mt:2}}>

            <TextField
                error= {errors.email?.message === undefined ? false : true}
                helperText={errors.email?.message}
                label="Email" 
                type="text" 
                placeholder="Email" 
                fullWidth
                {
                  ...register("email", {
                  required: {
                    value: true,
                    message: "Por favor ingrese su email",
                  },
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Por favor ingrese un email valido",
                  },
                })}
                

            />

          </Grid>

          <Grid item xs={12} sx={{ mt:2 }}>

              <TextField
              error= {errors.password?.message === undefined ? false : true}
              helperText={errors.password?.message} 
              label="Password" 
              type="password" 
              placeholder="Password" 
              fullWidth
              {
                ...register("password", 
                {
                  required: {
                    value: true,
                    message: "Por favor ingrese su password",
                  },
                  minLength: {
                    value: 6,
                    message: "La contraseña es al menos de 6 caracteres",
                  }
              })}
              />

          </Grid>

          <Grid container spacing={2} sx={{ mb:2, mt:1 }} width="100%" >

            {
              error && 
              <Grid item xs={12}>
                <Alert severity="error">
                  {error}
                </Alert>
              </Grid>
            }

            <Grid item sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "100%",
            }}>

              <Button type="submit" variant='contained' fullWidth disabled={isAuthenticating} >
                Iniciar Sesión
              </Button>

            </Grid>

          </Grid>

        
        </Grid>
      </form>
    </Container>
  );
}

export default App;
