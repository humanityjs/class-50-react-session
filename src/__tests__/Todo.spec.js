import React from 'react';
import { shallow } from 'enzyme';
import Todo from '../Todo';


describe('Todo component', () => {
  it('should render without crashing', () => {
    const toggleMockFunction = jest.fn();
    const todoWrapper = shallow(
      <Todo
        todo={{
          description: '.some description',
          completed: true,
          id: '.someId'
        }}
        toggleTodo={toggleMockFunction}
      />);
    const inputElement = todoWrapper.find('input');
    inputElement.simulate('click', toggleMockFunction);
    expect(todoWrapper.type()).toEqual('li');
  });
});
