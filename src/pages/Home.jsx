import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
// import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}

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
const Home = () => {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

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

  let api = "http://localhost:3000/data";
  const [data, setData] = useState([]);

  function butEdit(el) {
    setIdx(el.id);
    setTitle(el.title);
    setPrice(el.price);
    setOpen(true);
  }

  async function get() {
    try {
      const { data } = await axios.get(api);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

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
  useEffect(() => {
    get();
  }, []);

  return (
    <div>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <MyApp />
          <Paper elevation={0} />
          
          <div>
            <Button onClick={handleOpen2} variant="contained">
              ADD USER
            </Button>
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
          Home
          <img src="../../src/assets/Screenshot_11.png" alt="" />
          <div className="grid grid-cols-3 justify-center gap-10 ">
            {data.map((el) => {
              return (
                <div className="flex flex-col border-4 w-[300px] border-black shadow-xl shadow-black items-center">
                  <h1 className="">{el.title}</h1>
                  <h1 className="">{el.price}</h1>
                  <div className=" flex my-[30px]">
                    {/* <Button
                  variant="contained"
                  onClick={() => {
                    butEdit(el);
                  }}
                >
                  EDIT
                </Button> */}
                    <Button
                  variant="contained"
                  onClick={() => {
                    del(el.id);
                  }}
                >
                  Delete
                </Button>
                    <Link to={`/about/${el.id}`}>
                      <Button variant="contained">Info</Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <Paper />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
};

export default Home;
