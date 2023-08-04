/* eslint-disable react/prop-types */
const InputFields = ({ text, title }) => {
  return (
    <div className="mx-5 my-4">
      <label
        className="block text-xs  absolute text-white -mt-3 ml-2 px-2 py-1 bg-[#173535]  "
        htmlFor="inputField"
      >
        {title}
      </label>
      <input
        className="border-2 rounded w-72 py-2 px-3 bg-transparent placeholder:text-white"
        id="inputField"
        type="text"
        placeholder={text}
      />
    </div>
  );
};

export default InputFields;
