import React, { useState, useEffect } from "react";
import axios from "axios";

function Pesannya() {
  const [daftarPesan, setDaftarPesan] = useState([]);
  useEffect(() => {
    axios.get("https://latihanapi1.herokuapp.com/").then((res) => {
      setDaftarPesan(res.data);
    });
  }, []);
  return (
    <div className="flex w-screen justify-center items-center flex-wrap flex-col bg-blue-300">
      {daftarPesan.map((pesan) => (
        <div>
          <h1>{pesan.pesan}</h1>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Pesannya;
