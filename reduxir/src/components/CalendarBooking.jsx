
import React from 'react';

const CalendarBooking = () => (
  <section className="p-10 bg-gray-50" id="consultation">
    <h2 className="text-2xl font-bold mb-4">Book a Consultation</h2>
    <form className="flex flex-col gap-4 max-w-md mx-auto">
      <input type="text" placeholder="First Name" className="p-2 border rounded" />
      <input type="text" placeholder="Last Name" className="p-2 border rounded" />
      <input type="number" placeholder="Age" className="p-2 border rounded" />
      <input type="text" placeholder="Medical Conditions" className="p-2 border rounded" />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Submit</button>
    </form>
  </section>
);

export default CalendarBooking;
