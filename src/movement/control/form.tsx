import React from 'react';
import { Button, Input, Form } from 'antd';
import { useDispatch } from 'react-redux';
import movementSlice from 'movement/slice';
import checkStepsInputFormat from 'shared/validation';
import { StepsAPIResponse } from 'shared/dto';

const { TextArea } = Input;
const { Item: FormItem } = Form;

const ControlForm = () => {
  const dispatch = useDispatch();

  const onFinish = async ({ steps }: { steps: string }) => {
    // format: 's,v,w'
    dispatch(
      movementSlice.actions.setStep({
        steps,
      }),
    );

    // TODO: env variables
    const url = new URL(`http://localhost:8080/api/steps?steps=${steps}`);
    const response = await fetch(
      url.toString(),
    );

    const data: StepsAPIResponse = await response.json();

    // update store with step results
    if (data.outcome) {
      const { outcome } = data;

      dispatch(
        movementSlice.actions.setOutcome({
          outcome,
        }),
      );
    }
  };

  return (
    <Form
      name="movements"
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
        <Button type="primary" htmlType="submit">
          Send
        </Button>
      </FormItem>
    </Form>
  );
};

export default ControlForm;
