import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import moment from 'moment';
function DataTable({ rows, columns }) {
  const formatDate = (date) => {
    const today = moment().startOf('day');
    const yesterday = moment().subtract(1, 'days').startOf('day');

    if (moment(date).isSame(today, 'd')) {
      return moment(date).format('LT'); // Display time if it's today
    } else if (moment(date).isSame(yesterday, 'd')) {
      return 'Yesterday';
    } else {
      return moment(date).format('MMM DD, LT'); // Display date and time for other dates
    }
  };

  const formattedRows = rows.map((row) => ({
    ...row,
    createdDate: formatDate(row.createdDate),
  }));

  return (
    <div className='container-flex'>
      <div style={{ height: '90vh', width: '95vw' }}>
        <DataGrid
          rows={formattedRows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export default DataTable;