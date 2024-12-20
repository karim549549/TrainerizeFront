import {
  Grid2 as Grid,
  Box
} from '@mui/material';
import CaloriesCard from './CaloriesCardComponent';
import WorkOutCard from './WorkOutCardComponent';
import WorkOutImage from '../assets/WorkOutCard.jpeg';
import PrograssCard from './PrograssCardComponent';

interface ProfileMainContentProps {
  numberOfCalories: number;
  consumedCalories: number;
  carboydrates: number;
  fats: number;
  protiens: number;
}

export default function ProfileMainContentComponent(props: ProfileMainContentProps) {
  const { numberOfCalories, consumedCalories, carboydrates, fats, protiens } = props;
  
  return (
    <Grid container spacing={2}  alignItems={'stretch'}>
      <Grid  sx={{ minWidth:'40rem' ,size: 12  ,flex:1,
         }} >
        <Box
          sx={{
            backgroundColor: 'background.paper',
            boxShadow: 2,
            borderRadius: '1rem',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'space-Between',
            gap: 2,
            backgroundImage: `url(${WorkOutImage})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            
          }}
        >
          <WorkOutCard />
        </Box>
      </Grid>

      <Grid  sx={{ minWidth: '25rem' ,xs: 12 , sm : 6 , md:6  }}>
        <Box   
          sx={{
            backgroundColor: 'background.paper',
            boxShadow: 2,
            borderRadius: '1rem',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,           
            justifyContent:'space-between',
          }}
        >
          <CaloriesCard
            numberOfCalories={numberOfCalories}
            consumedCalories={consumedCalories}
            carboydrates={carboydrates}
            proteins={protiens}
            fats={fats}
          />
        </Box>

      </Grid>

      <Grid  sx={{ minWidth: '25rem' ,xs: 12 , sm : 6 , md:6  }}>
        <Box   
          sx={{
            backgroundColor: 'background.paper',
            boxShadow: 2,
            borderRadius: '1rem',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,           
            justifyContent:'space-between',
          }}
        >
          <PrograssCard/>
        </Box>

      </Grid>

    </Grid>
  );
}
