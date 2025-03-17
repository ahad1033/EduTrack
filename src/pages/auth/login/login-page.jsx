import * as Yup from 'yup';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { RHFTextField } from '../../../components/hook-form';
import { useLoginMutation } from '../../../redux/features/auth/authApi';

import FormProvider from '../../../components/hook-form/form-provider';
import CustomHelmet from '../../../components/custom-components/helmet/custom-helmet';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/features/auth/authSlice';
import { verifyToken } from '../../../utils/verifyToken';

// ----------------------------------------------------------------------
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

// ----------------------------------------------------------------------

const LoginPage = () => {
  const dispatch = useDispatch();

  const [login, { data, isLoading, error }] = useLoginMutation();

  console.log('data: ', data);
  console.log('error: ', error);

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const isFormFilled = watch('email') && watch('password');

  const onSubmit = handleSubmit(async (data) => {
    const response = await login(data).unwrap();

    const user = await verifyToken(response?.data?.accessToken);

    dispatch(setUser({ user, token: response?.data?.accessToken }));
  });

  return (
    <Box>
      <CustomHelmet title="Login" />

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
            textAlign="left"
            color="success.main"
          >
            Welcome to EduTrack
          </Typography>
          <Typography variant="subtitle1">Please log in to continue</Typography>
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
            <Typography variant="p" fontWeight="bold" textAlign="left" mb={2}>
              Please login to continue
            </Typography>

            <FormProvider methods={methods} onSubmit={onSubmit}>
              <Stack spacing={2} width={{ xs: '300px', md: '500px' }}>
                <RHFTextField name="email" label="Email" />

                <RHFTextField
                  name="password"
                  label="Password"
                  type="password"
                />

                <LoadingButton
                  fullWidth
                  type="submit"
                  color="success"
                  variant="contained"
                  loading={isLoading || isSubmitting}
                  disabled={!isFormFilled || isSubmitting || isLoading}
                >
                  Login
                </LoadingButton>
              </Stack>
            </FormProvider>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
