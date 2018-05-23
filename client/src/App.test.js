import React from "react";
import Enzyme, { shallow, render } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import About from "./components/About";
import Answer from "./components/Answer";
import Contact from "./components/Contact";
import App from "./App";
import ReactDOM from "react-dom";
Enzyme.configure({ adapter: new Adapter() })

beforeAll(() => {
  global.localStorage = {
     i2x_token: 'someToken',
     getItem: function () {
        return 'someToken'
     }
  };
});

const setup = propOverrides => {
  const props = Object.assign({
    completedCount: 0,
    activeCount: 0,
    onClearCompleted: jest.fn(),
  }, propOverrides)

  const wrapper = shallow(<Footer {...props} />)

  return {
    props,
    wrapper,
    clear: wrapper.find('.clear-completed'),
    count: wrapper.find('.todo-count'),
  }
}

function componentSmokeTest(ComponentName, Component) {
  it(ComponentName + " shallow exists", () => {
    const ComponentName = shallow(Component)
    expect(ComponentName).toHaveLength(1);
  });

  it(ComponentName + " renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(Component, div);
  });

  it(ComponentName + " renders", () => {
    const ComponentName = render(Component);
    expect(ComponentName).toHaveLength(1);
  });
}

describe("About Component", () => {
  componentSmokeTest("About", <About/>);

  it("About shallow contains content", () => {
    const about = shallow(<About/>).find("div#about");
    const innerAbout = shallow(<About/>).find("div#inner-about-div");
    const li = shallow(<About/>).find("li");
    expect(about).toHaveLength(1);
    expect(innerAbout).toHaveLength(1);
    expect(li).toHaveLength(6);
  });
});

describe("Answer Component", () => {
  const options = ["hi", "there"];
  componentSmokeTest("Answer", <Answer options={options}/>);

  it("Answer shallow contains content", () => {
    const answer = shallow(<Answer options={options}/>).find("div.answer");
    const innerAnswer = shallow(<Answer options={options}/>).find("div#inner-answer-div");
    const listGroupItem = shallow(<Answer options={options}/>).find(".list-group-item");
    const innerAnswerText = innerAnswer.text();
    expect(answer).toHaveLength(1);
    expect(innerAnswer).toHaveLength(1);
    expect(listGroupItem).toHaveLength(2);
    expect(innerAnswerText).toContain("hithere");
  });
});

describe("Contact Component", () => {
  componentSmokeTest("Contact", <Contact/>);

  it("Contact shallow contains content", () => {
    const contact = shallow(<Contact/>).find("div.contact");
    const innerContact = shallow(<Contact/>).find("div#inner-contact-div");
    const paragraphs = shallow(<Contact/>).find("p");
    const innerContactText = innerContact.text();
    expect(contact).toHaveLength(1);
    expect(innerContact).toHaveLength(1);
    expect(paragraphs).toHaveLength(4);
    expect(innerContactText).toContain("Please direct any questions or concerns to:");
  });
});

describe("App Component", () => {
  componentSmokeTest("App", <App/>);
});



