import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import useProducts from "../Hooks/useProducts";
import { SyncLoader } from "react-spinners";
import { useParams } from "react-router";
import "react-toastify/dist/ReactToastify.css";

const InstallButton = ({ size }) => {
  const [installed, setInstalled] = useState(false);
  const { products, loading } = useProducts();
  const { id } = useParams();

  const product = products.find((p) => String(p.id) === id);

  useEffect(() => {
    const existingList = JSON.parse(localStorage.getItem("installed")) || [];
    const alreadyInstalled = existingList.some(
      (item) => String(item.id) === id
    );
    if (alreadyInstalled) {
      setInstalled(true);
    }
  }, [id]);

  if (loading) return <SyncLoader />; 
  const handleClick = () => {
    if (installed) return; 
    setInstalled(true);
    toast.success("App Installed Successfully!");

    const existingList = JSON.parse(localStorage.getItem("installed")) || [];
    const updatedList = [...existingList, product];
    localStorage.setItem("installed", JSON.stringify(updatedList));
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`${
          installed ? "bg-gray-500" : "bg-green-500 hover:bg-green-600"
        } text-white font-semibold px-6 py-2 rounded`}
        disabled={installed}
      >
        {installed ? "Installed" : `Install Now (${size} MB)`}
      </button>
      <ToastContainer />
    </div>
  );
};

export default InstallButton;
