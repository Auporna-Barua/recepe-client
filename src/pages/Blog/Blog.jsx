import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { FaArrowDown } from "react-icons/fa";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="p-5">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <div className="text-center">
              <button
                onClick={toPdf}
                className="btn bg-orange-400 hover:bg-orange-400 border-none font-lg font-bold"
              >
                Generate Pdf <FaArrowDown className="ms-3"></FaArrowDown>
              </button>
            </div>
          )}
        </Pdf>

        <div ref={ref} className="p-5">
          <p className="font-bold text-2xl mt-5">
            1. Tell us the differences between uncontrolled and controlled
            components.
          </p>

          <p className="font-semibold text-lg mt-3">
            <span className="text-lg font-bold underline me-2">Ans:</span>{" "}
            <br /> <span className="font-bold">Control Component:</span> A
            Controlled Component is one that takes its current value through
            props and notifies changes through callbacks like onChange. A parent
            component "controls" it by handling the callback and managing its
            own state and passing the new values as props to the controlled
            component. <br />
            <span className="font-bold mt-2">uncontrolled Component:</span> A
            Uncontrolled Component is one that stores its own state internally,
            and you query the DOM using a ref to find its current value when you
            need it. This is a bit more like traditional HTML.
          </p>

          <p className="font-bold text-2xl mt-5">
            2. How to validate React props using PropTypes
          </p>

          <p className="font-semibold text-lg mt-3">
            <span className="text-lg font-bold underline me-2">Ans:</span> The
            step's of validate React props useing PropTypes 1. mport the
            PropTypes library at the top of your component file. <br />
            2. Define the propTypes property as a static property of your
            component class. <br />
            3. Define the expected types for each prop <br />
            4. If need Add a defaultProp property for each prop.
          </p>

          <p className="font-bold text-2xl mt-5">
            3. Tell us the difference between nodejs and express js.
          </p>
          <p className="font-semibold text-lg mt-3">
            <span className="text-lg font-bold underline me-2">Ans:</span>{" "}
            <br />
            <span className="font-bold mt-2">NodeJS:</span> Node.js is a runtime
            environment for executing JavaScript code outside of a web browser{" "}
            <br />
            <span className="font-bold mt-2">ExpressJS</span>: Express.js is a
            web framework built on top of Node.js, providing features for
            building web applications such as routing, middleware, and
            templating.
          </p>
          <p className="font-bold text-2xl mt-5">
            4. What is a custom hook, and why will you create a custom hook?
          </p>
          <p className="font-semibold text-lg mt-3">
            <span className="text-lg font-bold underline me-2">Ans:</span> A
            custom hook is a reusable function in React that encapsulates
            stateful logic to make it easier to share between components.
            Developers create custom hooks to promote code reuse and abstraction
            of complex logic, making components simpler and easier to maintain.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
