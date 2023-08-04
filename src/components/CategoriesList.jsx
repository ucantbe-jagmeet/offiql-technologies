const data = [
  "Mehendi",
  "Venues",
  "Bridal wear",
  "Photographer",
  "Groom wear",
  "Pandits",
  "Food",
  "Grooming",
];

const CategoriesList = () => {
  return (
    <div className="lg:flex grid sm:grid-cols-2 lg:grid-cols-3">
      {data.map((item, index) => {
        return (
          <>
            <h1
              key={index}
              className={
                index === 2
                  ? "lg:mx-4 mx-3 lg:text-xl xl:text-2xl text-xl text-black font-semibold"
                  : "lg:mx-4 mx-3 lg:text-xl xl:text-2xl text-xl text-gray-500"
              }
            >
              {item}
            </h1>
          </>
        );
      })}
    </div>
  );
};

export default CategoriesList;
