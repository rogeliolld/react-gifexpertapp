import React from "react";
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en <AddCategory/>", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach( () =>{
    jest.clearAllMocks();
     wrapper = shallow(<AddCategory setCategories={setCategories} />);
  }

  )

  test("debe mostar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de cambiar la caja de texto', () => {
      const input = wrapper.find('input');
      const value = 'Hola mundo';

      input.simulate('change', { target: {value} })

      expect (wrapper.find('p').text().trim()).toBe(value);
  });

  test('NO debe postear la informacion onSubmit', () => {

    wrapper.find('form').simulate('submit', {preventDefault(){} } );

    expect (setCategories).not.toHaveBeenCalled();
  })
  
  test('debe de llamar el setCategories y limpiar la caja de texto', () => {
    
    const value = 'Hola mundo';
    
    // 1. Simular el inputChange
    wrapper.find('input').simulate('change', { target: {value} });

    // 2. Simular el submit
    wrapper.find('form').simulate('submit', {preventDefault(){} } );

    // 3. setCategories se debe de haber llamado
    expect (setCategories).toHaveBeenCalled();
    // se debe enviar una funcion
    expect (setCategories).toHaveBeenCalledWith( expect.any(Function));

    // 4. el valor del input debe de estar ''
    expect (wrapper.find('input').prop('value')).toBe('');

    
    
  })
  

});
