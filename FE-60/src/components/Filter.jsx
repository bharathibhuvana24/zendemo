import { Accordion, 
    AccordionActions, 
    AccordionDetails, 
    AccordionSummary, 
    Button, 
    Checkbox, 
    FormControlLabel, 
    FormGroup, 
    Grid} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function Filter()
{
    return (
        <Grid container maxWidth={"100%"}>
            <div>
     
     
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
           Brands
        </AccordionSummary>
        <AccordionDetails>
        { brands.map((ele, index) => {
            return (
                <FormGroup key={index}>
                <FormControlLabel
              control={<Checkbox />}
              label={ele}
            /></FormGroup>
            );
        })}       
            </AccordionDetails>
      </Accordion>
     
     
     
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        Photography & Cameras
        </AccordionSummary>
        <AccordionDetails>
        { photo_video.map((ele, index) => {
            return (
                <FormGroup key={index}>
                <FormControlLabel
              control={<Checkbox />}
              label={ele}
            /></FormGroup>
            );
        })}       
        
        </AccordionDetails>
      </Accordion>
     
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        Photo Capturing Resolution
        </AccordionSummary>
        <AccordionDetails>
        {photoresolution.map((ele, index) => {
            return (
                <FormGroup key={index}>
                <FormControlLabel
              control={<Checkbox />}
              label={ele}
            /></FormGroup>
            );
        })}  
        </AccordionDetails>
      </Accordion>
     
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        Video Capturing Resolution
        </AccordionSummary>
        <AccordionDetails>
        {videoresolution.map((ele, index) => {
            return (
                <FormGroup key={index}>
                <FormControlLabel
              control={<Checkbox />}
              label={ele}
            /></FormGroup>
            );
        })}
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        Accessories
        </AccordionSummary>
        <AccordionDetails>
        {accessories.map((ele, index) => {
            return (
                <FormGroup key={index}>
                <FormControlLabel
              control={<Checkbox />}
              label={ele}
            /></FormGroup>
            );
        })}
        </AccordionDetails>
      </Accordion>


      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
     
     
            </div>
        </Grid>

    )

    
}
export const brands = [
    'Sony',
    'Nikon',
    'Panasonic',
    'Kodak',
    'Canon',
]

export const photoresolution =[
    "UPTO 2.9x",
    '3x to 5.9x',
    '6x to 9x',
    '10 to 19.9x',
    '20 to 29.9x',
    '30x & more',
]

export const videoresolution =[
    '720px',
    '1080px',
    '2160px',
    '2880px',
    '4320px',
]

export const photo_video =[
    'point  & shoot digital',
    'Instant Film',
    'Action Camera',
    'Mirrorless system cameras',
    'video cameras',
    'Digital SLR cameras',
    'kids digital cameras',
]

export const accessories =[
'Cables',
'Chargers',
'Dust & Vacuum Pumps',
'Filters',
'Flashlights',
'Media',
'Lighting',
'Power',
'Strip Lights',
'Video Tripods',
'Wireless Video',
'Lens Mounts',
'Monitors',
'Camera Stabilisers',
'Timecode',
]
