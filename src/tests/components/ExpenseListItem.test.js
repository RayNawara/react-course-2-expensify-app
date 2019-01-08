import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render expense list item', () => {
  const wrapper = shallow(<ExpenseListItem { ...expenses[0] }/>);
  expect(wrapper).toMatchSnapshot();
});