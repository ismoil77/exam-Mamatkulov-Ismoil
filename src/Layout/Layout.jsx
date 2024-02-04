import { Link, Outlet } from "react-router-dom";
import "./lay.css";
import Switcher from "../components/Swicher";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useRef, useState } from "react";

const Layout = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="bg-[white] dark:bg-[black] dark:text-[white]">
      <div className="font-[roboto] flex items-center justify-between w-[85%] mx-auto ">
        <div className="dark:bg-[black]">
          <Switcher />
        </div>
        <Link to={"/"}>
          {" "}
          <div className="font-[roboto]">
            <img src="../src/assets/_2243895274448oke1.svg" alt="" />
          </div>
        </Link>
        <img
          src="./src/assets/hamburger-menu.webp"
          className="hidden sm:block w-[50px] dark:invert ml-10px"
          alt=""
        />

        <ul className="font-[roboto] flex gap-[10px] text-[15px] dark:text-[white] sm:hidden">
          <Link to={"/"}>
            <li className="hover:text-[#529cce]">Главная</li>
          </Link>

          <Link to={"/kakPokupat"}>
            {" "}
            <li className="hover:text-[#529cce]">Как покупать</li>
          </Link>
          <Link to={"/Rasprodashi"}>
            {" "}
            <li className="hover:text-[#529cce]">Распродажи</li>
          </Link>
          <Link to={"/prices"}>
            {" "}
            <li className="hover:text-[#529cce]">Цены</li>
          </Link>
          <Link to={"/help"}>
            <li className="hover:text-[#529cce]">Помощь</li>
          </Link>
          <Link to={"/bonuses"}>
            <li className="hover:text-[#529cce]">Бонусы</li>
          </Link>
          <Link to={"/blog"}>
            {" "}
            <li className="hover:text-[#529cce]">Блог</li>
          </Link>
          <Link to={"/market"}>
            <li className="hover:text-[#529cce]">Магазины</li>
          </Link>
        </ul>
        <div className="font-[roboto] flex items-center gap-[30px]">
          <div className="font-[roboto] flex items-center gap-[15px]">
            <img src="../../src/assets/Useruser.svg" alt="" />
            <p className="font-[roboto]">Вход</p>
          </div>
          <div className="">
            <button className="m-w-[170px] bg-[#00C97B] px-[15px] py-[10px] rounded-[25px] text-[white] font-[roboto]">
              Связаться с нами
            </button>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Layout;
