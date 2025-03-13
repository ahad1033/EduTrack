import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { RHFTextField } from '../../../components/hook-form';

import FormProvider from '../../../components/hook-form/form-provider';
import CustomHelmet from '../../../components/custom-components/helmet/custom-helmet';

// ----------------------------------------------------------------------
const ChangePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required('Old password is required'),
  newPassword: Yup.string().required('New password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

// ----------------------------------------------------------------------

const ChangePassword = () => {
  const methods = useForm({
    resolver: yupResolver(ChangePasswordSchema),
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const {
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const isFormFilled =
    watch('oldPassword') && watch('newPassword') && watch('confirmPassword');

  const onSubmit = handleSubmit(async (data) => {
    const { oldPassword, newPassword } = data;
    console.log('data: ', { oldPassword, newPassword });
    toast.success('Password changed successfully');
  });

  return (
    <Box>
      <CustomHelmet title="Change Password" />

      <Grid height="100vh" container spacing={3}>
        <Grid
          item
          md={4}
          container
          display={{ xs: 'none', md: 'flex' }}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            color="success.main"
          >
            Welcome to EduTrack
          </Typography>
          <Typography variant="subtitle1">
            Please change your password to continue
          </Typography>
          <img
            src="/images/dashboard.png"
            alt="Dashboard"
            style={{ marginTop: '16px', maxWidth: '100%' }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={8}
          container
          display="flex"
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Typography variant="p" textAlign="left" mb={3}>
              Please type your old password and new password
            </Typography>

            <FormProvider methods={methods} onSubmit={onSubmit}>
              <Stack spacing={3} width={{ xs: '300px', md: '550px' }}>
                <RHFTextField
                  name="oldPassword"
                  label="Old Password"
                  type="password"
                />

                <RHFTextField
                  name="newPassword"
                  label="New Password"
                  type="password"
                />

                <RHFTextField
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                />

                <LoadingButton
                  type="submit"
                  color="success"
                  variant="contained"
                  fullWidth
                  loading={isSubmitting}
                  disabled={!isFormFilled}
                >
                  Submit
                </LoadingButton>
              </Stack>
            </FormProvider>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChangePassword;
