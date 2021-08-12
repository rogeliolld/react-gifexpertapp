import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas <GifGridItem />", () => {
  const title = "Un titulo";
  const url = "https://localhost/algo.png";

  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("debe de mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe tener un párrafo con el title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("debe tener la imagen igual al url y alt de los props", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("debe de tener la Class Css animate__fadeInDown", () => {
    const div = wrapper.find("div");

    const className = div.prop("className");

    expect(className.includes("animate__fadeInDown")).toBe(true);
  });
});
