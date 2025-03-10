import * as Yup from 'yup';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
import LoadingButton from '@mui/lab/LoadingButton';

import { yupResolver } from '@hookform/resolvers/yup';

import {
  RHFSelect,
  RHFTextField,
  FormProvider,
} from '../../components/hook-form';

import { useRouter } from '../../hooks';

import {
  CLASS_OPTIONS,
  GENDER_OPTIONS,
  STUDENTS_DATA,
} from '../../_mock/studentsData';

import Iconify from '../../components/iconify/iconify';
import CustomCardHeader from '../../components/custom-components/card-header/custom-card-header';
import { MenuItem } from '@mui/material';

// ----------------------------------------------------------------------
const StudentsSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  gender: Yup.string().required('Gender is required'),
  fathersName: Yup.string().required('Fathers Name is required'),
  mothersName: Yup.string().required('Mothers Name is required'),
  phone: Yup.string().required('Phone is required'),
  class: Yup.string().required('Class is required'),
  address: Yup.string(),
});

// ----------------------------------------------------------------------

const StudentsForm = () => {
  const { id: studentId } = useParams();

  const router = useRouter();

  const isEditMode = !!studentId;

  const currentStudent = useMemo(() => {
    if (isEditMode) {
      return STUDENTS_DATA.find((student) => student.id === Number(studentId));
    } else {
      return {};
    }
  }, [isEditMode, studentId]);

  const defaultValues = useMemo(
    () => ({
      name: currentStudent.name || '',
      gender: currentStudent.gender || '',
      fathersName: currentStudent.fathersName || '',
      mothersName: currentStudent.mothersName || '',
      phone: currentStudent.phone || '',
      class: currentStudent.class || '',
      address: currentStudent.address || '',
    }),
    [currentStudent]
  );

  const methods = useForm({
    resolver: yupResolver(StudentsSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    console.log('data: ', data);
  });

  return (
    <>
      <CustomCardHeader
        title={isEditMode ? 'Edit Student' : 'Add Student'}
        action={
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<Iconify icon="mingcute:arrow-left-line" />}
            onClick={router.back}
          >
            Back
          </Button>
        }
      />
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Card sx={{ p: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <RHFTextField name="name" label="Name" fullWidth />
            </Grid>

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
              <RHFTextField name="phone" label="Phone" fullWidth />
            </Grid>

            <Grid item xs={12} md={6}>
              <RHFTextField name="fathersName" label="Fathers Name" fullWidth />
            </Grid>

            <Grid item xs={12} md={6}>
              <RHFTextField name="mothersName" label="Mothers Name" fullWidth />
            </Grid>

            <Grid item xs={12} md={6}>
              <RHFSelect name="class" label="Class">
                {CLASS_OPTIONS.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.lavel}
                  </MenuItem>
                ))}
              </RHFSelect>
            </Grid>

            <Grid item xs={12}>
              <RHFTextField name="address" label="Address" fullWidth />
            </Grid>
          </Grid>

          <Stack direction="row" pt={3} justifyContent="flex-end">
            <LoadingButton
              type="submit"
              color="primary"
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
    </>
  );
};

export default StudentsForm;
