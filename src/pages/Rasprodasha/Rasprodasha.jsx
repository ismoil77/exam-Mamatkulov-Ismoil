import React from "react";

import "./ras.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";
import { Rating } from "@mui/material";

const Rasprodasha = () => {
  return (
    <>
      <div className="">
        <div className="bg-[#3154c7] flex justify-end pl-[100px] flex-row-reverse items-center w-[90%] mx-auto mt-[50px] py-[40px]  rounded-[80px] ">
          <div className=" text-[white] flex flex-col  font-[roboto] gap-6">
            <p className="text-[#525252] text-[20px]">Главная / Как покупать</p>
            <p className="font-[roboto] text-[30px] ">
              Научим покупать в Великобритании!
            </p>
            <p>и экономить до 70%</p>
            <button className="w-[230px] bg-[#00C97B] py-[10px] px-[15px] rounded-[25px] text-[white] font-[roboto]">
              Получить адрес в UK
            </button>
          </div>
        </div>
      </div>

      <div className="font-[roboto] w-[80%] mt-[100px] mx-auto ">
        <p className="font-extrabold text-[35px] max-w-[500px]">
          Black Friday Early Access ранний доступ к распродажам в магазинах
          Великобритании!
        </p>
      </div>
      {/* sec */}
      <div className="w-[80%] mx-auto">
        {/* <Swiper navigation={true} modules={[Navigation]} className="mySwipe">
          <SwiperSlide>
            <div className="flex items-center gap-4 shadow-2xl shadow-black h-[300px] rounded-[30px] mt-[100px]">
              <img src="../../src/assets/01 1.svg" alt="" />
              <div className="">
                <div className="flex items-center gap-5 w-[400px]">
                  <p className="text-[#01CD7D] text-[50px] font-[roboto]">01</p>
                  <p className="font-[roboto] text-[20px]">
                    Получаем адрес для покупок в магазинах Великобритании{" "}
                  </p>
                </div>
                <p className="text-[#363636] font-[roboto]">
                  Okeypost поможет притвориться американцем и не переплачивать.
                  Для этого нужно зарегистрироваться в нашем сервисе. После
                  регистрации вам станут доступны два адреса в Англии, которые
                  вы сможете указывать при оформлении заказов в
                  интернет-магазинах.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center gap-4 shadow-2xl shadow-black h-[300px] rounded-[30px] mt-[100px]">
              <img src="../../src/assets/02 1.svg" alt="" />
              <div className="">
                <div className="flex items-center gap-5 w-[400px]">
                  <p className="text-[#01CD7D] text-[50px] font-[roboto]">02</p>
                  <p className="font-[roboto] text-[20px]">
                    Получаем адрес для покупок в магазинах Великобритании{" "}
                  </p>
                </div>
                <p className="text-[#363636] font-[roboto]">
                  Okeypost поможет притвориться американцем и не переплачивать.
                  Для этого нужно зарегистрироваться в нашем сервисе. После
                  регистрации вам станут доступны два адреса в Англии, которые
                  вы сможете указывать при оформлении заказов в
                  интернет-магазинах.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center gap-4 shadow-2xl shadow-black h-[300px] rounded-[30px] mt-[100px]">
              <img src="../../src/assets/01 1.svg" alt="" />
              <div className="">
                <div className="flex items-center gap-5 w-[400px]">
                  <p className="text-[#01CD7D] text-[50px] font-[roboto]">03</p>
                  <p className="font-[roboto] text-[20px]">
                    Получаем адрес для покупок в магазинах Великобритании{" "}
                  </p>
                </div>
                <p className="text-[#363636] font-[roboto]">
                  Okeypost поможет притвориться американцем и не переплачивать.
                  Для этого нужно зарегистрироваться в нашем сервисе. После
                  регистрации вам станут доступны два адреса в Англии, которые
                  вы сможете указывать при оформлении заказов в
                  интернет-магазинах.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center gap-4 shadow-2xl shadow-black h-[300px] rounded-[30px] mt-[100px]">
              <img src="../../src/assets/01 1.svg" alt="" />
              <div className="">
                <div className="flex items-center gap-5 w-[400px]">
                  <p className="text-[#01CD7D] text-[50px] font-[roboto]">04</p>
                  <p className="font-[roboto] text-[20px]">
                    Получаем адрес для покупок в магазинах Великобритании{" "}
                  </p>
                </div>
                <p className="text-[#363636] font-[roboto]">
                  Okeypost поможет притвориться американцем и не переплачивать.
                  Для этого нужно зарегистрироваться в нашем сервисе. После
                  регистрации вам станут доступны два адреса в Англии, которые
                  вы сможете указывать при оформлении заказов в
                  интернет-магазинах.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper> */}
      </div>
      {/* sli */}
      <div className="w-[80%] mx-auto mt-[100px] flex flex-wrap gap-[30px]">
        <div className="flex items-center w-[47%] gap-3 py-[0px] px-[20px] shadow-2xl shadow-black rounded-[20px]">
          <img src="../../src/assets/фон (6).svg" alt="" />
          <div className="flex flex-col justify-between gap-[20px]">
            <p className="font-semibold">Abercrombie & Fitch</p>

            <p className="text-[grey]">
              цены от £7.99 (3365₽) разделе: мужские вещи: CLEARANCE женские
              вещи: CLEARANCE
            </p>
            <p>качественные детские вещи на Abercrombie kids</p>
          </div>
        </div>
        <div className="flex items-center w-[47%] gap-3 py-[0px] px-[20px] shadow-2xl shadow-black rounded-[20px]">
          <img src="../../src/assets/фон (8).svg" alt="" />
          <div className="flex flex-col justify-between gap-[20px]">
            <p className="font-semibold">Abercrombie & Fitch</p>

            <p className="text-[grey]">
              цены от £7.99 (3365₽) разделе: мужские вещи: CLEARANCE женские
              вещи: CLEARANCE
            </p>
            <p>качественные детские вещи на Abercrombie kids</p>
          </div>
        </div>
        <div className="flex items-center w-[47%] gap-3 py-[0px] px-[20px] shadow-2xl shadow-black rounded-[20px]">
          <img src="../../src/assets/фон (7).svg" alt="" />
          <div className="flex flex-col justify-between gap-[20px]">
            <p className="font-semibold">Abercrombie & Fitch</p>

            <p className="text-[grey]">
              цены от £7.99 (3365₽) разделе: мужские вещи: CLEARANCE женские
              вещи: CLEARANCE
            </p>
            <p>качественные детские вещи на Abercrombie kids</p>
          </div>
        </div>
        <div className="flex items-center w-[47%] gap-3 py-[0px] px-[20px] shadow-2xl shadow-black rounded-[20px]">
          <img src="../../src/assets/фон (6).svg" alt="" />
          <div className="flex flex-col justify-between gap-[20px]">
            <p className="font-semibold">Abercrombie & Fitch</p>

            <p className="text-[grey]">
              цены от £7.99 (3365₽) разделе: мужские вещи: CLEARANCE женские
              вещи: CLEARANCE
            </p>
            <p>качественные детские вещи на Abercrombie kids</p>
          </div>
        </div>
        <div className="flex items-center w-[47%] gap-3 py-[0px] px-[20px] shadow-2xl shadow-black rounded-[20px]">
          <img src="../../src/assets/фон (6).svg" alt="" />
          <div className="flex flex-col justify-between gap-[20px]">
            <p className="font-semibold">Abercrombie & Fitch</p>

            <p className="text-[grey]">
              цены от £7.99 (3365₽) разделе: мужские вещи: CLEARANCE женские
              вещи: CLEARANCE
            </p>
            <p>качественные детские вещи на Abercrombie kids</p>
          </div>
        </div>
        <div className="flex items-center w-[47%] gap-3 py-[0px] px-[20px] shadow-2xl shadow-black rounded-[20px]">
          <img src="../../src/assets/фон (7).svg" alt="" />
          <div className="flex flex-col justify-between gap-[20px]">
            <p className="font-semibold">Abercrombie & Fitch</p>

            <p className="text-[grey]">
              цены от £7.99 (3365₽) разделе: мужские вещи: CLEARANCE женские
              вещи: CLEARANCE
            </p>
            <p>качественные детские вещи на Abercrombie kids</p>
          </div>
        </div>
      </div>
      <footer>
        <div className="bg-[#3190c7] flex flex-row-reverse items-center justify-center rounded-[80px] py-[30px] mt-[100px]  gap-[150px]">
          <div className=" text-[white] flex flex-col  gap-6">
            <img src="../../src/assets/Соцсети.svg" alt="" />
          </div>

          <div className=" text-[white] font-semibold">
            <p className="text-[20px] ">
              Остались вопросы? Спросите нас в соцсетях!
            </p>
          </div>
        </div>

        <div className="flex w-[75%] mx-auto justify-between gap-5 mt-[100px] pb-[100px]">
          <div className="">
            <img src="../../src/assets/_2243895274448oke1.svg" alt="" />
            <img src="../../src/assets/Соцсети.svg" alt="" />
          </div>
          <div className="text-[17px] font-[roboto] text-[#000000]">
            <p>О компании</p>
            <div className="text-[15px] font-[roboto] text-[grey]">
              <p>Услуги</p>
              <p>Цены</p>
              <p>Отзывы</p>
              <p>Контакты</p>
              <p>Вакансии</p>
              <p>Соглашение о персональных данных</p>
            </div>
          </div>
          <div className="text-[17px] font-[roboto] text-[#000000]">
            <p>Полезное</p>
            <div className="text-[15px] font-[roboto] text-[grey]">
              <p>Как работает наш сервис</p>
              <p>Как покупать с оператором</p>
              <p>Как покупать с оператром</p>
              <p>Как покпать с оператором</p>
              <p>Как покупать с оператором</p>
              <p>Соглашение о персональных данных</p>
            </div>
          </div>
          <div className="text-[17px] font-[roboto] text-[#000000]">
            <p>Спецпроекты</p>
            <div className="text-[15px] font-[roboto] text-[grey]">
              <p>Как работает наш сервис</p>
              <p>Как покупать с оператором</p>
              <p>Как покупать с оператром</p>
              <p>Как покпать с оператором</p>
              <p>Как покупать с оператором</p>
              <p>Соглашение о персональных данных</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-[100%] h-[2px] bg-[grey]">
            <p className=" text-center pt-[30px] pb-[30px] text-[20px] font-[roboto] text-[grey] dark:bg-[black] dark:text-[white]">
              © 2021 Okeypost . Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Rasprodasha;
