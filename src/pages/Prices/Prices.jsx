import React from "react";

const Prices = () => {
  return (
    <>
      <div className="">
        <div className="bg-[#3154c7] flex justify-end pl-[100px] flex-row-reverse items-center w-[90%] mx-auto mt-[50px] py-[40px]  rounded-[80px] ">
          <div className=" text-[white] flex flex-col  font-[roboto] gap-6">
            <p className="text-[#525252] text-[20px]">Главная / Цены</p>
            <p className="font-[roboto] text-[40px] ">
              Услуги доставки из Великобритании!
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto ">
        <div className="flex justify-between">
          <div className="font-[roboto] font-semibold mt-[100px] text-left w-[24%] flex flex-col gap-5">
            <img src="../../src/assets/Illustration.svg" alt="" />
            <p>ВЫ ВЫБИРАЕТЕ ТОВАР</p>
            <p className="text-[grey]">
              в английском магазине, оплачиваете и указываете адрес склада
              OkeyPost
            </p>
            <button className="mt-[50px] w-[230px] bg-[#006fc9] py-[10px] px-[15px] rounded-[25px] text-[white] font-[roboto]">
              от £0.25
            </button>
          </div>
          <div className="font-[roboto] font-semibold mt-[100px] text-left w-[24%] flex flex-col gap-5">
            <img src="../../src/assets/Illustration (1).svg" alt="" />
            <p>ЗАБИРАЕТЕ свою ПОСЫЛКУ</p>
            <p className="text-[grey]">
              в английском магазине, оплачиваете и указываете адрес склада
              OkeyPost
            </p>
            <button className="mt-[50px] w-[230px] bg-[#006fc9] py-[10px] px-[15px] rounded-[25px] text-[white] font-[roboto]">
              от £0.25
            </button>
          </div>
          <div className="font-[roboto] font-semibold mt-[100px] text-left w-[24%] flex flex-col gap-5">
            <img src="../../src/assets/Illustration (2).svg" alt="" />
            <p>ОТПРАВЛЯЕМ ИХ К ВАМ ДОМОЙ</p>
            <p className="text-[grey]">
              в английском магазине, оплачиваете и указываете адрес склада
              OkeyPost
            </p>
            <button className="mt-[50px] w-[230px] bg-[#006fc9] py-[10px] px-[15px] rounded-[25px] text-[white] font-[roboto]">
              от £0.25
            </button>
          </div>
          <div className="font-[roboto] font-semibold mt-[100px] text-left w-[24%] flex flex-col gap-5">
            <img src="../../src/assets/Illustration (3).svg" alt="" />
            <p>ПОКУПКИ ПРИХОДЯТ НА СКЛАД</p>
            <p className="text-[grey]">
              в английском магазине, оплачиваете и указываете адрес склада
              OkeyPost
            </p>
            <button className="mt-[50px] w-[230px] bg-[#006fc9] py-[10px] px-[15px] rounded-[25px] text-[white] font-[roboto]">
              от £0.25
            </button>
          </div>
        </div>
      </div>

      <div className="">
        <div className="text-[roboto] font-extrabold max-w-[700px]  ml-[200px] mt-[100px]">
          <p className="text-[30px]">
            Онлайн-калькулятор стоимости доставки товара
          </p>
          <p className="font-semibold mt-[30px]">
            Рассчитайте стоимость доставки из Англии к вам домой. Мы получим
            ваши посылки на складе, при необходимости объединим несколько
            доставок в одну и отправим их к вам надежно упакованными.
          </p>
        </div>
        <div className="w-[85%] mx-auto text-[roboto] font-extrabold mt-[50px] bg-[#e7e7e7] px-[20px] rounded-[20px] py-[20px] flex justify-between dark:bg-[black] dark:text-[white] dark:border-2 dark:shadow-2xl dark:shadow-white">
          <div className="">
            <p>Страна:</p>
            <p className="font-bold text-[grey] mt-[20px]">Россия</p>

            <div className="max-w-[250px] h-[1px] bg-[black] mt-[10px]"></div>
            <button className="mt-[50px] w-[230px] bg-[#00C97B] py-[10px] px-[15px] rounded-[25px] text-[white] font-[roboto]">
              Рассчитать
            </button>
          </div>
          <div className="">
            <p>Город:</p>
            <p className="font-bold text-[grey] mt-[20px]">Москва</p>

            <div className="w-[250px] h-[1px] bg-[black] mt-[10px]"></div>
          </div>
          <div className="">
            <p>Индекс:</p>
            <p className="font-bold text-[grey] mt-[20px]">Введите индекс</p>

            <div className="w-[250px] h-[1px] bg-[black] mt-[10px]"></div>
          </div>
          <div className="">
            <p>Вес посылки:</p>
            <p className="font-bold text-[grey] mt-[20px]">0,5 kg</p>

            <div className="w-[250px] h-[1px] bg-[black] mt-[10px]"></div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="w-[85%] mx-auto text-[roboto] font-extrabold mt-[50px] ">
          <p className="text-[30px]">Варианты доставки:</p>
          <div className="mt-[60px] flex flex-col">
            <div className="flex items-center justify-between shadow-2xl px-[20px] py-[10px] rounded-[20px] mt-[50px]">
              <div className="flex items-center gap-6 ">
                <img src="../../src/assets/Иконка (7).svg" alt="" />
                <p>Почта России</p>
              </div>
              <div className="flex justify-between gap-8">
                <div className="">
                  <p className="text-[grey]">Сроки:</p>
                  <p>10-14 дней</p>
                </div>
                <div className="">
                  <p className="text-[grey]">Стоимость доставки:</p>
                  <p>от £27.00</p>
                </div>
                <div className="">
                  <p className="text-[grey]">Итого:</p>
                  <p>£41.99</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between shadow-2xl px-[20px] py-[10px] rounded-[20px] mt-[50px]">
              <div className="flex items-center gap-6 ">
                <img src="../../src/assets/Иконка (7).svg" alt="" />
                <p>EMS ПОЧТА РОССИЯ</p>
              </div>
              <div className="flex justify-between gap-8">
                <div className="">
                  <p className="text-[grey]">Сроки:</p>
                  <p>9-12 дней</p>
                </div>
                <div className="">
                  <p className="text-[grey]">Стоимость доставки:</p>
                  <p>от £40.00</p>
                </div>
                <div className="">
                  <p className="text-[grey]">Итого:</p>
                  <p>£54.55</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between shadow-2xl px-[20px] py-[10px] rounded-[20px] mt-[50px]">
              <div className="flex items-center gap-6 ">
                <img src="../../src/assets/Иконка (7).svg" alt="" />
                <p>Почта России</p>
              </div>
              <div className="flex justify-between gap-8">
                <div className="">
                  <p className="text-[grey]">Сроки:</p>
                  <p>10-14 дней</p>
                </div>
                <div className="">
                  <p className="text-[grey]">Стоимость доставки:</p>
                  <p>от £27.00</p>
                </div>
                <div className="">
                  <p className="text-[grey]">Итого:</p>
                  <p>£41.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="font-[roboto] font-extralight mt-[100px] w-[80%] mx-auto">
        <p className="text-[30px]">Услуги склада</p>
        <div classNme="">
          <div className=" w-[100%] shadow-inner h-[40px] flex items-center shadow-black mt-[50px] ">
            <p className="text-[15px]">Консолидация</p>
          </div>
          <div className=" w-[100%] shadow-inner h-[40px] flex items-center shadow-black mt-[50px] ">
            <p className="text-[15px]">
              Что делать, если Вы забыли внести трек номер на сайт, а заказ уже
              пришел?
            </p>
          </div>
          <div className=" w-[100%] shadow-inner h-[40px] flex items-center shadow-black mt-[50px] ">
            <p className="text-[15px]">
              Что делать, если Вы забыли внести трек номер на сайт, а заказ уже
              пришел?
            </p>
          </div>
          <div className=" w-[100%] shadow-inner h-[40px] flex items-center shadow-black mt-[50px] ">
            <p className="text-[15px]">
              Что делать, если Вы забыли внести трек номер на сайт, а заказ уже
              пришел?
            </p>
          </div>
          <div className=" w-[100%] shadow-inner h-[40px] flex items-center shadow-black mt-[50px] ">
            <p className="text-[15px]">
              Что делать, если Вы забыли внести трек номер на сайт, а заказ уже
              пришел?
            </p>
          </div>

          <div className=" w-[100%] shadow-inner h-[40px] flex items-center shadow-black mt-[50px] ">
            <p className="text-[15px]">
              Что делать, если Вы забыли внести трек номер на сайт, а заказ уже
              пришел?
            </p>
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

export default Prices;
