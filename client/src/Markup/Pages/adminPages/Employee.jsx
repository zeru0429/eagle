import React, { useState, useEffect } from 'react';
import DataTable from '../../Components/DataTable/DataTable';
import axios from '../../../util/axios';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import ButtonMUI from '@mui/material/Button';

const columns = [
  { field: 'userId', headerName: 'ID', width: 70 },
  { field: 'username', headerName: 'Username', width: 150 },
  { field: 'role', headerName: 'Role', width: 100 },
  { field: 'firstname', headerName: 'First Name', width: 120 },
  { field: 'lastname', headerName: 'Last Name', width: 120 },
  { field: 'gender', headerName: 'Gender', width: 100 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 120,
    renderCell: (params) => {
      const [open, setOpen] = useState(false);
      const [userName, setUserName] = useState(params.row.username);
      const [role, setRole] = useState(params.row.role);
      const [firstName, setFirstName] = useState(params.row.firstname);
      const [lastName, setLastName] = useState(params.row.lastname);
      const [gender, setGender] = useState(params.row.gender);
      const [password,setPassword] = useState();

      const handleEdit = () => {
        setUserName(params.row.username);
        setRole(params.row.role);
        setFirstName(params.row.firstname);
        setLastName(params.row.lastname);
        setGender(params.row.gender);
        setOpen(true);
      };

      const handleSave = async () => {
        console.log('Save user222222:', params.row.userId, userName);
 
        const response = await axios.put(`api/user/:${params.row.userId}`, {
          username: userName,
          role: role,
          firstname: firstName,
          lastname: lastName,
          password: password,
          gender: gender
        });


        if (response.data.success) {
          window.alert(response.data.message);
      
          setOpen(false);
          fetchData();
        
      
        } else {
          console.log(response.data.message);
        }
      };

      const handleDelete = async () => {
        console.log('Delete user:', params.row.userId);
        const response = await axios.delete(`api/user/:${params.row.userId}`);
        
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

            <DialogTitle>Edit user</DialogTitle>
            
            <DialogContent>
            <br />
              <TextField
                required
                label="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                fullWidth
              />
              <br /><br />
              <TextField
              
                required
                label="Password"
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
              />
              <br /><br />
              <FormControl fullWidth>
                <InputLabel>Role</InputLabel>
                <br />
                <Select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="employee">Employee</MenuItem>
                </Select>
              </FormControl>
              <br /><br />
              <TextField
                required
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
              />
              <br /><br />
              <TextField
                required
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                fullWidth
              />
               <br /><br />
              <FormControl fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>
              </FormControl>
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

const Users = () => {
  const [userList, setUserList] = useState([]);
  const [addPopup, setAddPopup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('api/usersInfo');
      const modifiedData = response.data.data.map((user) => ({
        id: user.userId,
        ...user,
      }));
      setUserList(modifiedData);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = () => {
    setAddPopup(!addPopup);
  };

  const handleClose = () => {
    setAddPopup(false);
  };

  const handleSave = async () => {
    console.log('Save category:', username, password, firstName, lastName, gender);

    const response = await axios.post(`api/user/`, { username, password, firstName, lastName, gender, role });

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
      <div>Users</div>
      <ButtonMUI variant="contained" className="m-4" onClick={handleAdd}>
        Add User
      </ButtonMUI>

      {addPopup && (
        <Dialog open={addPopup} onClose={handleClose}>
          <DialogTitle>Edit Category</DialogTitle>
          <DialogContent>
            <TextField
              required
             
              label="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
            />
            <br /><br />
            <TextField
              required
              type='password'
            
              label="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />
            <br /><br />
            <FormControl fullWidth>
              <InputLabel>Role</InputLabel>
              <Select
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <MenuItem value="employee">Employee</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </FormControl>
            <br /><br />
            <TextField
              required
         
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              fullWidth
            />
            <br /><br />
            <TextField
              required
            
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              fullWidth
            />
            <br /><br />
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave} variant="contained" color="primary">
              Add User
            </Button>
          </DialogActions>
        </Dialog>
      )}

      <DataTable rows={userList} columns={columns} />
    </>
  );
};

export default Users;
