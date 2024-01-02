import React, { useState, useEffect } from 'react';
import DataTable from '../../Components/DataTable/DataTable';
import axios from '../../../util/axios';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import ButtonMUI from '@mui/material/Button';

const columns = [
  { field: 'waiterId', headerName: 'ID', width: 70 },
  { field: 'fullName', headerName: 'Full Name', width: 180 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 120,
    renderCell: (params) => {
      const [open, setOpen] = useState(false);
      const [waiterName, setWaiterName] = useState(params.row.fullName);

      const handleEdit = () => {
        setWaiterName(params.row.fullName);
        setOpen(true);
      };

      const handleSave = async () => {
        console.log('Save Waiter:', params.row.waiterId, waiterName);
        try {
          
          const response = await axios.put(`api/waiters/:${params.row.waiterId}`, { fullName: waiterName });

        if (response.data.success) {
          window.alert(response.data.message);
          setOpen(false);

          fetchData();
        }

        } catch (e) {
          window.alert(e.response.data.message);
          
        }
      };

      const handleDelete = async () => {
        console.log('Delete Waiter:', params.row.waiterId);
        const response = await axios.delete(`api/waiters/:${params.row.waiterId}`);

        if (response.data.success) {
          window.alert(response.data.message);
          fetchData();
        } else {
          console.log(response.data.message);
        }
      };

      const handleClose = () => {
        setOpen(false);
      };



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
    },
  },
];

const Waiters = () => {
  const [waiters, setWaiters] = useState([]);
  const [addPopup, setAddPopup] = useState(false);
  const [waitersName, setWaitersName] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('api/waiters');
      const modifiedData = response.data.data.map((waiter) => ({
        id: waiter.waiterId,
        ...waiter,
      }));
      setWaiters(modifiedData);
    } catch (error) {
      console.error('Error fetching waiters:', error);
    }
  };



  const handleAdd = () => {
    setAddPopup(!addPopup);
  };

  const handleClose = () => {
    setAddPopup(false);
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleSave = async () => {
    console.log('Save waiter:',waitersName );
    const response = await axios.post(`/api/waiters`, { fullName: waitersName });

    if (response.data.success) {
      window.alert(response.data.message);
      setAddPopup(false);

      fetchData();
    } else {
      console.log(response.data.message);
    }
  };

  return (
    <>
      <div>Waiters</div>
      <ButtonMUI variant="contained" className="m-4" onClick={handleAdd}>
        Add Waiter
      </ButtonMUI>

      {addPopup && (
        <Dialog open={addPopup} onClose={handleClose}>
          <DialogTitle>Add Category</DialogTitle>
          <DialogContent>
              <TextField
                label="Full Name"
                value={waitersName}
                onChange={(e) => setWaitersName(e.target.value)}
                fullWidth
              />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave} variant="contained" color="primary">
              Add Category
            </Button>
          </DialogActions>
        </Dialog>
      )}

      <DataTable rows={waiters} columns={columns} />
    </>
  );
};

export default Waiters;