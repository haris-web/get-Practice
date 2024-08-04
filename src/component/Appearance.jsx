import React , {useEffect} from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DisplayCard from './DisplayCard';


const Appearance = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [appearance, setAppearance] = React.useState('square'); 
    const customAppearance=[
        {name: 'Landscape', value: 'landscape'},
        {name: 'Square', value:'square'},
        {name: 'Portrait', value: 'portrait'}
  
    ]
    const open = Boolean(anchorEl);
    useEffect(() => {
  localStorage.setItem('appearance ',appearance );
    }, [appearance]);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleAppearance = (value) => {
     setAppearance(value);
      
    }
  return (
    <>
    <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {customAppearance.map((x) => (
  <MenuItem onClick={()=>handleAppearance(x.value)}>{x.name}</MenuItem>
))}

      
      </Menu>
    <DisplayCard />

    </>
  )
}

export default Appearance