import React from 'react';

import { shallow } from 'enzyme';
import ButtonPanel from '../ButtonPanel';

describe('ButtonPanel component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ButtonPanel />);
  });

  it('contains class btnPanel', () => {
    expect(wrapper.find('.btnPanel')).toBeTruthy();
  });

  it('contains class group', () => {
    expect(wrapper.find('.group')).toBeTruthy();
  });

  it('contains the Button component', () => {
    expect(wrapper.find('Button')).toBeTruthy();
  });
});
