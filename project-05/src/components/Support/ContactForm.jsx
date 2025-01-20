import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
    terms: false,
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Function to check if all fields are filled
  const isFormValid = () => {
    return (
      formData.name &&
      formData.surname &&
      formData.email &&
      formData.message &&
      formData.terms
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg w-[580px]">
      <h1 className="text-sm font-medium mb-6">
        You will receive a response within 24 hours of the time of submit.
      </h1>
      <form action="" className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-xs text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              required
            />
          </div>
          {/* Surname Input */}
          <div>
            <label
              htmlFor="surname"
              className="text-xs block text-gray-700 font-bold mb-2"
            >
              Surname
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              required
            />
          </div>
        </div>
        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="text-xs block text-gray-700 font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
            required
          />
        </div>
        {/* Message Input */}
        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 font-bold text-xs mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
            rows="1"
            required
          ></textarea>
        </div>
        {/* Terms Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="terms" className="text-gray-700 text-xs">
            I agree to the{" "}
            <span className="text-[#5F00D9]">Terms & Conditions</span>
          </label>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid()}
          className="mt-4 disabled:bg-[#D8DDE2] disabled:text-[#797E82] disabled:cursor-not-allowed bg-[#5F00D9] text-white font-bold py-2 px-4 text-sm rounded hover:bg-[#7f15ff] w-full"
        >
          Send a Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
