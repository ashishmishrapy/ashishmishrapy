import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");
  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("sent");
        formRef.current.reset();

        setTimeout(() => {
          setStatus("idle");
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");

        setTimeout(() => {
          setStatus("idle");
        }, 2000);
      });
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center border-t-2 border-blue-600">
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="flex shadow-2xl shadow-black p-5 flex-col rounded-4xl gap-10"
      >
        <h3 className="text-white font-bold md:text-[40px] text-[30px] leading-none text-center mb-2">
          Get in Touch
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
         disabled={status === "sending"}
        className={`bg-blue-600 ${status==="sent" && "bg-green-700"} ${status==="failed" && "bg-red-700"} disabled:opacity-60 text-gray-200 text-sm font-semibold px-3 py-2 cursor-pointer rounded-md shadow-black`}>
          {status === "idle" && "Send Message"}
          {status === "sending" && "Sending..."}
          {status === "sent" && "Sent ✓"}
          {status === "error" && "Failed "}
        </button>
      </form>
    </div>
  );
};

export default Contact;
