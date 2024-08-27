import { Grid } from "@mui/material";
import { Filter } from "./Filter";

export function CameraInformation()
{
    return(
       <Grid 
       marginTop={3}
       style={{maxWidth: '100%'}}>

       <Grid container 
       display={"flex"}
       flexDirection={"row"}
       gap={1} 
       width={"100%"}>
            <Grid item width={'30%'}>
                <Filter />
            </Grid>
            <Grid item width={'60%'}>
                Right side
            </Grid>
        </Grid>
        </Grid>
    )
} 