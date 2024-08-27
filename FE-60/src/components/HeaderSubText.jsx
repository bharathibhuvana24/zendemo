import {
    AppBar,
    Autocomplete, 
    Button, 
    FormControl, 
    Grid, 
    Input, 
    InputAdornment, 
    TextField } from "@mui/material";


export function HeaderSubText()
{
   return (
   <Grid container
   display={'flex'}
   justifyContent={'center'}
   alignItems={'center'}
   gap={10}
   style={{borderTop: '1px solid #7d79795c'}}
   >
        <Grid item>
            <Button color="primary">Home</Button>
        </Grid>

        <Grid item>
            <Button color="primary">Cameras</Button>
        </Grid>

        <Grid item>
            <Button color="primary">Lenses</Button>
        </Grid>

        <Grid item>
            <Button color="primary">Lighting</Button>
        </Grid>

        <Grid item>
            <Button color="primary">Accessories</Button>
        </Grid>
       
   </Grid>
   )

}