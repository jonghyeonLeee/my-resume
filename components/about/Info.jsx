import {
  FaCalendarAlt,
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaMobileAlt,
} from "react-icons/fa";

const Info = () => {
  const personalContent = [
    {
      id: 1,
      border: "border-b border-[#E3E3E3] dark:border-[#3D3A3A]",
      icon: <FaMobileAlt />,
      iconColor: "text-[#E93B81]",
      name: "Phone",
      meta: (
        <>
          <a
            className="hover:text-[#FA5252] duration-300 transition"
            href="tel:+1234567890"
          >
            010 6811 3119
          </a>
        </>
      ),
    },
    {
      id: 3,
      border: "border-b border-[#E3E3E3] dark:border-[#3D3A3A]",
      icon: <FaEnvelopeOpenText />,
      iconColor: "text-[#FD7590]",
      name: "Email",
      meta: (
        <>
          {" "}
          <a
            className="hover:text-[#FA5252] duration-300 transition"
            href="mailto:jonghyeonLee.90@gmail.com"
          >
            jonghyeonLee.90@gmail.com
          </a>
        </>
      ),
    },
    {
      id: 4,
      icon: <FaCalendarAlt />,
      iconColor: "text-[#C17CEB]",
      name: "Birthday",
      meta: <>Jan 11, 1990</>,
    },
  ];

  return (
    <>
      {personalContent.map((item) => (
        <div className={`flex py-2.5 ${item.border}`} key={item.id}>
          <span
            className={`flex-shrink-0 socialbtn bg-white dark:bg-black ${item.iconColor} shadow-md`}
          >
            {item.icon}
          </span>
          <div className="text-left ml-2.5">
            <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
              {item.name}
            </p>
            <p className="dark:text-white break-all">{item.meta}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Info;
