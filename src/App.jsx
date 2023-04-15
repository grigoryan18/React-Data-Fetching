import { useEffect, useState } from "react";
import "./index.css";
// Հետևյալ API հասցեից ստանալ դատան և ներկայացնել նկարը, անունը և գինը grid-ով։

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataFetch = () => {
      fetch("https://dummyjson.com/products")
        .then((result) => result.json())
        .then((res) => setData(res.products));
    };
    dataFetch();
    return () => setData([]);
  }, []);

  console.log(data)

  return (
    <div className="w-full  grid grid-cols-3 bg-slate-500">
      <div>
        {data?.map((dat) => {
          return (
            <div key={dat?.id}>
              <div>
                <img src={dat?.thumbnail} alt="" />
              </div>
              <p>
                {dat?.title}
                {dat?.price}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
