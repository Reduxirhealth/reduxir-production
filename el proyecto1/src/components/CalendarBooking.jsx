export default function CalendarBooking() {
  return (
    <section id="booking" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">Book a Consultation</h2>
      <form className="max-w-xl mx-auto grid gap-4">
        <input type="text" placeholder="First Name" className="p-2 border" required />
        <input type="text" placeholder="Last Name" className="p-2 border" required />
        <input type="number" placeholder="Age" className="p-2 border" required />
        <input type="text" placeholder="Any medical conditions?" className="p-2 border" />
        <input type="datetime-local" className="p-2 border" required />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Reserve Now
        </button>
      </form>
    </section>
  )
}
