import * as Yup from 'yup';
import toast from 'react-hot-toast';

import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { verifyToken } from '../../../utils/verifyToken';
import { RHFTextField } from '../../../components/hook-form';

import { useLoginMutation } from '../../../redux/features/auth/authApi';
import { setUser } from '../../../redux/features/auth/authSlice';

import FormProvider from '../../../components/hook-form/form-provider';
import CustomHelmet from '../../../components/custom-components/helmet/custom-helmet';

// ----------------------------------------------------------------------
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

// ----------------------------------------------------------------------

const LoginPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [login, { data, isLoading, error }] = useLoginMutation();

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
    const loadingToastId = toast.loading('Logging in...');
    try {
      const response = await login(data).unwrap();

      if (response.success) {
        const user = await verifyToken(response?.data?.accessToken);

        dispatch(setUser({ user, token: response?.data?.accessToken }));

        toast.success(response.message || 'Logged in successfully!', {
          id: loadingToastId,
        });

        await new Promise((resolve) => setTimeout(resolve, 1000));

        navigate('/', { replace: true });
      }
    } catch (err) {
      toast.error(err?.data?.error || 'Login failed. Please try again.', {
        id: loadingToastId,
      });

      await new Promise((resolve) => setTimeout(resolve, 1500));
    } finally {
      toast.dismiss(loadingToastId);
    }
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
