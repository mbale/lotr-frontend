import React from 'react';
import { Button, Input, Form } from 'antd';
import { useDispatch } from 'react-redux';
import movementSlice from 'movement/slice';
import checkStepsInputFormat from 'shared/validation';

const { TextArea } = Input;
const { Item: FormItem } = Form;

type ControlFormProps = {
  loading?: boolean
};

const ControlForm = ({ loading } : ControlFormProps) => {
  const dispatch = useDispatch();

  const onFinish = ({ steps }: { steps: string }) => {
    // format: 's,v,w'
    dispatch(
      movementSlice.actions.setStep({
        steps,
      }),
    );
  };

  return (
    <Form
      name="asd"
      className="font-sans"
      onFinish={onFinish}
    >
      <FormItem
        label="Your moves"
        name="steps"
        className="mb-4"
        rules={[
          {
            required: true,
            async validator(_rule, value: string) {
              // let's check if user submitted anything
              if (!value) {
                throw new Error('Please input your movements');
              }

              // and if it's in correct state
              const isValid = checkStepsInputFormat(value);

              if (!isValid) {
                throw new Error('Invalid format for movements');
              }
            },
          },
        ]}
      >
        <TextArea placeholder="n,s,e,w" />
      </FormItem>
      <FormItem>
        <Button type="primary" loading={loading} htmlType="submit">
          {
            loading ? 'Checking..' : 'Send'
          }
        </Button>
      </FormItem>
    </Form>
  );
};

export default ControlForm;
