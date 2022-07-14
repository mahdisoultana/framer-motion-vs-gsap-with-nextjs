import React from "react";
import { gsap } from "gsap";
// import RevelText from "../components/animation/gsap/RevelText";
import RevelText from "../components/animation/framer/RevelText";
function Home() {
  // React.createElement('section',{...})//
  // this home components just responsible for returning a reactElement and has nothing to do with the dom and it even doesn't know that we are woking in the web or the mobile ... it's just responsible for creating a components ui and 'React-dom ' specifcly ReactDOM.render method how is reponsible for creating the nodes dom elements we give it the import export components React.createElement and his (ReactDom.render) responsible to create all the dom elements into the view web
  //Gsap needs the Real DOM elements to make the animation work >> to do that we need to pass a reference into the prop ref the return value from useRef() hook and after the dom renders all the elements we can access the value of our node the varaible that we've passed as a ref prop

  return (
    <section className="h-screen py-20">
      <div className="max-w-5xl m-auto">
        <div className="font-bold text-5xl  space-x-4 flex justify-center items-center  ">
          <RevelText as="h1" className="block">
            GSAP
          </RevelText>
          <RevelText
            as="span"
            delay={0.3}
            anime={{ y: -100 }}
            className="block"
          >
            <span className="text-red-500 italic">Vs</span>
          </RevelText>
          <RevelText className="h1" as="aside" delay={0.5}>
            FramerMotion
          </RevelText>
        </div>
        <RevelText
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1 } }}
          className=" text-xl w-[500px] ml-auto mt-12 capitalize opacity-100"
        >
          A Simple example using{" "}
          <div className="flex">
            <RevelText
              className="text-indigo-600 mx-2"
              anime={{ y: -100 }}
              delay={1.3}
            >
              Gsap
            </RevelText>{" "}
            &
            <RevelText className="text-indigo-600 mx-2" delay={1.4}>
              {" "}
              Tailwind{" "}
            </RevelText>{" "}
            and
            <RevelText
              className="text-indigo-600 mx-2"
              delay={1.6}
              anime={{ y: -100 }}
            >
              {" "}
              Tailwind{" "}
            </RevelText>
          </div>
        </RevelText>
      </div>
    </section>
  );
}

export default Home;
