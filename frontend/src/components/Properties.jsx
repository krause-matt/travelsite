import React from "react";
import "./properties.scss";
import useFetch from "../hooks/useFetch";
import { PropertyItem } from "./PropertyItem";

export const Properties = () => {
  const { data, pageLoad, error } = useFetch(
    "http://localhost:3000/hotels/typeCount"
  );

  const propertyImages = [
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1565329921943-7e537b7a2ea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29uZG8lMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlsbGFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1567164050875-822cd14dbf85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNhYmlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGNvdHRhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  ];

  return (
    <div className="properties">
      {pageLoad
        ? "Loading..."
        : data.map((item, index) => {
            const imageUrl = propertyImages[index];
            return (
              <PropertyItem
                index={index}
                type={item.type}
                count={item.count}
                image={imageUrl}
              />
            );
          })}
    </div>
  );
};
