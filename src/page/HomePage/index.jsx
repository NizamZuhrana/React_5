import axios from "axios";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [Data, setData] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const limit = 9;

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`
      );
      setData(response.data.recipes);
      setTotal(response.data.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [skip]);

  const totalPages = Math.ceil(total / limit);

  const handleNext = () => {
    if (pagination < totalPages) {
      setPagination(pagination + 1);
      setSkip(skip + limit);
    }
  };

  const handlePrev = () => {
    if (pagination > 1) {
      setPagination(pagination - 1);
      setSkip(skip - limit);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="min-h-screen p-6 bg-gray-50">
        <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">
          Home Page
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Data.map((item) => {
            return (
              <div
                key={item.id}
                className="p-4 transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
              >
                <img
                  src={item.image}
                  className="object-cover w-full h-40 mb-4 rounded-md"
                  alt=""
                />
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p>
                    <strong>Prep Time:</strong> {item.prepTimeMinutes} Minutes
                  </p>
                  <p>
                    <strong>Cook Time:</strong> {item.cookTimeMinutes} Minutes
                  </p>
                  <p>
                    <strong>Difficulty:</strong> {item.difficulty}
                  </p>
                  <Link to={`/detail/${item.id}`}>
                    <button className=" p-2 text-center text-white transition duration-300 bg-amber-600 rounded-md hover:bg-amber-700">
                      Detail Recipe
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-6 gap-5">
          <button
            onClick={handlePrev}
            disabled={pagination === 1}
            className="p-2 text-center text-white transition duration-300 bg-gray-600 rounded-md hover:bg-gray-700 w-20"
          >
            Previous
          </button>
          <span>{`page ${pagination} of ${totalPages}`}</span>
          <button
            onClick={handleNext}
            disabled={pagination === totalPages}
            className="p-2 text-center text-white transition duration-300 bg-gray-600 rounded-md hover:bg-gray-700 w-20"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
