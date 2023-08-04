import CategoriesList from "../components/CategoriesList";

const WedCategory = () => {
  return (
    <div className="  flex flex-col items-center justify-center px-10 pt-10 bg-[#F5F5F5] ">
      <div className="md:text-6xl text-4xl font-bold font-sans ">
        <h2>Wedding Categories</h2>
      </div>
      <div className="w-3/5 text-center mt-10">
        <p className="md:text-lg font-serif tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          temporibus repellat reiciendis magni nemo ipsum voluptatibus laborum
          nulla doloribus
        </p>
      </div>
      <div className="mt-10">
        <CategoriesList />
      </div>
    </div>
  );
};

export default WedCategory;
