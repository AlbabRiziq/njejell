import { useState, useEffect } from "react";
import axios from "axios";

function Body() {
  const [pesan, setPesan] = useState();
  const [location, setLocation] = useState();
  const [toggle, setToggle] = useState(false);

  function kirim() {
    axios({
      method: "post",
      url: "https://latihanapi1.herokuapp.com/tambah",
      params: {
        pesan: pesan,
        location: location,
      },
    });
    setToggle(!toggle);
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(`${position.coords.latitude},${position.coords.longitude}`);
    });
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <form className="bg-blue-300 p-10 rounded-xl">
        <textarea
          className="rounded-lg p-5"
          name="pesan"
          id="pesan"
          placeholder="Coba tulis apa aja terus kirim"
          cols="30"
          rows="5"
          value={pesan}
          onChange={(k) => {
            setPesan(k.target.value);
          }}
        ></textarea>
        <br />
        <button
          onClick={kirim}
          type="button"
          className="bg-green-400 p-2 pr-5 pl-5 rounded-xl"
        >
          KIRIM
        </button>
        {toggle ? (
          <div>
            <h1 className="text-center">Oke makasih bang dah ngisi</h1>
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default Body;
