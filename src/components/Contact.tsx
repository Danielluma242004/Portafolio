export function Contact() {
  return (
    <div className="flex items-center justify-center pb-10" id="contact">
      <section className="max-w-5xl mx-4 flex flex-col w-full">
        <div className="flex items-center mb-8">
          <div className="h-px bg-gray-400 flex-grow"></div>
          <h2 className="mx-4 text-cyan-700 font-bold text-xl">Contact</h2>
          <div className="h-px bg-gray-400 flex-grow"></div>
        </div>
        <div className="bg-gray-100 rounded-3xl p-5 md:p-8 w-full">
          <form
            name="contact"
            action="POST"
            data-netlify="true"
            className="m-3 mb-0"
          >
            <p className="font-bold text-cyan-700 text-3xl pb-5 text-center md:text-left">
              Get in touch!
            </p>
            <div className="flex flex-col md:flex-row">
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="w-full p-2 border rounded mb-4"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded mb-4"
                />
              </div>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows={3}
                className="w-full p-2 border rounded mb-4 md:ml-4"
              ></textarea>
            </div>
            <div data-netlify-recaptcha="true"></div>
            <div className="flex justify-center md:justify-end">
              <input
                type="submit"
                value="Send Message"
                className="bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
