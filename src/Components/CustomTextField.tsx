import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton, Typography, Box, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface CustomTextFieldProps {
  type: string;
  placeholder: string;
  labelText?: string;
  smallText?: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onForgotPasswordClick?: () => void; // Callback for "Forgot Password?" button
}

export default function CustomTextField(props: CustomTextFieldProps) {
  const { type, placeholder, labelText, smallText, name, onChange, onForgotPasswordClick } = props;

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* Forgot Password Button */}
      {type === 'password' && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            onClick={onForgotPasswordClick}
            sx={{
              color: 'primary.main',
              fontSize: '0.8rem',
              fontWeight: 500,
              background: 'none',
              border: 'none',
              padding: 0,
              textTransform: 'none',
              minWidth: 0,
              '&:hover': { textDecoration: 'underline', background: 'none' },
            }}
          >
            Forgot Password?
          </Button>
        </Box>
      )}

      {/* TextField */}
      <TextField
        size="small"
        fullWidth
        name={name}
        type={type === 'password' && showPassword ? 'text' : type || 'text'}
        variant="outlined"
        placeholder={placeholder || 'placeholder'}
        label={labelText || 'label'}
        onChange={onChange}
        sx={{}}
        InputProps={
          type === 'password'
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleToggleVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : undefined
        }
      />

      {/* Small Text */}
      {smallText && (
        <Typography
          variant="caption"
          color="textSecondary"
          sx={{
            marginTop: '0.3rem',
            whiteSpace: 'normal',
            wordWrap: 'break-word',
            overflowWrap: 'anywhere',
          }}
        >
          {smallText}
        </Typography>
      )}
    </Box>
  );
}
