import React, { useState, useEffect } from 'react';
import DataTable from '../../Components/DataTable/DataTable';
import axios from '../../../util/axios';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import ButtonMUI from '@mui/material/Button';

const columns = [
  { field: 'categoryId', headerName: 'ID', width: 70 },
  { field: 'categoryName', headerName: 'English Name', width: 130 },
  { field: 'amharicName', headerName: 'Amharic Name', width: 130 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 120,
    renderCell: (params) => {
      const [open, setOpen] = useState(false);
      const [categoryName, setCategoryName] = useState(params.row.categoryName);
      const [amharicName, setAmharicName] = useState(params.row.amharicName);

      const handleEdit = () => {
        setCategoryName(params.row.categoryName);
        setAmharicName(params.row.amharicName);
        setOpen(true);
      };

      const handleSave = async () => {
        console.log('Save category:', params.row.categoryId, categoryName, amharicName);
        const response = await axios.put(`api/catagory/:${params.row.categoryId}`, { categoryName, amharicName });

        if (response.data.success) {
          window.alert(response.data.message);
          setOpen(false);

          fetchData();
        } else {
          console.log(response.data.message);
        }
      };

      const handleDelete = async () => {
        console.log('Delete category:', params.row.categoryId);
        const response = await axios.delete(`api/catagory/:${params.row.categoryId}`);
        // console.log(response.data.message);
        if (response.data.sucess) {

          window.alert(response.data.message);
          fetchData();
        } else {
          // console.log(response.data.message);
          console.log(response.data.message);
        }
      };

      const handleClose = () => {
        setOpen(false);
      };

      const fetchData = async () => {
        try {
          const response = await axios.get('/api/category');
          const modifiedData = response.data.data.map((category) => ({
            id: category.categoryId,
            ...category,
          }));
          setCategories(modifiedData);
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
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
            <DialogTitle>Edit Category</DialogTitle>
            <DialogContent>
              <TextField
                label="Category Name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                fullWidth
              />
              <br /> <br />
              <TextField
                label="Amharic Name"
                value={amharicName}
                onChange={(e) => setAmharicName(e.target.value)}
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



const Category = () => {
  const [categories, setCategories] = useState([]);
  const [addPopup, setAddPopup] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [categoryAmharicName, setCategoryAmharicName] = useState('');

  const handleAdd = () => {
    setAddPopup(!addPopup);
  };

  const handleClose = () => {
    setAddPopup(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('api/catagory');
      const modifiedData = response.data.data.map((category) => ({
        id: category.categoryId,
        ...category,
      }));
      setCategories(modifiedData);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleSave = async () => {
    console.log('Save category:', categoryName, categoryAmharicName);
    const response = await axios.post(`api/catagory/`, { categoryName:categoryName, amharicName:categoryAmharicName });

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
      <div>Category</div>
      <ButtonMUI variant="contained" className="m-4" onClick={handleAdd}>
        Add Category
      </ButtonMUI>

      {addPopup && (
        <Dialog open={addPopup} onClose={handleClose}>
          <DialogTitle>Edit Category</DialogTitle>
          <DialogContent>
            <TextField
              label="Category Name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              fullWidth
            />
            <br /><br />
            <TextField
              label="Amharic Name"
              value={categoryAmharicName}
              onChange={(e) => setCategoryAmharicName(e.target.value)}
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

      <DataTable rows={categories} columns={columns} />
    </>
  );
};

export default Category;