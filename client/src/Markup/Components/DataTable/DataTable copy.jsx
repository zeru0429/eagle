import * as React from 'react';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';

const DataTableTwo = ({ rows, columns }) => {
  const [open, setOpen] = React.useState(false);
  const [waiterName, setWaiterName] = React.useState('');

  const handleEdit = () => {
    setOpen(true);
    setWaiterName('');
  };

  const handleSave = () => {
    console.log('Save Waiter:', waiterName);
    // Add your save logic here
    setOpen(false);
  };

  const handleDelete = () => {
    console.log('Delete Waiter');
    // Add your delete logic here
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderActionsCell = (params) => {
    return (
      <>
        <IconButton onClick={handleEdit}>
          <Edit />
        </IconButton>
        <IconButton onClick={handleDelete}>
          <Delete />
        </IconButton>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Waiter</DialogTitle>
          <DialogContent>
            <TextField
              label="Full Name"
              value={waiterName}
              onChange={(e) => setWaiterName(e.target.value)}
              fullWidth
            />
            <TextField
              label="Full Name"
              value={waiterName}
              onChange={(e) => setWaiterName(e.target.value)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave} variant="contained" color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };

  const columnsWithActions = [...columns, { field: 'actions', headerName: 'Actions', width: 120, renderCell: renderActionsCell }];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columnsWithActions} rowKey={(row) => row.userId} />
    </div>
  );
};

export default DataTableTwo;