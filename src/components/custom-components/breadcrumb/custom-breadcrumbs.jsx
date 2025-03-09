// import { Link as RouterLink } from 'react-router-dom';
// import { Box, Link, Typography, Breadcrumbs, Stack } from '@mui/material';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import HomeIcon from '@mui/icons-material/Home';

// // ----------------------------------------------------------------------

// const CustomBreadcrumbs = ({ title, links = [], actions = null }) => {
// //   const lastLink = links[links.length - 1];
// const lastLink = links?.length ? links[links.length - 1] : null;

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         mb: 3,
//       }}
//     >
//       <Stack spacing={1}>
//         {/* Title */}
//         <Typography variant="h4">{title}</Typography>

//         {/* Breadcrumbs */}
//         {links?.length > 0 && (
//           <Breadcrumbs
//             separator={<NavigateNextIcon fontSize="small" />}
//             aria-label="breadcrumb"
//           >
//             {/* Home link is always first */}
//             <Link
//               component={RouterLink}
//               to="/"
//               underline="hover"
//               color="text.secondary"
//               sx={{ display: 'flex', alignItems: 'center' }}
//             >
//               <HomeIcon sx={{ mr: 0.5, width: 20, height: 20 }} />
//               Home
//             </Link>

//             {/* Map through all links except the last one */}
//             {links?.slice(0, -1).map((link) => (
//               <Link
//                 key={link.title}
//                 component={RouterLink}
//                 to={link.href || '#'}
//                 underline="hover"
//                 color="text.secondary"
//               >
//                 {link.title}
//               </Link>
//             ))}

//             {/* Last link (current page) */}
//             {lastLink && (
//               <Typography color="text.primary">{lastLink.title}</Typography>
//             )}
//           </Breadcrumbs>
//         )}
//       </Stack>

//       {/* Action buttons */}
//       {actions && <Box>{actions}</Box>}
//     </Box>
//   );
// };

// export default CustomBreadcrumbs;
