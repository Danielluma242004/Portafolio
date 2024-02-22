import { useState } from "react";
import toast from "react-hot-toast";
import { contactButton } from "../api/contact.api";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const handleMessage = async () => {
    try {
      await contactButton(name, email, phone, message);
      emptyInputs();
      toast.success("Message sent successfully!", {
        className: "dark:bg-gray-800",
      });
    } catch (error: any) {
      toast.error(error.message, { className: "dark:bg-gray-800" });
    }
  };

  const emptyInputs = () => {
    setName("");
    setEmail("");
    setMessage("");
    setPhone("");
  };

  return (
    <div className="flex items-center justify-center pb-10" id="contact">
      <section className="max-w-5xl mx-4 flex flex-col w-full">
        <div className="flex items-center mb-8 ">
          <div className="h-px bg-gray-400 flex-grow"></div>
          <h2 className="mx-4 text-cyan-700 dark:text-cyan-500 font-bold text-xl cursor-default">
            Contact
          </h2>
          <div className="h-px bg-gray-400 flex-grow"></div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-5 md:p-8 w-full  shadow-xl">
          <form className="m-3 mb-0">
            <p className="font-bold text-cyan-700 dark:text-cyan-500 text-3xl pb-5 text-center md:text-left">
              <label>Get in touch!</label>
            </p>
            <p className="flex flex-col md:flex-row">
              <p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="w-full p-2 rounded mb-4 dark:bg-gray-700 dark:text-white"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full p-2 rounded mb-4  dark:bg-gray-700 dark:text-white"
                />
                <input
                  type="int"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                  className="w-full p-2 rounded mb-4  dark:bg-gray-700 dark:text-white"
                />
              </p>
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full p-2 rounded mb-4 md:ml-4 dark:bg-gray-700 dark:text-white"
              ></textarea>
            </p>
            <p className="flex justify-center md:justify-end">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleMessage();
                }}
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
