const data = [
  { text: "Lorem Ipsum" },
  { text: "Lorem Ipsum" },
  { text: "Lorem Ipsum" },
  { text: "Lorem Ipsum" },
  { text: "Lorem Ipsum" },
];

const Footer = () => {
  return (
    <div>
      <footer className=" h-auto text-white body-font bg-[#13362D]">
        <div className="grid grid-cols-2 gap-20 p-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="flex  flex-col items-center justify-evenly">
            <h2 className="text-2xl font-semibold tracking-wider">Logo</h2>
            <p className="text-center text-xs ml-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <span className="inline-flex  sm:mt-0 mt-2 justify-center ">
              <a className="text-white-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-white-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
          <div>
            <h1 className="font-semibold text-lg">Home</h1>
            {data.map((item, index) => {
              return (
                <>
                  <h1 key={index} className="text-xs my-2">
                    {item.text}
                  </h1>
                </>
              );
            })}
          </div>
          <div>
            <h1 className="font-semibold text-lg">Social Links</h1>
            {data.map((item, index) => {
              return (
                <>
                  <h1 key={index} className="text-xs my-2">
                    {item.text}
                  </h1>
                </>
              );
            })}
          </div>
          <div>
            <h1 className="font-semibold text-lg">About</h1>
            {data.map((item, index) => {
              return (
                <>
                  <h1 key={index} className="text-xs my-2">
                    {item.text}
                  </h1>
                </>
              );
            })}
          </div>
          <div>
            <h1 className="font-semibold text-lg">Contact</h1>
            {data.map((item, index) => {
              return (
                <>
                  <h1 key={index} className="text-xs my-2">
                    {item.text}
                  </h1>
                </>
              );
            })}
          </div>
        </div>
        <div className="h-14 bg-[#1A3F35] w-screen flex justify-between px-14 items-center text-gray-300 text-sm">
          <h2>Terms and Conditions</h2>
          <h2>@2023 - Mangal Baazar | All right reserved</h2>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
