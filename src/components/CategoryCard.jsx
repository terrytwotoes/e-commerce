import { categoryData } from "../data";

function CategoryCard() {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 max-w-6xl mx-auto">
      {categoryData.map((item) => (
        <img key={item.id} src={item.src} alt={item.alt} />
      ))}
    </div>
  );
}

export default CategoryCard;
