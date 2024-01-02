import { useState, ChangeEvent, FormEvent } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para enviar datos a Netlify o hacer otras acciones con los datos
  };
  return (
    <div className="flex items-center justify-center pb-10" id="contact">
      <section className="max-w-5xl mx-4 flex flex-col w-full">
        <div className="flex items-center mb-8">
          <div className="h-px bg-gray-400 flex-grow"></div>
          <h2 className="mx-4 text-cyan-700 dark:text-cyan-500 font-bold text-xl">
            Contact
          </h2>
          <div className="h-px bg-gray-400 flex-grow"></div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-900 rounded-3xl p-5 md:p-8 w-full">
          <form
            className="m-3 mb-0"
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <p className="font-bold text-cyan-700 dark:text-cyan-500 text-3xl pb-5 text-center md:text-left">
              <label>Get in touch!</label>
            </p>
            <p className="flex flex-col md:flex-row">
              <p>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  id="name"
                  placeholder="Name"
                  className="w-full p-2 rounded mb-4 dark:bg-gray-700"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  id="email"
                  placeholder="Email"
                  className="w-full p-2 rounded mb-4  dark:bg-gray-700"
                />
              </p>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                id="message"
                placeholder="Message"
                rows={3}
                className="w-full p-2 rounded mb-4 md:ml-4 dark:bg-gray-700"
              ></textarea>
            </p>
            <p className="flex justify-center md:justify-end">
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
              >
                Send Message
              </button>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
