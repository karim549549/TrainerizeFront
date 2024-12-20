import {
    Box,
    Typography,
    Button, 
} from '@mui/material'

import ElectricBoltIcon from '@mui/icons-material/ElectricBolt'
import SearchField from '../Components/SearchField'
import React from 'react'

interface profileHeaderProps{
    username : string 
}


export default function ProfileHeaderComponent(props: profileHeaderProps) {
  return (
    <Box display={'flex'} justifyContent={'space-between'} alignItems="center">
    <Box>
      <Typography variant="h5" fontWeight={600} color='white'> 
        Hi, {props.username || 'Karim'}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Let’s look at our daily activity overview
      </Typography>
    </Box>
    <Box display={'flex'} gap={1}>
      <SearchField />
      <Button sx={{padding:'0rem 2.5rem' ,border:'1px solid' , borderRadius:'2rem'}}>
        <ElectricBoltIcon sx={{marginRight:'0.5rem'}}/>
        Upgrade
      </Button>
    </Box>
  </Box>
  )
}
