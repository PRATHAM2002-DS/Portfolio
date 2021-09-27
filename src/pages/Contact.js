import Fade from "react-reveal/Fade";
import React from "react";

export default function Contact() {
  return (
    <div className="overflow-hidden bg-gray-800 rounded-lg shadow-md items-center w-auto lg:w-4/6 mx-auto py-8 my-10">
      <Fade up cascade>
        <div className="w-3/4 md:w-1/2 mx-auto">
          <div>
            <h1 className="text-center font-primary font-black text-3xl md:text-5xl capitalize text-gray-300 transition duration-500 ease-in-out transform hover:scale-105 hover:text-yellow-400">
              Let's Talk
            </h1>
          </div>
          <h1 className="text-center mt-4 font-secondary font-medium text-lg text-gray-400">
            While I am good with smoke signals, there are simpler ways to get in
            touch and answer your queries.
          </h1>
          <div className="mt-8 space-y-8 ">
            <div className="mx-auto transition duration-500 ease-in-out transform hover:scale-105">
              <svg
                className="w-16 h-16 mx-auto fill-current text-blue-500 transition duration-500 ease-in-out transform hover:scale-105 hover:text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <path d="M21.225,17.889c-0.406-0.238-0.905-0.233-1.309,0.007l-2.046,1.219c-0.458,0.273-1.03,0.241-1.45-0.087 c-0.726-0.567-1.895-1.521-2.912-2.538c-1.017-1.017-1.971-2.186-2.538-2.912c-0.328-0.42-0.36-0.992-0.087-1.45l1.219-2.046 c0.241-0.404,0.243-0.907,0.005-1.313L9.105,3.641c-0.291-0.496-0.869-0.74-1.428-0.603C7.134,3.17,6.429,3.492,5.69,4.232 c-2.314,2.314-3.543,6.217,5.159,14.919s12.604,7.474,14.919,5.159c0.741-0.741,1.062-1.447,1.195-1.991 c0.135-0.558-0.105-1.132-0.6-1.422C25.127,20.174,22.461,18.613,21.225,17.889z"></path>
              </svg>
              <p className="text-center text-gray-300 font-primary font-bold text-xl">
                Phone Me:
              </p>
              <p className="text-center text-gray-400 font-secondary font-medium text-lg">
                +91 91464 58797
              </p>
            </div>
            <div className="mx-auto transition duration-500 ease-in-out transform hover:scale-105">
              <svg
                className="w-16 h-16 mx-auto fill-current text-blue-500 transition duration-500 ease-in-out transform hover:scale-105 hover:text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <path d="M 26 3 A 1 1 0 0 0 25.716797 3.0429688 A 1 1 0 0 0 25.636719 3.0683594 L 3.6503906 10.060547 L 3.6503906 10.064453 A 1 1 0 0 0 3 11 A 1 1 0 0 0 3.4824219 11.853516 L 10.164062 17.154297 L 23.373047 6.6269531 L 12.845703 19.835938 L 18.142578 26.513672 A 1 1 0 0 0 19 27 A 1 1 0 0 0 19.935547 26.349609 L 19.939453 26.349609 L 26.9375 4.34375 A 1 1 0 0 0 26.957031 4.2832031 A 1 1 0 0 0 27 4 A 1 1 0 0 0 26 3 z"></path>
              </svg>
              <p className="text-center text-gray-300 font-primary font-bold text-xl">
                Mail Me:
              </p>
              <p className="text-center text-gray-400 font-secondary font-medium text-lg">
                bhatrohin003@gmail.com
              </p>
            </div>
            <div className="mx-auto transition duration-500 ease-in-out transform hover:scale-105">
              <svg
                className="w-16 h-16 mx-auto fill-current text-blue-500 transition duration-500 ease-in-out transform hover:scale-105 hover:text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M 12 1 C 8.686 1 6 3.686 6 7 C 6 11.286 12 18 12 18 C 12 18 18 11.286 18 7 C 18 3.686 15.314 1 12 1 z M 12 4.8574219 C 13.184 4.8574219 14.142578 5.816 14.142578 7 C 14.142578 8.183 13.183 9.1425781 12 9.1425781 C 10.817 9.1425781 9.8574219 8.184 9.8574219 7 C 9.8574219 5.816 10.816 4.8574219 12 4.8574219 z"></path>
              </svg>
              <p className="text-center text-gray-300 font-primary font-bold text-xl">
                Phone Me:
              </p>
              <p className="text-center text-gray-400 font-secondary font-medium text-lg">
                +91 91464 58797
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
