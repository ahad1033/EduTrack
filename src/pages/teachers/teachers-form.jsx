import * as Yup from 'yup';
import { useEffect, useMemo } from 'react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';

import { yupResolver } from '@hookform/resolvers/yup';

import {
  RHFSelect,
  RHFTextField,
  FormProvider,
} from '../../components/hook-form';
import { useRouter } from '../../hooks';
import { GENDER_OPTIONS } from '../../_mock/studentsData';

import {
  useCreateTeacherMutation,
  useGetTeacherByIdQuery,
} from '../../redux/features/teacher/teacherApi';

import Iconify from '../../components/iconify/iconify';
import CustomCardHeader from '../../components/custom-components/card-header/custom-card-header';

// ----------------------------------------------------------------------
const TeachersSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  password: Yup.string().when('$isEditMode', {
    is: false,
    then: Yup.string().required('Password is required'),
    otherwise: Yup.string().nullable(),
  }),
  phone: Yup.string()
    .required('Phone is required')
    .matches(
      /^01[3-9]\d{8}$/,
      'Phone number must be a valid Bangladeshi number (e.g., 016xxxxxxxx)'
    ),
  gender: Yup.string().required('Gender is required'),
  subject: Yup.string().required('Subject is required'),
  address: Yup.string(),
});

// ----------------------------------------------------------------------

const TeachersForm = () => {
  const { id: teacherId } = useParams();

  const navigate = useNavigate();

  // GET TEACHER BY ID
  const { data: currentTeacher, isLoading: isTeacherLoading } = teacherId
    ? useGetTeacherByIdQuery(teacherId)
    : { data: null, isLoading: false };

  // CREATE TEACHER
  const [
    createTeacher,
    {
      isLoading: isCreateTeacherLoading,
      error: createTeacherError,
      isError: isCreateTeacherError,
    },
  ] = useCreateTeacherMutation();

  const router = useRouter();

  const isEditMode = !!teacherId;

  console.log(isEditMode);

  const methods = useForm({
    resolver: yupResolver(TeachersSchema),
    context: { isEditMode },
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      gender: '',
      subject: '',
      address: '',
    },
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  console.log('FORM ERRORS: ', errors);

  useEffect(() => {
    if (currentTeacher) {
      reset({
        name: currentTeacher.data.name,
        email: currentTeacher.data.email,
        phone: currentTeacher.data.phone,
        gender: currentTeacher.data.gender,
        subject: currentTeacher.data.subject,
        address: currentTeacher.data.address,
      });
    }
  }, [currentTeacher, reset]);

  const onSubmit = handleSubmit(async (data) => {
    const loadingToastId = toast.loading(
      isEditMode
        ? 'Updating teacher, please wait...'
        : 'Creating teacher, please wait...'
    );

    try {
      if (isEditMode) {
        console.log('edit mode data', data);
      } else {
        const result = await createTeacher(data).unwrap();

        if (result.success) {
          toast.success(result.message);

          reset();

          navigate('/teachers');
        }
      }
    } catch (error) {
      toast.error(
        error?.data?.error || 'Failed to process request. Please try again.'
      );
    } finally {
      toast.dismiss(loadingToastId);
    }
  });

  return (
    <>
      <CustomCardHeader
        title={isEditMode ? 'Edit Teacher' : 'Add Teacher'}
        action={
          <Button
            color="inherit"
            variant="outlined"
            onClick={router.back}
            startIcon={<Iconify icon="mingcute:arrow-left-line" />}
          >
            Back
          </Button>
        }
      />

      {isTeacherLoading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '70vh',
          }}
        >
          <CircularProgress size={40} />
        </Box>
      ) : (
        <FormProvider methods={methods} onSubmit={onSubmit}>
          <Card sx={{ p: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={isEditMode ? 12 : 6}>
                <RHFTextField name="name" label="Full Name" fullWidth />
              </Grid>

              <Grid item xs={12} md={6}>
                <RHFTextField name="phone" label="Phone" fullWidth />
              </Grid>

              <Grid item xs={12} md={6}>
                <RHFTextField
                  name="email"
                  label="Email"
                  fullWidth
                  InputProps={{ readOnly: isEditMode }}
                />
              </Grid>

              {!isEditMode && (
                <Grid item xs={12} md={6}>
                  <RHFTextField
                    name="password"
                    label="Password"
                    fullWidth
                    type="password"
                  />
                </Grid>
              )}

              <Grid item xs={12} md={6}>
                <RHFSelect name="gender" label="Gender">
                  {GENDER_OPTIONS.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.lavel}
                    </MenuItem>
                  ))}
                </RHFSelect>
              </Grid>

              <Grid item xs={12} md={6}>
                <RHFTextField name="subject" label="Subject" fullWidth />
              </Grid>

              <Grid item xs={12}>
                <RHFTextField name="address" label="Address" fullWidth />
              </Grid>
            </Grid>

            <Stack direction="row" pt={3} justifyContent="flex-end">
              <LoadingButton
                type="submit"
                color="success"
                variant="contained"
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? 'Submitting...'
                  : isEditMode
                    ? 'Update'
                    : 'Submit'}
              </LoadingButton>
            </Stack>
          </Card>
        </FormProvider>
      )}
    </>
  );
};

export default TeachersForm;
