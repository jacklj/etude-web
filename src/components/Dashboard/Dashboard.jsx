import React from 'react';
import Typography from '@material-ui/core/Typography';

import SimpleLineChart from './SimpleLineChart';
import SimpleTable from './SimpleTable';

const Dashboard = () => (
  <div>
    <Typography variant="h4" gutterBottom component="h2">
      Practice in the last week
    </Typography>
    <Typography component="div" style={{ marginLeft: -22 }}>
      <SimpleLineChart />
    </Typography>
    <Typography variant="h4" gutterBottom component="h2">
      Products
    </Typography>
    <div style={{ height: 320 }}>
      <SimpleTable />
    </div>
  </div>
);

export default Dashboard;
