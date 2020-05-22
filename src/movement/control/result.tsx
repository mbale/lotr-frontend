import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';
import { Result } from 'antd';

const ControlResult = () => {
  const outcome = useSelector(({ movements }: RootState) => movements.outcome);

  return (
    <Result
      icon={(
        <div className="flex flex-row justify-center">
          <svg
            className="w-12 h-12"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor" />
          </svg>
        </div>
      )}
      title={`${outcome}`}
    />
  );
};

export default ControlResult;
