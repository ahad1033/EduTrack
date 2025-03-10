import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import {
  Class as ClassesIcon,
  School as TeachersIcon,
  AttachMoney as FeesIcon,
  PeopleAlt as StudentsIcon,
} from '@mui/icons-material';

import CustomHelmet from '../../components/custom-components/helmet/custom-helmet';

// ------------------------------------------------------------

const Analytics = () => {
  // Sample data for the dashboard
  const stats = [
    {
      title: 'Total Students',
      value: 1250,
      icon: <StudentsIcon fontSize="large" color="success" />,
      change: '+5%',
    },
    {
      title: 'Total Teachers',
      value: 75,
      icon: <TeachersIcon fontSize="large" color="success" />,
      change: '+2%',
    },
    {
      title: 'Total Classes',
      value: 45,
      icon: <ClassesIcon fontSize="large" color="success" />,
      change: '0%',
    },
    {
      title: 'Fees Collected',
      value: '$125,000',
      icon: <FeesIcon fontSize="large" color="success" />,
      change: '+12%',
    },
  ];

  return (
    <Box>
      <CustomHelmet title="Analytics" />

      <Typography variant="h4" gutterBottom fontWeight="bold">
        Analytics Dashboard
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Overview of school statistics and performance metrics
      </Typography>

      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card elevation={3}>
              <CardContent
                sx={{ display: 'flex', flexDirection: 'column', p: 3 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                  }}
                >
                  <Box>
                    <Typography variant="h5" component="div" fontWeight="bold">
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.title}
                    </Typography>
                  </Box>
                  {stat.icon}
                </Box>
                <Typography
                  variant="caption"
                  color={
                    stat.change.startsWith('+')
                      ? 'success.main'
                      : 'text.secondary'
                  }
                  sx={{ mt: 2 }}
                >
                  {stat.change} from last month
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Student Enrollment Trend
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box
              sx={{
                height: 300,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="body2" color="text.secondary">
                [Chart Placeholder - Student enrollment over time]
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Subject Distribution
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box
              sx={{
                height: 300,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="body2" color="text.secondary">
                [Chart Placeholder - Pie chart of subjects]
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Academic Performance
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box
              sx={{
                height: 300,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="body2" color="text.secondary">
                [Chart Placeholder - Performance comparison by grade]
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;
