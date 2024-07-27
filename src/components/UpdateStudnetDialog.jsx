import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

export default function UpdateStudnetDialog({ editDialogOpen, currentStudent, handleDialogClose, handleChange, handleSaveStudent }) {
  return (
    <Dialog open={editDialogOpen} onClose={handleDialogClose}>
      <DialogTitle>Update Student</DialogTitle>
      <DialogContent>
        <TextField 
          margin="dense"
          name="name"  // Corrected name value
          label="Student Name"
          type="text"
          fullWidth
          value={currentStudent?.name || ''}
          onChange={handleChange}
        />

        <TextField
          margin="dense"
          name="age"  // Corrected name value
          label="Student Age"
          type="number"
          fullWidth
          value={currentStudent?.age || ''}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose}>Cancel</Button>
        <Button onClick={handleSaveStudent}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
