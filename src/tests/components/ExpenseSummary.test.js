import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should render expense list with expenses', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={2} expenseTotal={943400} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render expenseWord correctly when there is 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={9434001} />);
  expect(wrapper).toMatchSnapshot();
});