import { useEffect, useState } from "react";
import imgD from "../assets/icon-downloads.png";
import imgr from "../assets/icon-ratings.png";

const Installation = () => {
  const [installation, setInstallation] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installed")) || [];
    setInstallation(savedList);
  }, []);

  const sortedItem = (() => {
    if (sortOrder === "size-asc") {
      return [...installation].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-desc") {
      return [...installation].sort((a, b) => b.size - a.size);
    } else {
      return installation;
    }
  })();

  const handleRemove = (id) => {
    const savedList = JSON.parse(localStorage.getItem("installed")) || [];
    const updatedList = savedList.filter((p) => p.id !== id);

    localStorage.setItem("installed", JSON.stringify(updatedList));
    setInstallation(updatedList); 
  };

  return (
    <div className="space-y-4">
      <div className="text-center mt-5">
        <h1 className="text-3xl font-semibold">Your Installed Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="flex justify-between items-center mt-6">
        <p className="text-xl font-semibold">
          {installation.length} : Apps Found
        </p>

        <fieldset className="fieldset w-[170px]">
          <select
            className="select select-bordered rounded-xl"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort By Size</option>
            <option value="size-asc">Low → High</option>
            <option value="size-desc">High → Low</option>
          </select>
        </fieldset>
      </div>

      <div className="space-y-3">
        {sortedItem.map((p) => (
          <div
            key={p.id}
            className="card card-side bg-base-100 shadow-sm h-[100px] flex items-center"
          >
            <figure className="w-[100px] flex items-center justify-center">
              <img
                src={p.image}
                alt={p.title}
                className="object-contain max-h-[60px]"
              />
            </figure>

            <div className="card w-full p-2">
              <div className="flex justify-between items-center w-full">
                <div>
                  <h2 className="card-title">{p.title}</h2>
                  <div className="flex gap-3">
                    <div className="flex items-center gap-2 mt-1">
                      <img src={imgD} alt="" className="w-[30px] p-1" />
                      <p>{p.downloads}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <img src={imgr} alt="" className="w-[20px]" />
                      <p>{p.ratingAvg}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <p>{p.size}MB</p>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleRemove(p.id)}
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {installation.length === 0 && (
          <p className="text-center text-5xl text-gray-500 my-6">
            No apps installed 
          </p>
        )}
      </div>
    </div>
  );
};

export default Installation;
