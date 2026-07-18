function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold text-center text-blue-700 mb-10">
        Contact Us
      </h1>

      <div className="bg-white shadow-xl rounded-xl p-10">

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg p-4"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg p-4"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full border rounded-lg p-4"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border rounded-lg p-4"
          ></textarea>

          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;