import React from "react";
import Enzyme, { shallow, render } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import About from "./components/About";
import Answer from "./components/Answer";
import Contact from "./components/Contact";
import CountdownComp from "./components/CountdownComp";
import ErrorBoundary from "./components/ErrorBoundary";

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

var componentSmokeTest = (ComponentName, Component) => {

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

describe("App Component", () => {
  componentSmokeTest("App", <App/>);
});

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

describe("Countdown Component", () => {
  componentSmokeTest("CountdownComp", <CountdownComp/>);

  it("CountdownComp shallow contains content", () => {
    const countdownComp = shallow(<CountdownComp/>).find("div.countdown-container");
    const innerCountdownComp = shallow(<CountdownComp/>).find("div#countdown");
    const paragraphs = shallow(<CountdownComp/>).find("p");
    const paragraphsText = paragraphs.text();
    expect(countdownComp).toHaveLength(1);
    expect(innerCountdownComp).toHaveLength(1);
    expect(paragraphs).toHaveLength(1);
    expect(paragraphsText).toContain("Remember, miss one question and you're outta here!");
  });
});

describe("ErrorBoundary Component", () => {

  it("ErrorBoundary shallow does not contain content when hasError is false", () => {
    const errorBoundary = shallow(<ErrorBoundary/>).setState({hasError:false}).text();
    expect(errorBoundary).toContain("");
  });

  it("ErrorBoundary shallow contains content when hasError is true", () => {
    const errorBoundary = shallow(<ErrorBoundary/>).setState({hasError:true}).text();
    expect(errorBoundary).toContain("Something went wrong");
  });
});


