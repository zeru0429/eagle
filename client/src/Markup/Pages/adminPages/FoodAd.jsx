import React, { useState, useEffect } from 'react';
import DataTable from '../../Components/DataTable/DataTable';
import axios from '../../../util/axios';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Input, MenuItem } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import ButtonMUI from '@mui/material/Button';

const columns = [
  { field: 'foodId', headerName: 'ID', width: 70 },
  { field: 'foodName', headerName: 'English Name', width: 130 },
  { field: 'amharicName', headerName: 'Amharic Name', width: 130 },
  { field: 'categoryId', headerName: 'Category ID', width: 130 }, // Corrected field name
  { field: 'price', headerName: 'Price', width: 130 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 120,
    renderCell: (params) => {
      const [open, setOpen] = useState(false);
      const [foodName, setFoodName] = useState(params.row.foodName);
      const [amharicName, setAmharicName] = useState(params.row.amharicName);
      const [price, setPrice] = useState(params.row.price);
      const [categoryId, setCategoryId] = useState(params.row.categoryId);

      const handleEdit = () => {
        setFoodName(params.row.foodName);
        setAmharicName(params.row.amharicName);
        setPrice(params.row.price);
        setCategoryId(params.row.categoryId);
        setOpen(true);
      };

      const handleSave = async () => {
        console.log('Save food:', params.row.foodId, foodName, amharicName);
        const response = await axios.put(`api/food/${params.row.foodId}`, { foodName, amharicName, price, categoryId });

        if (response.data.success) {
          window.alert(response.data.message);
          setOpen(false);
          fetchData();
        } else {
          console.log(response.data.message);
        }
      };

      const handleDelete = async () => {
        console.log('Delete food:', params.row.foodId);
        const response = await axios.delete(`api/food/${params.row.foodId}`);

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

      const fetchData = async () => {
        try {
          const response = await axios.get('api/food');
          const modifiedData = response.data.data.map((food) => ({
            id: food.foodId,
            ...food,
          }));
          setFoods(modifiedData); // Fix the function name here
          // console.log(foods);
        } catch (error) {
          console.error('Error fetching foods:', error);
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
            <DialogTitle>Edit food</DialogTitle>
            <DialogContent>
              <TextField
                label="Food Name"
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
                fullWidth
              />
              <br/><br/>
              <TextField
                label="Amharic Name"
                value={amharicName}
                onChange={(e) => setAmharicName(e.target.value)}
                fullWidth
              />
              <br/><br/>
              <TextField
                label="Category ID"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                fullWidth
              />
              <br/><br/>
              <TextField
                label="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
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

const FoodAd = () => {
  const [foods, setFoods] = useState([]);
  const [categories, setCategories] = useState([]);
  const [addPopup, setAddPopup] = useState(false);
  const [foodName, setFoodName] = useState('');
  const [amharicName, setAmharicName] = useState('');
  const [price, setPrice] = useState('');
  const [categoryId, setCategoryId] = useState();
  const [catagorysss, setCatagorysss] = useState([]);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    fetchData();
    fetchCategory();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('api/food');
      const modifiedData = response.data.data.map((food) => ({
        id: food.foodId,
        ...food,
      }));
      setFoods(modifiedData);
    } catch (error) {
      console.error('Error fetching foods:', error);
    }
  };

  const fetchCategory = async () => {
    try {
      const response = await axios.get('api/catagory');
      const modifiedData = response.data.data.map((food) => ({
        id: food.categoryId,
        ...food,
      }));
      setCatagorysss(modifiedData);
    } catch (error) {
      console.error('Error fetching foods:', error);
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
    try {
      const formData = new FormData();
      formData.append('foodName', foodName);
      formData.append('amharicName', amharicName);
      formData.append('price', price);
      formData.append('categoryId', categoryId);
      formData.append('image', imageFile);
      
      const response = await axios.post('api/food/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    

      if (response.data.success) {
        window.alert(response.data.message);
        setAddPopup(false);
        fetchData();
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <>
      <div>Food</div>
      <ButtonMUI variant="contained" className="m-4" onClick={handleAdd}>
        Add Food
      </ButtonMUI>

      {addPopup && (
        <Dialog open={addPopup} onClose={handleClose}>
          <DialogTitle>Edit Category</DialogTitle>
          <DialogContent>
            <TextField
              select
              label="Category Name"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              fullWidth
            >
              {catagorysss.map((category) => (
                <MenuItem key={category.categoryId} value={category.categoryId}>
                  {category.categoryName}
                </MenuItem>
              ))}
            </TextField>
            <br/><br/>
            <TextField
              label="Food Name"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              fullWidth
            />
            <br/><br/>
            <TextField
              label="Amharic Name"
              value={amharicName}
              onChange={(e) => setAmharicName(e.target.value)}
              fullWidth
            />
            <br/><br/>
            <TextField
              label="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              fullWidth
            />
            <Input
              type="file"
              onChange={(e) => setImageFile(e.target.files[0])} // Handle file selection
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave} variant="contained" color="primary">
              Add Food
            </Button>
          </DialogActions>
        </Dialog>
      )}
      <DataTable rows={foods} columns={columns} />
    </>
  );
};

export default FoodAd;
