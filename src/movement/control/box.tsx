import React from 'react';
import { Card, Tooltip } from 'antd';
import ControlForm from 'movement/control/form';
import ControlResult from 'movement/control/result';
import { RootState } from 'app/store';
import { useSelector } from 'react-redux';

const ControlBox = () => {
  const outcome = useSelector(({ movements }: RootState) => movements.outcome);

  return (
    <Card
      className="md:w-1/2"
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
      {
        outcome && <ControlResult />
      }
    </Card>
  );
};

export default ControlBox;
