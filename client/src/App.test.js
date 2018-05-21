import React from "react";
import Enzyme, { shallow } from "enzyme";
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

describe("About Component", () => {
  it("About shallow exists", () => {
    const about = shallow(<About/>)
    console.log(about);
    expect(about.find('div.about')).to.have.length(1);
  });

  it('About renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<About />, div);
  });

  it("About shallow contains paragraph", () => {
    const about = shallow(<About/>)
    console.log(about);
    expect(about.find("div")).toHaveLength(1);
  });
  
  it("about specific exists", () => {
    const about = <About/>
    console.log(about);
    expect(<About/>).toHaveLength(1);
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
  
  it("Answer specific exists", () => {
    const answer = <Answer options={options}/>
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
  
  it("Contact shallow exists", () => {
    const contact = <Contact/>
    console.log(contact);
    expect(contact).toHaveLength(1);
  });
});

describe("App Component", () => {
  it('app shallow renders without crashing', () => {
    const app = shallow(<App />);
    console.log(app)
    expect(app).toHaveLength(1);
  });
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});



