import axios from "axios";
import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import Pagination from "./components/Pagination";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );

    setUserData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [index]);

  const handlePrev = () => {
    if (index > 1) {
      setIndex((i) => i - 1);
      setUserData([]);
    }
  };

  const handleNext = () => {
    setIndex((i) => i + 1);
    setUserData([]);
  };

  return (
    <div className="bg-black text-white overflow-auto p-4 h-screen">
      <Gallery images={userData} isLoading={isLoading} />

      <Pagination page={index} onPrev={handlePrev} onNext={handleNext} />
    </div>
  );
};

export default App;
