import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./Login.css";
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className='loginContainer'>
      <Card sx={{ minWidth: 275, height: 500, width: 500}} className='card'>
        <CardContent>
          <br></br>
          <br></br>
          <h1 className='loginHeader'>Login</h1>
          <br></br>
          <Box sx={{ width: 500, maxWidth: '100%' }}>
            <TextField fullWidth label="Email-Id" id="fullWidth" />
            <br></br>
            <br></br>
            <TextField fullWidth label="Password" id="fullWidth" />
            <br></br>
            <br></br>
          </Box>
          <Stack spacing={1} direction="row">
            <Button variant="contained" className='loginButton' fullWidth sx={{backgroundColor:'rgb(237, 24, 173)'}}>Login</Button>
          </Stack>
          <br></br>
          <h4 className='newStudent'>new student?   <Link to={'/pages'} >Register_Here!</Link></h4>
        </CardContent>
      </Card>
    </div>
  )
}
export default Login
