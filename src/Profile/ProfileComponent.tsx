import { Box, Divider } from '@mui/material';
import SideBarComponent from '../Components/SideBarComponent';
import ProfileHeaderComponent from './ProfileHeaderComponent';
import ProfileMainContentComponent from './ProfileMainContentComponent';

interface ProfileProps {
  userAvatar: string;
  username: string;
  numberOfCalories: number;
  cosumedCalories: number;
}

export default function Profile(props: ProfileProps) {
  return (
    <Box display="flex" sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      {/* Sidebar - Hidden on xs screens */}
      <Box
        sx={{
          display: { xs: 'none', sm: 'block' }, // Hide on xs, show on sm and larger
        }}
      >
        <SideBarComponent userAvatar={props.userAvatar} />
      </Box>

      {/* Main Content */}
      <Box display="flex" gap={3} flexDirection="column" padding={3} width="100%">
        <ProfileHeaderComponent username={props.username} />
        <Divider />
        <ProfileMainContentComponent
          consumedCalories={props.cosumedCalories}
          numberOfCalories={props.numberOfCalories}
        />
      </Box>
    </Box>
  );
}
