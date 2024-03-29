import React from 'react'
import {Avatar,Button,Paper,Grid, Container, Typography, TextField, InputAdornment, IconButton} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const Input = ({half,name,label,autoFocus,type,handleShowPassword,handleChange}) => {
 
    return (
    <Grid item xs={12} sm={half?6:12}>
        <TextField 
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        className='LoginInput'
        fullWidth
        label={label}
        type={type}
        autoFocus={autoFocus}
        InputProps={name === 'password'?{
            endAdornment:(
                <InputAdornment position='end'>
                    <IconButton onClick={handleShowPassword} >
                        {type=='password'? <VisibilityOff/>: <Visibility/>}
                    </IconButton>
                </InputAdornment>
            )
        }:null
    }
        />
    </Grid>
  )
}

export default Input