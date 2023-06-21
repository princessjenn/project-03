import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    isAdmin: true,
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      console.log("DATA", data);
      const newUser = data.addUser.user;
      console.log("New user:", newUser);

      // Optionally, you can also access the token if it was returned
      const token = data.addUser.token;
      console.log("Token:", token);

      // Perform any necessary actions with the user and token
      // For example, you can save the token to local storage or set it in your authentication context

      Auth.login(token);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAdminSelect = (event) => {
    const { value } = event.target;
    setFormState({ ...formState, isAdmin: value === "Admin" });
  };

  return (
    <section>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="justify-center mx-auto text-left align-bottom transition-all transform bg-info rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
            <div className="w-full px-6 py-3 bg-base-100 border border-primary rounded">
              <div>
                <div className="mt-3 text-left sm:mt-5">
                  <div className="inline-flex items-center w-full">
                    <h3 className="text-lg font-bold text-neutral-600 leading-6 lg:text-5xl ">
                      Sign up
                    </h3>
                  </div>
                  <div className="mt-4 text-base text-gray-500">
                    <p>Sign up and book with us today!</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <form onSubmit={handleFormSubmit}>
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Enter your name"
                      value={formState.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Enter your email"
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="username" className="sr-only">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Enter your username"
                      value={formState.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Enter your password"
                      value={formState.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col mt-4 lg:space-y-2">
                    <select
                      className="select select-accent w-full max-w-xs"
                      name="isAdmin"
                      onChange={handleAdminSelect}
                      value={formState.isAdmin ? "User" : "Admin"}
                    >
                      <option disabled>Account type</option>
                      <option value="Admin">Admin</option>
                      <option value="User">User</option>
                    </select>
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-primary rounded-xl hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-200"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="order-first hidden w-full lg:block">
              <img
                className="object-cover h-full bg-cover rounded-l-lg border border-primary rounded"
                src="../../../../public/assets/pexels-rdne-stock-project-7697358.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
