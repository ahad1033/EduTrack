import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

// ------------------------------------------------------------

const ConfirmDialog = ({ title, message, action, open, onClose, ...other }) => {
  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose} {...other}>
      <DialogTitle sx={{ pb: 2 }}>{title}</DialogTitle>

      {message && (
        <DialogContent>
          <DialogContent sx={{ typography: 'body2' }}>{message}</DialogContent>
        </DialogContent>
      )}

      <DialogActions>
        {action && action}

        <Button variant="outlined" color="inherit" onClick={onClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
