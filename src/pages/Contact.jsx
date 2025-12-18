import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {

  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center border-t-2 border-blue-600">
      <form className="flex shadow-2xl shadow-black p-5 flex-col rounded-4xl gap-10">
        <h3 className="text-white font-bold md:text-[40px] text-[30px] leading-none text-center mb-2">Get in Touch
</h3>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            className="rounded-lg outline-none text-white border-2 inline-block border-blue-600 p-3 placeholder:text-gray-500"
            type="text"
            name="fname"
            placeholder="First Name"
          />
          <input
            className="rounded-lg outline-none text-white border-2 inline-block border-blue-600 p-3 placeholder:text-gray-500"
            type="text"
            name="lname"
            placeholder="Last Name"
          />
        </div>
        <input
          className="rounded-lg outline-none text-white border-2 border-blue-600 p-3 placeholder:text-gray-500"
          type="email"
          name="email"
          placeholder="example@gmail.com"
        />
        <textarea
          className="rounded-lg outline-none overflow-y-auto resize-none h-[150px] text-white border-2 border-blue-600 px-3 py-2 placeholder:text-gray-500"
          name="message"
          placeholder="Enter your message..."
        />
        <button
        onClick={sendEmail}
        className="bg-blue-600 text-gray-200 text-sm font-semibold px-3 py-2 cursor-pointer rounded-md shadow-black">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
