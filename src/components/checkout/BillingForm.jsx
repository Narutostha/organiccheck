import React, { useState } from "react";

const BillingForm= () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("United States");
  const [state, setState] = useState("New York");
  const [zipCode, setZipCode] = useState("");

  return (
    <div className="mb-[30px]">
      <h2 className="text-2xl font-semibold mb-5 ">Billing information</h2>
      <div className="flex gap-5 mb-5 max-sm:flex-col max-sm:gap-2.5">
        <input
          type="text"
          placeholder="First Name"
          className="border rounded text-base w-full p-3 border-solid border-[#ccc]"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border rounded text-base w-full p-3 border-solid border-[#ccc]"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <input
          type="text"
          placeholder="Address"
          className="border rounded text-base w-full p-3 border-solid border-[#ccc] mb-5"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          className="border rounded text-base w-full p-3 border-solid border-[#ccc]"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="flex gap-5 mb-5 max-sm:flex-col max-sm:gap-2.5">
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="border rounded text-base w-full p-3 border-solid border-[#ccc]"
        >
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Australia">Australia</option>
        </select>
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="border rounded text-base w-full p-3 border-solid border-[#ccc]"
        >
          <option value="New York">New York</option>
          <option value="California">California</option>
          <option value="Texas">Texas</option>
          <option value="Florida">Florida</option>
        </select>
        <input
          type="text"
          placeholder="ZIP code"
          className="border rounded text-base w-full p-3 border-solid border-[#ccc]"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value.replace(/\D/g, ""))}
          maxLength={5}
        />
      </div>
    </div>
  );
};

export default BillingForm;
