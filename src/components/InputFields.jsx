/* eslint-disable react/prop-types */
const InputFields = ({ text, title }) => {
  return (
    <div className="">
      <label
        className="block text-xs  absolute  text-white -mt-3 ml-2 px-2 py-1 bg-[#173535]  "
        htmlFor="inputField"
      >
        {title}
      </label>
      <input
        className="border rounded w-72  py-2 px-3 text-white  bg-transparent"
        id="inputField"
        type="text"
        placeholder={text}
      />
    </div>
  );
};

export default InputFields;
