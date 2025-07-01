import React from "react";

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Request a Demo</h2>
        <form className="grid grid-cols-1 gap-4">
          <input className="border p-2 rounded" type="text" placeholder="Name" required />
          <input className="border p-2 rounded" type="email" placeholder="Email" required />
          <input className="border p-2 rounded" type="text" placeholder="Company" />
          <input className="border p-2 rounded" type="text" placeholder="Role" />
          <input className="border p-2 rounded" type="tel" placeholder="Phone" />
          <input className="border p-2 rounded" type="text" placeholder="Country" />
          <textarea className="border p-2 rounded" placeholder="Message" rows={4}></textarea>
          <button className="bg-orange-600 text-white py-2 px-4 rounded font-semibold mt-2" type="submit">Submit Request</button>
        </form>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">General Inquiries</h2>
        <p>Email: <a href="mailto:info@example.com" className="text-orange-600">info@example.com</a></p>
        <p>Phone: <a href="tel:+1234567890" className="text-orange-600">+1 234 567 890</a></p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Support</h2>
        <p>For support, please contact <a href="mailto:support@example.com" className="text-orange-600">support@example.com</a>.</p>
      </section>
    </div>
  );
} 