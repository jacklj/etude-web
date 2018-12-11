import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import Label from 'recharts/lib/component/Label';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

import { calculateGraphData } from '../../redux/events/events.selectors';

const renderTooltipValue = value => `${value} mins`;

function SimpleLineChart({ graphData }) {
  return (
    // 99% per https://github.com/recharts/recharts/issues/172
    <ResponsiveContainer width="99%" height={320}>
      <LineChart data={graphData}>
        <XAxis dataKey="name" />
        <YAxis>
          <Label value="Minutes" angle={-90} offset={-15} position="left" />
        </YAxis>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip formatter={renderTooltipValue} />
        <Legend />
        <Line type="monotone" dataKey="Practice Time" stroke="#82ca9d" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

SimpleLineChart.propTypes = {
  graphData: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  graphData: calculateGraphData(state),
});

export default connect(mapStateToProps)(SimpleLineChart);
