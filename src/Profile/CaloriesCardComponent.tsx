
import { Box, Typography } from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ProgressBar from '../Components/ProgressBarComponent';

interface CaloriesCardProps {
  numberOfCalories: number;
  consumedCalories: number;
  carboydrates: number;
  proteins: number;
  fats: number;
}

export default function CaloriesCard({
  numberOfCalories,
  consumedCalories,
  carboydrates,
  proteins,
  fats,
}: CaloriesCardProps) {
  return (
    <>
          {/* Header Section */}
          <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center" gap={2}>
          <LocalFireDepartmentIcon
            sx={{
              padding: '0.5rem',
              backgroundColor: 'primary.main',
              color: 'background.paper',
              borderRadius: '0.8rem',
              fontSize: '1.8rem',
            }}
          />
          <Typography fontSize={22} color="text.primary">
            Calories
          </Typography>
        </Box>
        <Typography fontWeight={700} fontSize={30} color="white">
          {numberOfCalories || 2023}
          <Typography
            component="span"
            fontSize={16}
            fontWeight={500}
            color="#eff3f4"
            sx={{ marginLeft: '0.3rem' }}
          >
            kcal
          </Typography>
        </Typography>
      </Box>

      {/* Subtitle Section */}
      <Box display="flex" justifyContent="space-between">
        <Typography color="#eff3f4">Lack of physical activity</Typography>
        <Typography color="#eff3f4">Daily dose</Typography>
      </Box>

      {/* Progress Section */}
      <Typography sx={{ fontSize: 50 }} color="white">
        {consumedCalories || 2031.1}
        <Typography
          component="span"
          fontSize={16}
          fontWeight={500}
          color="#eff3f4"
          sx={{ marginLeft: '0.3rem' }}
        >
          /kcal
        </Typography>
      </Typography>

      <ProgressBar value={15} max={30} />

      <Box display="flex" justifyContent="space-between" marginTop={1}>
        <Typography fontSize={12} color="text.secondary">
          0
        </Typography>
        <Typography fontSize={12} color="text.secondary">
          2,350
        </Typography>
      </Box>

      {/* Macros Section */}
      <Box display="flex" justifyContent="space-between">
        <Typography fontSize={35} color="white">
          {carboydrates || 220}
          <Typography
            component="span"
            fontSize={16}
            fontWeight={500}
            color="#eff3f4"
            sx={{ marginLeft: '0.3rem' }}
          >
            Gram
          </Typography>
          <br />
          <Typography fontWeight="700">Carbohydrates</Typography>
        </Typography>
        <Typography fontSize={35} color="white">
          {proteins || 80}
          <Typography
            component="span"
            fontSize={16}
            fontWeight={500}
            color="#eff3f4"
            sx={{ marginLeft: '0.3rem' }}
          >
            Gram
          </Typography>
          <br />
          <Typography fontWeight="700">Proteins</Typography>
        </Typography>
        <Typography fontSize={35} color="white">
          {fats || 116}
          <Typography
            component="span"
            fontSize={16}
            fontWeight={500}
            color="#eff3f4"
            sx={{ marginLeft: '0.3rem' }}
          >
            Gram
          </Typography>
          <br />
          <Typography fontWeight="700">Fats</Typography>
        </Typography>
      </Box>
    </>
  );
}
