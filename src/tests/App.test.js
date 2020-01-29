import React from 'react';
import { configure, shallow } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import App from '../App';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('should render App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });
});