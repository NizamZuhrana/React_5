import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const getDetail = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div>
      <Navbar />
      {/* <h1>Detail Page</h1>
      <h1>ini id ke- {id}</h1> */}
      <div className="flex flex-col min-h-screen p-6 bg-gray-50">
        <div className="flex flex-col items-center">
          <img
            src={data.image}
            alt=""
            className="object-cover w-48 h-48 mb-6 border-4 rounded-full border-amber-600"
          />
          <h1 className="mb-4 text-3xl font-bold text-gray-800">{data.name}</h1>
        </div>
        <div>
          <div>
            <p className="text-lg font-semibold">Ingredients:</p>
            {data.ingredients?.map((ingredient, index) => (
              <li key={index} className="my-3">
                {ingredient}
              </li>
            ))}
          </div>
          <div>
            <p className="text-lg font-semibold">Instructions:</p>
            {data.instructions?.map((instruction, index) => (
              <p key={index} className="my-3">
                {index + 1}. {instruction}
              </p>
            ))}
          </div>
          <div>
            <p className="text-lg font-semibold">Tags:</p>
            {data.tags?.map((tag, index) => (
              <li key={index} className="my-3">
                {tag}
              </li>
            ))}
          </div>
        </div>
        <p><strong>Prep Time:</strong> {data.prepTimeMinutes} Minutes</p>
        <p><strong>Cook Time:</strong> {data.cookTimeMinutes} Minutes</p>
        <p><strong>Servings:</strong> {data.servings}</p>
        <p><strong>Difficulty:</strong> {data.difficulty}</p>
        <p><strong>Cuisine:</strong> {data.cuisine}</p>
        <p><strong>Calories per Serving:</strong> {data.caloriesPerServing} Kkal</p>
        <p><strong>Rating:</strong> {data.rating}</p>
        <p><strong>Review Count:</strong> {data.reviewCount}</p>
        <p><strong>Meal Type:</strong> {data.mealType}</p>
      </div>
    </div>
  );
};

export default DetailPage;
