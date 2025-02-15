import { useState } from "react";
import "./Display.css";

const Display = ({ contract, account }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
      return;
    }

    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const strArray = str.split(",");
      const images = strArray.map((item) => {
        // Ensure the URL is correctly formed
        let sanitizedItem = item.trim();
        if (sanitizedItem.startsWith("ipfs://")) {
          sanitizedItem = sanitizedItem.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/");
        }
        console.log("Sanitized URL:", sanitizedItem); // Debugging output
        return sanitizedItem;
      });
      setData(images);
    } else {
      alert("No image to display");
    }
  };

  return (
    <>
      <div className="image-list">
        {data.map((src, i) => (
          <img key={i} src={src} alt="uploaded" className="image-list-item" onError={(e) => e.target.style.display = 'none'} />
        ))}
      </div>
      <input type="text" placeholder="Enter Address" className="address" />
      <button className="center button" onClick={getData}>
        Get Data
      </button>
    </>
  );
};

export default Display;
