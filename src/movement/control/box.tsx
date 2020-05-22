import React from 'react';
import { Card, Tooltip } from 'antd';
import ControlForm from 'movement/control/form';

const ControlBox = () => (
  <Card
    title="Movement"
    extra={(
      <Tooltip
        title="n(orth) s(outh) e(ast) w(west)"
        arrowPointAtCenter
      >
        <span className="text-purple-500 opacity-75 font-medium">Help</span>
      </Tooltip>
    )}
  >
    <ControlForm />
  </Card>
);

export default ControlBox;
