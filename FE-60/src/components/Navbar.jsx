import { AppBar,
     Autocomplete, 
     Button, 
     FormControl, 
     Grid, 
     Input, 
     InputAdornment, 
     TextField } from "@mui/material";
 import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
 import SearchIcon from '@mui/icons-material/Search';
 import logo from '../assets/lens.png'
import { brown } from "@mui/material/colors";
import { HeaderSubText } from "./HeaderSubText";


export function Navbar() {
return <AppBar
color="transparent" position="static">
    <Grid container
    display={'flex'}
    flexDirection={'row'}
    justifyContent={'center'}
    alignItems={'center'}
    gap={10}
    padding={2}>


        <Grid item display={'flex'} gap={1}alignItems={'center'}>
            <img src={logo}></img>
            <div style={ {fontSize: 18, fontStyle: brown}}>Camera Rental</div>
        </Grid>

      <Grid item>
      <Autocomplete
      disablePortal
      id="location-options"
      options={top10locations}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Locations" />}
        />
     </Grid>


        <Grid item>
            <FormControl variant="filled" style={ {width: 330} }>
                <Input type="text" placeholder="Search your needs..." 
                startAdornment={<InputAdornment>
                { <AddAPhotoIcon></AddAPhotoIcon> }
                </InputAdornment>
                }
                endAdornment={<InputAdornment>
                <Button style={ {height: 30}} variant="filled"><SearchIcon></SearchIcon> Search</Button></InputAdornment>}/>                
                </FormControl>
        </Grid>
        <Grid item>
        <Button style={ {height: 30}} variant="contained">Log-In</Button>
        </Grid>
        <Grid item>
        <Button style={ {height: 30}} variant="contained">Register</Button>
        </Grid>
    </Grid>

    <HeaderSubText />
    </AppBar>

}

const top10locations =[

  { label: 'Chennai'},
  { label: 'Pondicherry'},
  { label: 'Villupuram'},
  { label: 'Cuddalore' },
  { label: 'Thiruvannamalai' },
  { label: "Ranipet" },
  { label: 'Vellore' },
  { label: 'Thirupathur' },
  { label: 'Kanchipuram' },
  { label: 'Thiruvallur' } 
    
]