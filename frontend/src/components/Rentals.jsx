import React from "react";
import useFetch from "../hooks/useFetch";
import "./rentals.scss";

export const Rentals = () => {
  const { data, pageLoad, error } = useFetch(
    "http://localhost:3000/hotels/all"
  );

  console.log(data);

  return (
    <div className="rentals">
      {pageLoad ? (
        "Loading..."
      ) : (
        <>
          {data.map((hotel) => {
            return (
              <div className="rental-item">
                <img
                  className="rental-image"
                  src="https://images.unsplash.com/photo-1611095210561-67f0832b1ca3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwY29uZG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                ></img>
                <div className="rental-description">
                  <span className="rental-title">{hotel.title}</span>
                  <span className="rental-city">{hotel.city}</span>
                  <span className="rental-price">${hotel.cheapestPrice}</span>
                  <div className="rental-rating">
                    <button className="rental-score">8.5</button>
                    <span className="rental-review">{hotel.description}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

// <div className="rental-item">
// <img
//   className="rental-image"
//   src="https://images.unsplash.com/photo-1558969763-1e911dcd91e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhbmlzaCUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
// ></img>
// <div className="rental-description">
//   <span className="rental-title">Desert Delight</span>
//   <span className="rental-city">Scottsdale</span>
//   <span className="rental-price">$182</span>
//   <div className="rental-rating">
//     <button className="rental-score">8.1</button>
//     <span className="rental-review">Great</span>
//   </div>
// </div>
// </div>
// <div className="rental-item">
// <img
//   className="rental-image"
//   src="https://images.unsplash.com/photo-1544143086-828f66ac3945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
// ></img>
// <div className="rental-description">
//   <span className="rental-title">Beachfront Paradise</span>
//   <span className="rental-city">Tampa</span>
//   <span className="rental-price">$145</span>
//   <div className="rental-rating">
//     <button className="rental-score">9.0</button>
//     <span className="rental-review">Excellent</span>
//   </div>
// </div>
// </div>
// <div className="rental-item">
//         <img
//           className="rental-image"
//           src="https://images.unsplash.com/photo-1585680398621-6516aec7e326?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGlsbCUyMGNvdW50cnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
//         ></img>
//         <div className="rental-description">
//           <span className="rental-title">Hill Country Home</span>
//           <span className="rental-city">Austin</span>
//           <span className="rental-price">$167</span>
//           <div className="rental-rating">
//             <button className="rental-score">7.8</button>
//             <span className="rental-review">Good</span>
//           </div>
//         </div>
//       </div>
