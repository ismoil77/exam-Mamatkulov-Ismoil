import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";

import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const About = () => {
  
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);

  const handleOpen2 = () => setOpen2(true);

  const handleClose2 = () => setOpen2(false);

  let [idx, setIdx] = useState("");

  let [title, setTitle] = useState("");

  let [price, setPrice] = useState("");

  let [title2, setTitle2] = useState("");

  let [price2, setPrice2] = useState("");

  const { id } = useParams();

  let api = "http://localhost:3000/data";

  const [data, setData] = useState([]);

  async function get() {
    try {
      const { data } = await axios.get(api);

      console.log(
        data.find((el) => {
          return el.id === id;
        })
      );
      setData(
        data.find((el) => {
          return el.id === id;
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    get();
  }, []);

  async function del(id) {
    try {
      const { data } = await axios.delete(`${api}/${id}`);
      //  setData(data);
      get();
    } catch (error) {
      console.log(error);
    }
  }

  async function putt(e) {
    try {
      e.preventDefault();
      let user = {
        title: title,
        price: price,
        status: false,
      };
      // console.log(user);
      // console.log(idx);
      const { data } = await axios.put(`${api}/${idx}`, user);
      // setData(data);
      get();
      // setTitle2('')
      // setPrice2("");
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  }
  async function addU(e) {
    try {
      e.preventDefault();
      let user = {
        title: title2,
        price: price2,
        status: false,
      };
      // console.log(user);
      // console.log(idx);
      const { data } = await axios.post(`${api}`, user);
      // setData(data);
      get();
      setTitle2("");
      setPrice2("");
      setOpen2(false);
    } catch (error) {
      console.log(error);
    }
  }
  function butEdit(el) {
    setIdx(el.id);
    setTitle(el.title);
    setPrice(el.price);
    setOpen(true);
  }

  // console.log(data2);
  return (
    <>
      <div>
        About
        <div>
          {/* <Button onClick={handleOpen2} variant="contained">
            ADD USER
          </Button> */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Button onClick={handleClose}>Х</Button>
              <form
                action=""
                onSubmit={(e) => {
                  putt(e);
                }}
              >
                <input
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  className="border-4 border-black"
                  placeholder="name"
                />

                <input
                  type="text"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  className="border-4 border-black"
                  placeholder="price"
                />
                <button type="submit">EDIT</button>
              </form>
            </Box>
          </Modal>
          <Modal
            open={open2}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Button onClick={handleClose2}>Х</Button>
              <form
                action=""
                onSubmit={(e) => {
                  addU(e);
                }}
              >
                <input
                  type="text"
                  value={title2}
                  onChange={(e) => {
                    setTitle2(e.target.value);
                  }}
                  className="border-4 border-black"
                  placeholder="name"
                />

                <input
                  type="text"
                  value={price2}
                  onChange={(e) => {
                    setPrice2(e.target.value);
                  }}
                  className="border-4 border-black"
                  placeholder="price"
                />
                <button type="submit">ADD</button>
              </form>
            </Box>
          </Modal>
        </div>
        <div className="">
          <img src="../../src/assets/Screenshot_10.png" alt="" />
        </div>
      </div>
      {/* <div class="container">
        <h2>About New York City</h2>
        <p>
          New York City (NYC), often simply called New York, is the most
          populous city in the United States. With an estimated 2020 population
          of 8,622,698 distributed over about 302.6 square miles, New York City
          is also the most densely populated major city in the United States.
          Located at the southern tip of the state of New York, the city is the
          center of the New York metropolitan area, the largest metropolitan
          area in the world by urban landmass.
        </p>

        <h2>Landmarks</h2>
        <ul>
          <li>Statue of Liberty</li>
          <li>Empire State Building</li>
          <li>Central Park</li>
          <li>Times Square</li>
          <li>Brooklyn Bridge</li>
        </ul>

        <img
          src="https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg"
          alt="New York City Skyline"
        />
      </div> */}

      {[data].map((el) => {
        return (
          <div className="flex flex-col border-4 w-[300px] border-black shadow-xl shadow-black items-center">
            <h1 className="">{el.title}</h1>
            <h1 className="">{el.price}</h1>
            <div className=" flex my-[30px]"></div>
            <div className=" flex my-[30px]">
              <Button
                variant="contained"
                onClick={() => {
                  butEdit(el);
                }}
              >
                EDIT
              </Button>
              {/* <Button
                variant="contained"
                onClick={() => {
                  del(el.id);
                }}
              >
                Delete
              </Button> */}
              {/* <Link to={`/about/${el.id}`}>
                <Button variant="contained">Info</Button>
              </Link> */}
            </div>
          </div>
        );
      })}
      <Button>ADD</Button>
    </>
  );
};

export default About;
