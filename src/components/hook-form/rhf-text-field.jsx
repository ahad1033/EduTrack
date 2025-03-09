import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

// ----------------------------------------------------------------------

const RHFTextField = ({ name, helperText, type, ...other }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          fullWidth
          type={type}
          value={type === 'number' && field.value === 0 ? '' : field.value}
          onChange={(e) => {
            if (type === 'number') {
              field.onChange(Number(e.target.value));
            } else {
              field.onChange(e.target.value);
            }
          }}
          error={!!fieldState.error}
          helperText={fieldState.error ? fieldState.error.message : helperText}
          {...other}
        />
      )}
    />
  );
};

export default RHFTextField;
