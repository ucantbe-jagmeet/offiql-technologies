import img01 from "../assets/images/img-01.png";
import img02 from "../assets/images/img-02.png";
import img03 from "../assets/images/img-03.png";
import img04 from "../assets/images/img-04.png";
import img05 from "../assets/images/img-05.png";
import img06 from "../assets/images/img-06.png";
import img07 from "../assets/images/img-07.png";
import img08 from "../assets/images/img-08.png";
import title01 from "../assets/images/title-01.png";
import title02 from "../assets/images/title-02.png";
import title03 from "../assets/images/title-03.png";
import title04 from "../assets/images/title-04.png";
import title05 from "../assets/images/title-05.png";
import title06 from "../assets/images/title-06.png";
import title07 from "../assets/images/title-07.png";
import title08 from "../assets/images/title-08.png";

const data = [
  {
    title: title01,
    image: img01,
    heading: "Lorem Ipsum",
    text: "lorem ipsum sit amet, conseasstetur adipersing elit",
  },
  {
    title: title02,
    image: img02,
    heading: "Lorem Ipsum",
    text: "lorem ipsum sit amet, conseasstetur adipersing elit",
  },
  {
    title: title03,
    image: img03,
    heading: "Lorem Ipsum",
    text: "lorem ipsum sit amet, conseasstetur adipersing elit",
  },
  {
    title: title04,
    image: img04,
    heading: "Lorem Ipsum",
    text: "lorem ipsum sit amet, conseasstetur adipersing elit",
  },
  {
    title: title05,
    image: img05,
    heading: "Lorem Ipsum",
    text: "lorem ipsum sit amet, conseasstetur adipersing elit",
  },
  {
    title: title06,
    image: img06,
    heading: "Lorem Ipsum",
    text: "lorem ipsum sit amet, conseasstetur adipersing elit",
  },
  {
    title: title07,
    image: img07,
    heading: "Lorem Ipsum",
    text: "lorem ipsum sit amet, conseasstetur adipersing elit",
  },
  {
    title: title08,
    image: img08,
    heading: "Lorem Ipsum",
    text: "lorem ipsum sit amet, conseasstetur adipersing elit",
  },
];

const Categories = () => {
  return (
    <div className="h-auto bg-[#F5F5F5] flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-24 lg:gap-y-10 pt-14 pb-16 ">
      {data.map((item, index) => {
        const { title, image, text, heading } = item;
        return (
          <>
            <div
              key={index}
              className={
                index % 2 === 0
                  ? "h-[25rem] w-72 bg-white mb-5 rounded-md flex flex-col justify-center  shadow-md border-2"
                  : "h-[25rem] w-72 bg-white mb-5 rounded-md flex flex-col justify-center  shadow-md border-2 md:mt-20"
              }
            >
              <img
                src={title}
                alt="title"
                className="h-5 object-contain my-2"
              />
              <img
                src={image}
                alt="img"
                className="h-60 object-cover w-[80%] mx-auto mb-4"
              />
              <div
                className={
                  index === 0
                    ? " h-[115px] text-center px-4 bg-[#FAAA00] rounded-b-md text-white"
                    : " h-24 text-center px-4"
                }
              >
                <h1 className="text-xl font-semibold my-2">{heading}</h1>
                <p className="text-xs">{text}</p>
              </div>
            </div>
          </>
        );
      })}

      <div className="w-[85vw] flex justify-center">
        <button className=" w-32 py-1 border-2 border-gray-500 rounded-sm mt-5">
          View All -{">"}
        </button>
      </div>
    </div>
  );
};

export default Categories;
