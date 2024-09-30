import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AUTH_TOKEN } from './auth'; // Your auth token
import './HolidayPackageCard.css'; // Add a CSS file for styling

const HolidayPackageCard = () => {
  const [packages, setPackages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API call
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://172.105.55.211/api/packageApi.php?type=getHolidayPackage',
          {
            headers: {
              Authorization: `Bearer ${AUTH_TOKEN}`, // Setting the auth header
            },
          }
        );
        if (response.data && response.data.isSuccess && response.data.data.length > 0) {
          console.log(response.data.data);
          setPackages(response.data.data); // Access the `data` array
        } else {
          setError('No packages found.');
        }
      } catch (error) {
        console.error('Error fetching the packages:', error);
        setError('Failed to fetch packages.');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="packages-container">
      {error ? (
        <p>{error}</p>
      ) : packages.length > 0 ? (
        <div className="cards-grid">
          {packages.map((pkg) => (
            <div className="card" key={pkg.id}>
              <h3 className="card-title">{pkg.title}</h3>
              <p className="card-destination">Destination: {pkg.destination}</p>
              <p className="card-days">Number of Days: {pkg.no_of_days}</p>
              <p className="card-price">Price: {pkg.price} {pkg.price_per}</p>
              <p className="card-plan-type">Plan Type: {pkg.plan_type}</p>
              
              {/* Render images */}
              <div className="images">
                {pkg.images && pkg.images.length > 0 && pkg.images.map((image, index) => (
                  <img key={index} src={image} alt={pkg.title} className="holiday-image" />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HolidayPackageCard;
