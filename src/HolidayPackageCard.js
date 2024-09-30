import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AUTH_TOKEN } from './auth'; // Your auth token
import './HolidayPackageCard.css'; // Add a CSS file for styling

const HolidayPackageCard = () => {
  const [packages, setPackages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API call
    const fetchData = () => {
      try {
        const response = {
          isSuccess: true,
          successMessage: "get Holiday Package Successfully.",
          errorMessage: null,
          data: [
            {
              id: 17,
              user_id: 11,
              title: "greenland",
              no_of_days: 9,
              destination: "punjab",
              hotel_cat: "budget",
              plan_type: "MAP",
              include: [
                "sightseeing"
              ],
              transport_type: null,
              start_from: [
                "3"
              ],
              description: "lovely place to visit. ",
              price: 68,
              price_per: "per_person",
              cab_name: null,
              images: [
                "http://172.105.55.211/images/holidaypackage/1722671597105483"
              ],
              active: 1,
              created_at: "2024-07-17 06:19:21",
              updated_at: "2024-07-17 06:19:21",
              is_wishlist: 0
            },
            {
              id: 20,
              user_id: 11,
              title: "Valley of flowers ",
              no_of_days: 20,
              destination: "raipur",
              hotel_cat: "4star",
              plan_type: "CP",
              include: [
                "sightseeing",
                "transport"
              ],
              transport_type: "hatchback",
              start_from: [
                "New Delhi"
              ],
              description: "thhiikll",
              price: 23,
              price_per: "per_couple",
              cab_name: "Teat",
              images: [
                "http://172.105.55.211/images/holidaypackage/1000032901.jpg"
              ],
              active: 1,
              created_at: "2024-07-17 06:35:47",
              updated_at: "2024-07-17 06:35:47",
              is_wishlist: 0
            },
            {
              id: 22,
              user_id: 11,
              title: "Ruph Kund Uttarakhand Trip",
              no_of_days: 6,
              destination: "Ruph Kund",
              hotel_cat: "3star",
              plan_type: "MAP",
              include: [
                "sightseeing"
              ],
              transport_type: null,
              start_from: [
                "New Delhi"
              ],
              description: "thncfhh",
              price: 34,
              price_per: "per_couple",
              cab_name: null,
              images: [
                "http://172.105.55.211/images/holidaypackage/1000032900.webp"
              ],
              active: 1,
              created_at: "2024-07-17 06:40:51",
              updated_at: "2024-07-17 06:40:51",
              is_wishlist: 0
            },
            {
              id: 23,
              user_id: 11,
              title: "Ganga Ghat Patna",
              no_of_days: 10,
              destination: "Patna Bihar",
              hotel_cat: "5star",
              plan_type: "CP",
              include: [
                "sightseeing"
              ],
              transport_type: null,
              start_from: [
                "tbjk"
              ],
              description: "th nkllnabachkam",
              price: 34,
              price_per: "per_couple",
              cab_name: null,
              images: [
                "http://172.105.55.211/images/holidaypackage/1722674498982574"
              ],
              active: 1,
              created_at: "2024-07-17 06:42:36",
              updated_at: "2024-07-17 06:42:36",
              is_wishlist: 0
            },
            {
              id: 45,
              user_id: 11,
              title: "Test",
              no_of_days: 2,
              destination: "Dubai",
              hotel_cat: "5star",
              plan_type: "AP",
              include: [],
              transport_type: null,
              start_from: null,
              description: "this is a test",
              price: 5000,
              price_per: "per_person",
              cab_name: null,
              images: [
                "http://172.105.55.211/images/holidaypackage/1727454905779200"
              ],
              active: 1,
              created_at: "2024-09-27 16:35:05",
              updated_at: "2024-09-27 16:35:05",
              is_wishlist: 0
            },
            {
              id: 46,
              user_id: 11,
              title: "Test Package ",
              no_of_days: 12,
              destination: "Noida",
              hotel_cat: "5star",
              plan_type: "CP",
              include: [],
              transport_type: null,
              start_from: null,
              description: "noida",
              price: 5000,
              price_per: "per_person",
              cab_name: null,
              images: [
                "http://172.105.55.211/images/holidaypackage/1727493798598195"
              ],
              active: 1,
              created_at: "2024-09-28 03:23:18",
              updated_at: "2024-09-28 03:23:18",
              is_wishlist: 0
            },
            {
              id: 47,
              user_id: 11,
              title: "Noida",
              no_of_days: 25,
              destination: "Nodja",
              hotel_cat: "4star",
              plan_type: "MAP",
              include: [
                "transport"
              ],
              transport_type: "sedan",
              start_from: null,
              description: "bdjdje",
              price: 500,
              price_per: "per_person",
              cab_name: "bdid",
              images: [
                "http://172.105.55.211/images/holidaypackage/1727493935447343"
              ],
              active: 1,
              created_at: "2024-09-28 03:25:35",
              updated_at: "2024-09-28 03:25:35",
              is_wishlist: 0
            }
          ]
        }

        console.log(response)
        setPackages(response.data);
        if (response.data && response.data.isSuccess && response.data.data.length > 0) {
          console.log(response.data.data);
          setPackages(response.data.data); // Access the `data` array
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
