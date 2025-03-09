import * as Yup from 'yup';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import LoadingButton from '@mui/lab/LoadingButton';

import { yupResolver } from '@hookform/resolvers/yup';

import { FormProvider, RHFTextField } from '../../components/hook-form';

import { TEACHERS_DATA } from '../../_mock/teachersData';
import CustomCardHeader from '../../components/custom-components/card-header/custom-card-header';
import { useRouter } from '../../hooks';
import Iconify from '../../components/iconify/iconify';

// ----------------------------------------------------------------------
const TeachersSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  phone: Yup.string().required('Phone is required'),
  subject: Yup.string().required('Subject is required'),
  address: Yup.string(),
});

// ----------------------------------------------------------------------

const TeachersForm = () => {
  const { id: teacherId } = useParams();

  const router = useRouter();

  const isEditMode = !!teacherId;

  const currentTeacher = useMemo(() => {
    if (isEditMode) {
      return TEACHERS_DATA.find((teacher) => teacher.id === Number(teacherId));
    } else {
      return {};
    }
  }, [isEditMode, teacherId]);

  console.log(isEditMode);

  const defaultValues = useMemo(
    () => ({
      name: currentTeacher.name || '',
      email: currentTeacher.email || '',
      phone: currentTeacher.phone || '',
      subject: currentTeacher.subject || '',
      address: currentTeacher.address || '',
    }),
    [currentTeacher]
  );

  const methods = useForm({
    resolver: yupResolver(TeachersSchema),
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
        title={isEditMode ? 'Edit Teacher' : 'Add Teacher'}
        action={
          <Button
            variant="outlined"
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
              <RHFTextField name="email" label="Email" fullWidth />
            </Grid>

            <Grid item xs={12} md={6}>
              <RHFTextField name="phone" label="Phone" fullWidth />
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

export default TeachersForm;
