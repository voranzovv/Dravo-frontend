import Axios from "axios";
import React, { useState, useEffect } from "react";
import Home from "./home";

//login
const Login = () => {
  const [uname, setuname] = useState("");
  const [pass, setpass] = useState("");
  const [store, setstore] = useState("");
  const [login, setlogin] = useState(false);
  const [orders, setorders] = useState([]);
  const [currentPage, setcurrentPage] = useState(1)

  //store in localStorage in the beginning
  useEffect(() => {
    storeCollector();
  }, []);

  //signout - clear locaStorage setLogin false
  const onSignout = (e) => {
    localStorage.removeItem("login");
    setlogin(false);
    console.log("signed out");
  };

  //get from localStorage
  const storeCollector = () => {
    let storee = JSON.parse(localStorage.getItem("login"));
    if (store && storee) {
      console.log("this store", storee);
      setlogin(true);
      setstore(storee);
    }
  };

  //login
  const handleLogin = () => {
    const credintial = { email: uname, password: pass };
    Axios.post("http://127.0.0.1:8000/api/login", credintial)
      .then((res) => {
        setstore(res.data);
        localStorage.setItem(
          "login",
          JSON.stringify({
            login: true,
            token: res.data.access_token,
            user: res.data.user,
          })
        );

        storeCollector();
        getOrders();
      })
      .catch((error) => alert(error.message));
  };

  //get orders
  const getOrders = () => {
    let token = JSON.parse(localStorage.getItem("login"));
    console.log("Bearer " + token.token);
    let header = { headers: { Authorization: "Bearer " + token.token } };
    Axios.get(`http://127.0.0.1:8000/api/orders`, header).then((res) => {
      setorders(res);
    });
  };

  return (
    <div className="wrapper fadeInDown">
      {!login ? (
        <div>
          <input
            type="text"
            onChange={(e) => setuname(e.target.value)}
            name=""
            className=""
            placeholder=""
          />
          <input
            type="text"
            onChange={(e) => setpass(e.target.value)}
            name=""
            className=""
            placeholder=""
          />

          <button onClick={() => handleLogin()}>Login</button>
        </div>
      ) : (
        <div>
          <Home store={store} handleSignout={onSignout} orders={orders.data} />
        </div>
      )}
    </div>
  );
};

export default Login;
