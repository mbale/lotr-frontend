/* eslint-disable import/no-extraneous-dependencies */
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Object.defineProperty(global, 'Node', {
  value: { firstElementChild: 'firstElementChild' },
});

enzyme.configure({ adapter: new Adapter() });
