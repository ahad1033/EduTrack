import { Helmet } from 'react-helmet-async';

// ------------------------------------------------------------

const CustomHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>EduTrack - {title}</title>
    </Helmet>
  );
};

export default CustomHelmet;
