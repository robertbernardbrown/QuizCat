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

describe("About Component", () => {
  it("About shallow exists", () => {
    const about = shallow(<About/>)
    expect(about).toHaveLength(1);
  });

  it('About renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<About />, div);
  });

  it("About shallow contains content", () => {
    const about = shallow(<About/>).find("div#about");
    const innerAbout = shallow(<About/>).find("div#inner-about-div");
    const li = shallow(<About/>).find("li");
    expect(about).toHaveLength(1);
    expect(innerAbout).toHaveLength(1);
    expect(li).toHaveLength(6);
  });
  
  it("About renders", () => {
    const about = render(<About/>);
    console.log(about);
    expect(about).toHaveLength(1);
  });
    
});

describe("Answer Component", () => {
  const options = ["hi", "there"];

  it("Answer shallow exists", () => {
    const answer = shallow(<Answer options={options}/>)
    console.log(answer);
    expect(answer).toHaveLength(1);
  });

  it('Answer renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Answer options={options}/>, div);
  });
  
  it("Answer renders", () => {
    const answer = render(<Answer options={options}/>);
    console.log(answer);
    expect(answer).toHaveLength(1);
  });
});

describe("Contact Component", () => {
  it("Contact shallow exists", () => {
    const contact = shallow(<Contact/>)
    console.log(contact);
    expect(contact).toHaveLength(1);
  });

  it('Contact renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Contact/>, div);
  });
  
  it("Contact renders", () => {
    const contact = render(<Contact/>);
    console.log(contact);
    expect(contact).toHaveLength(1);
  });
});

describe("App Component", () => {
  it('App shallow renders without crashing', () => {
    const app = shallow(<App />);
    console.log(app)
    expect(app).toHaveLength(1);
  });

  it('App renders without crashing', () => {
    const div = document.createElement('div');
    console.log(div);
    ReactDOM.render(<App />, div);
  });

  it("App renders", () => {
    const app = render(<App/>);
    console.log(app);
    expect(app).toHaveLength(1);
  });
  
});



