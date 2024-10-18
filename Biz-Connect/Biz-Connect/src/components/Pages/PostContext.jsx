import React, { createContext, useState } from "react";

export const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [serviceProviders, setServiceProviders] = useState([]);

  const addServiceProvider = (provider) => {
    setServiceProviders((prev) => [...prev, provider]);
  };

  const updateServiceProvider = (index, updatedProvider) => {
    const updatedProviders = serviceProviders.map((provider, idx) =>
      idx === index ? updatedProvider : provider
    );
    setServiceProviders(updatedProviders);
  };

  return (
    <PostContext.Provider
      value={{ serviceProviders, addServiceProvider, updateServiceProvider }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
