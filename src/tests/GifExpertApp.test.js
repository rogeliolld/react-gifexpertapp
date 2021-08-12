import React from "react";
import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp"

describe('Pruebas en <GifExpertApp/>', () => {
    test('debe mostarse correctamente', () => {
        const wrapper = shallow(<GifExpertApp/>)
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar una lista de categoria', () => {
        const categories = ['one punch', 'Dragon Ball'];

        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect (wrapper).toMatchSnapshot();
        expect (wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
    
})
