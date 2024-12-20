
import { Box } from '@mui/material';

interface ProgressBar {
  value: number; 
  max: number;  
  color?: string; 
}

export default function ProgressBar({
  value,
  max,
  color = '#84b900', 
}: ProgressBar) {
  const segments = Array.from({ length: max }, (_, index) => index < value);

  return (
    <Box display="flex" alignItems="center" gap={0.5}>
      {segments.map((filled, index) => (
        <Box
          key={index}
          sx={{
            width: '8px',          
            height: '4rem',        
            borderRadius: '4px',   
            backgroundColor: filled ? color : '#e0e0e0', 
            transition: 'background-color 0.3s ease', 
            '&:hover':{
                transform:'scale(1.1)'
            }
          }}
        />
      ))}
    </Box>
  );
}
