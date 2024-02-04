import { Rating } from "@mui/material";
import React from "react";

const IndexPage = () => {
  return (
    <>
      <div className=" dark:bg-[black] dark:text-[white]">
        {/* sec1 */}
        <div className="bg-[#3190c7] flex justify-between items-center w-[90%] mx-auto mt-[50px] py-[40px]  rounded-[80px] pt-[50px] dark:bg-[black] dark:text-[white] dark:border-2 dark:shadow-2xl dark:shadow-white">
          <div className=" text-[white] flex flex-col  w-[45%] gap-6 mx-[60px]">
            <p className="font-[roboto] text-[50px] ">
              Доставка товаров из Великобритании в Россию
            </p>
            <p>
              Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost,
              чтобы покупать со скидками в UK одежду, обувь, гаджеты известных
              брендов и безопасно отправлять вещи в Россию.
            </p>
            <button className="w-[230px] bg-[#00C97B] px-[15px] py-[10px] rounded-[25px] text-[white] font-[roboto]">
              Получить адрес в UK
            </button>
          </div>
          <div className="w-[45%]">
            <img
              className="w-[80%]"
              src="../../src/assets/Иллюстрацияin1.svg"
              alt=""
            />
          </div>
        </div>

        {/* sec1 naskolko */}

        <div className="text-[black] font-[roboto] w-[80%] mx-auto mt-[70px dark:bg-[black] dark:text-[white]]">
          <div className="dark:bg-[black] dark:text-[white]">
            <p className="text-[40px] w-[400px]">Насколько выгодно покупать?</p>
          </div>
          <div className="kur h-[100px] bg-[#f1f1f1] w-[100%] rounded-[20px] flex justify-between items-center px-[10px] py-[30px] shadow-2xl shadow-black mt-[50px] dark:bg-[black] dark:text-[white]">
            <div className="flex items-center hover:bg-white  ">
              <img src="../../src/assets/Vector 5.svg" alt="" />
            </div>
            <div className="flex items-center hover:bg-white">
              <img src="../../src/assets/Иконка (1).svg" alt="" />
              <p>Одежда</p>
            </div>
            <div className="flex items-center hover:bg-white">
              <img src="../../src/assets/Иконка (1).svg" alt="" />
              <p>Одежда</p>
            </div>
            <div className="flex items-center hover:bg-white">
              <img src="../../src/assets/Иконка (1).svg" alt="" />
              <p>Одежда</p>
            </div>
            <div className="flex items-center hover:bg-white">
              <img src="../../src/assets/Иконка (1).svg" alt="" />
              <p>Одежда</p>
            </div>
            <div className="flex items-center hover:bg-white">
              <img src="../../src/assets/Иконка (1).svg" alt="" />
              <p>Одежда</p>
            </div>
            <div className="flex items-center hover:bg-white">
              <img src="../../src/assets/Иконка (1).svg" alt="" />
              <p>Одежда</p>
            </div>
            <div className="flex items-center hover:bg-white">
              <img src="../../src/assets/Vector 6.svg" alt="" />
            </div>
          </div>
        </div>

        {/* sec1 kolumbia */}

        <div className="font-[roboto] text-[black] mt-[100px] w-[80%] mx-auto flex dark:bg-[black] dark:text-[white]">
          <div className="">
            <p className="text-[26px] w-[370px] font-[poppins] font-extrabold mb-[30px]">
              Columbia Barlow Pass 550 Turbodown Jacket
            </p>
            <div className="flex items-center bg-[#F2F6FC] w-[300px] justify-center pr-[30px] rounded-[20px]">
              <img src="../../src/assets/фон.svg" alt="" />
              <div className="">
                <p>Цена в России</p>
                <p className="font-extrabold font-[poppins]">7891,46₽</p>
              </div>
            </div>
            <div className="flex w-[150px] mt-[100px] gap-3">
              <img src="../../src/assets/Футболка.svg" alt="" />
              <img src="../../src/assets/Vector 5.svg" alt="" />
            </div>
          </div>

          <div className="text-center font-sans font-extrabold text-[17px] ">
            <img src="../../src/assets/Куртка.svg" alt="" />
            <p>Срок доставки примерно 10 дней</p>
            <p>
              Вы экономите до <span className="text-[#01CD7D]">$119.56</span>
            </p>
          </div>

          <div className="flex flex-col items-end ">
            <p className="text-[26px] w-[370px] font  ] font-extrabold mb-[30px]">
              Доставка одежды из Великобритании от{" "}
              <span className="text-[#01CD7D]">£7.79</span>
            </p>
            <div className="flex items-center bg-[#F2F6FC] w-[300px] pr-[30px] rounded-[20px]">
              <img src="../../src/assets/фон (1).svg" alt="" />
              <div className="">
                <p>Цена в Великобритании</p>
                <p className="font-extrabold font-[poppins]">7891,46₽</p>
              </div>
            </div>
            <div className="flex w-[150px] flex-row-reverse mt-[100px] gap-3 justify-end">
              <img src="../../src/assets/Layer 3 1.svg" alt="" />
              <img src="../../src/assets/Vector 6.svg" alt="" />
            </div>
          </div>
        </div>

        {/* sec */}
        <div className="text-[black] font-[roboto] w-[80%] mx-auto mt-[70px]">
          <div className=""></div>
          <div className="kur h-[100px] bg-[#f1f1f1] w-[100%] rounded-[20px] flex justify-around items-center px-[10px] py-[30px] divide-solid divide-x-2 divide-[#575757] mt-[50px]">
            <div className="flex items-center hover:bg-white gap-6   pl-[10px]">
              <img src="../../src/assets/Иконка (6).svg" alt="" />
              <p className="w-[100px]">Экономия до 70%</p>
            </div>
            <div className="flex items-center hover:bg-white gap-6  pl-[20px]">
              <img src="../../src/assets/Иконка (6).svg" alt="" />
              <p className="w-[200px]">Только подлинная продукция</p>
            </div>
            <div className="flex items-center hover:bg-white gap-6  pl-[20px]">
              <img src="../../src/assets/Иконка (6).svg" alt="" />
              <p className="w-[100px]">Оперативная доставка</p>
            </div>
            <div className="flex items-center hover:bg-white gap-6  pl-[20px]">
              <img src="../../src/assets/Иконка (6).svg" alt="" />
              <p className="w-[150px]">Огромный выбор товаров</p>
            </div>
          </div>
        </div>
        {/* sec */}
        <div className="bg-[#3190c7] flex justify-between flex-row-reverse items-center w-[90%] mx-auto mt-[50px] py-[40px]  rounded-[80px] dark:bg-[black] dark:text-[white] dark:border-2 dark:shadow-2xl dark:shadow-white">
          <div className=" text-[white] flex flex-col  w-[65%] gap-6 mx-[60px]">
            <p className="font-[roboto] text-[30px] ">
              Поручите нашим мастерам шопинга оформить заказы в английских
              магазинах и освободите время для более важных дел.
            </p>
            <p>
              Такой способ покупки также подойдёт, если магазин принимает только
              английские карты.
            </p>
            <button className="w-[230px] bg-[#00C97B] py-[10px] px-[15px] rounded-[25px] text-[white] font-[roboto]">
              Попробовать
            </button>
          </div>
          <div className="w-[35%]">
            <img
              className="w-[80%]"
              src="../../src/assets/Иллюстрация.svg"
              alt=""
            />
          </div>
        </div>

        {/* sec */}

        <div className="text-[roboto] font-extrabold max-w-[700px]  ml-[200px] mt-[100px]">
          <p className="text-[30px]">
            OkeyPost удобная и быстрая доставка посылок из Великобритании{" "}
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

        <div className="font-[roboto] font-semibold mt-[100px]  w-[80%] mx-auto">
          <p className="text-[35px] w-[490px] mb-[50px]">
            4 простых шага для ваших покупок в Великобритании
          </p>
          <div className="flex justify-between">
            <div className="font-[roboto] font-semibold mt-[100px] text-left w-[24%] flex flex-col gap-5">
              <img src="../../src/assets/Illustration.svg" alt="" />
              <p>ВЫ ВЫБИРАЕТЕ ТОВАР</p>
              <p className="text-[grey]">
                в английском магазине, оплачиваете и указываете адрес склада
                OkeyPost
              </p>
            </div>
            <div className="font-[roboto] font-semibold mt-[100px] text-left w-[24%] flex flex-col gap-5">
              <img src="../../src/assets/Illustration (1).svg" alt="" />
              <p>ЗАБИРАЕТЕ свою ПОСЫЛКУ</p>
              <p className="text-[grey]">
                в английском магазине, оплачиваете и указываете адрес склада
                OkeyPost
              </p>
            </div>
            <div className="font-[roboto] font-semibold mt-[100px] text-left w-[24%] flex flex-col gap-5">
              <img src="../../src/assets/Illustration (2).svg" alt="" />
              <p>ОТПРАВЛЯЕМ ИХ К ВАМ ДОМОЙ</p>
              <p className="text-[grey]">
                в английском магазине, оплачиваете и указываете адрес склада
                OkeyPost
              </p>
            </div>
            <div className="font-[roboto] font-semibold mt-[100px] text-left w-[24%] flex flex-col gap-5">
              <img src="../../src/assets/Illustration (3).svg" alt="" />
              <p>ПОКУПКИ ПРИХОДЯТ НА СКЛАД</p>
              <p className="text-[grey]">
                в английском магазине, оплачиваете и указываете адрес склада
                OkeyPost
              </p>
            </div>
          </div>
        </div>

        {/*   /// */}
        <div className="font-semibold font-[roboto] w-[80%] mx-auto mt-[80px] ">
          <p className="text-[grey] text-[20px] max-w-[600px]">
            Не хотите разбираться самостоятельно, наши мастера шопинга с
            радостью купят все товары за вас.
          </p>
          <button className="mt-[50px] w-[230px] bg-[#00C97B] py-[10px] px-[15px] rounded-[25px] text-[white] font-[roboto]">
            Быстрая покупка
          </button>
        </div>
        {/* sec */}
        <div className="bg-[#3190c7] flex justify-between flex-row-reverse items-center w-[90%] mx-auto mt-[50px] py-[40px]  rounded-[80px] dark:bg-[black] dark:text-[white] dark:border-2 dark:shadow-2xl dark:shadow-white">
          <div className=" text-[white] flex flex-col  w-[65%] gap-6 mx-[60px]">
            <p className="font-[roboto] text-[30px] ">
              Виртуальный тур по нашему складу в реальном времени
            </p>
            <p>
              Такой способ покупки также подойдёт, если магазин принимает только
              английские карты.
            </p>
            <button className="w-[230px] bg-[#00C97B] py-[10px] px-[15px] rounded-[25px] text-[white] font-[roboto]">
              Попробовать
            </button>
          </div>
          <div className="w-[35%]">
            <img
              className="w-[80%]"
              src="../../src/assets/Иллюстрация (1).svg"
              alt=""
            />
          </div>
        </div>

        {/* sec */}

        <div className="font-[poppins] font-semibold w-[80%] mx-auto mt-[100px]">
          <p className="text-[35px] font-[roboto] font-semibold max-w-[700px]">
            120 000 довольных клиентов в России уже сделали свой выбор
          </p>
          <p className="text-[grey] text-[20px] max-w-[550px] mt-[40px]">
            За последний год десятки тысяч наших клиентов заказали товары из
            Англии и оставили 19 633 отзыва
          </p>
          <div className="font-[poppins] text-[black] mt-[100px] flex justify-between">
            <div className="flex flex-col items-center w-[30%] gap-6 shadow-2xl shadow-black rounded-[10px] py-[20px] px-[20px]">
              <img src="../../src/assets/Group 20.svg" className="" alt="" />
              <p className="text-[20px] font-extrabold font-[roboto]">
                Больше не значит дороже
              </p>
              <p className="text-[20px] text-[grey] font-extrabold font-[roboto] text-[center]">
                С ростом веса посылки цена за каждые 0.5 кг уменьшается в
                прогрессии.
              </p>
            </div>
            <div className="flex flex-col items-center w-[30%] gap-6 shadow-2xl shadow-black rounded-[10px] py-[20px] px-[20px]">
              <img src="../../src/assets/Иконка (8).svg" className="" alt="" />
              <p className="text-[20px] font-extrabold font-[roboto]">
                Больше не значит дороже
              </p>
              <p className="text-[20px] text-[grey] font-extrabold font-[roboto] text-[center]">
                С ростом веса посылки цена за каждые 0.5 кг уменьшается в
                прогрессии.
              </p>
            </div>
            <div className="flex flex-col items-center w-[30%] gap-6 shadow-2xl shadow-black rounded-[10px] py-[20px] px-[20px]">
              <img src="../../src/assets/Иконка (9).svg" className="" alt="" />
              <p className="text-[20px] font-extrabold font-[roboto]">
                SMS-уведомления
              </p>
              <p className="text-[20px] text-[grey] font-extrabold font-[roboto] text-[center]">
                С ростом веса посылки цена за каждые 0.5 кг уменьшается в
                прогрессии.
              </p>
            </div>
          </div>
        </div>

        <div className="font-[roboto] font-semibold w-[80%] mx-auto mt-[100px]">
          <p className="text-[40px] mt-[70px]">Отзывы и цитаты блогеров:</p>
          <div className="mt-[50px] flex flex-wrap gap-[70px]">
            <div className="flex items-center w-[46%] gap-3 py-[0px] px-[20px] shadow-2xl shadow-black rounded-[20px]">
              <img src="../../src/assets/фон (2).svg" alt="" />
              <div className="flex flex-col justify-between gap-[20px]">
                <p>NIKOLAY S</p>
                <Rating value={"4"} />
                <p className="text-[grey]">
                  Ваша доставка самая быстрая и дешёвая!!!
                </p>
                <p>
                  Дата:<span className="text-[grey]">16 Ноября 2021</span>
                </p>
                <p>
                  Город:<span className="text-[grey]">Санкт-Петербург </span>
                </p>
              </div>
            </div>
            <div className="flex items-center w-[46%] gap-3 py-[0px] px-[20px] shadow-2xl shadow-black rounded-[20px]">
              <img src="../../src/assets/фон (3).svg" alt="" />
              <div className="flex flex-col justify-between gap-[20px]">
                <p>DMITRIY D</p>
                <Rating value={"4"} />
                <p className="text-[grey]">
                  Ваша доставка самая быстрая и дешёвая!!!
                </p>
                <p>
                  Дата:<span className="text-[grey]">16 Ноября 2021</span>
                </p>
                <p>
                  Город:<span className="text-[grey]">Санкт-Петербург </span>
                </p>
              </div>
            </div>
            <div className="flex items-center w-[46%] gap-3 py-[0px] px-[20px] shadow-2xl shadow-black rounded-[20px]">
              <img src="../../src/assets/фон (4).svg" alt="" />
              <div className="flex flex-col justify-between gap-[20px]">
                <p>VLADIMIR E</p>
                <Rating value={"4"} />
                <p className="text-[grey]">
                  Ваша доставка самая быстрая и дешёвая!!!
                </p>
                <p>
                  Дата:<span className="text-[grey]">16 Ноября 2021</span>
                </p>
                <p>
                  Город:<span className="text-[grey]">Санкт-Петербург </span>
                </p>
              </div>
            </div>
            <div className="flex items-center w-[46%] gap-3 py-[0px] px-[20px] shadow-2xl shadow-black rounded-[20px]">
              <img src="../../src/assets/фон (5).svg" alt="" />
              <div className="flex flex-col justify-between gap-[20px]">
                <p>Оксана</p>
                <Rating value={"4"} />
                <p className="text-[grey]">
                  Ваша доставка самая быстрая и дешёвая!!!
                </p>
                <p>
                  Дата:<span className="text-[grey]">16 Ноября 2021</span>
                </p>
                <p>
                  Город:<span className="text-[grey]">Санкт-Петербург </span>
                </p>
              </div>
            </div>
            <button className="w-[230px] bg-[#00C97B] py-[10px] px-[15px] rounded-[25px] text-[white] font-[roboto]">
              Все отзывы
            </button>
          </div>
        </div>

        <div className="flex flex-col font-[roboto] mt-[100px] w-[80%] mx-auto">
          <p className="text-[30px]">
            Ваш личный адрес в Великобритании для покупок
          </p>
          <p className="text-[grey] text-justify mt-[20px]">
            С нами вы получаете целых два адреса в UK! У нас есть два склада для
            приема посылок – в Лондоне и Манчестере. Указывайте в магазине тот
            из них, отправка на который обойдется дешевле (или покупка будет без
            налогов). Чаще всего в Лондоне наши клиенты заказывают одежду и
            обувь, а в Манчестер идут гаджеты и всё остальное. С OkeyPost вы
            всегда получаете максимальную выгоду! При доставке из UK в Россию
            все ваши товары обязательно страхуются. Прием посылок на наш склад,
            их обработка, удаление лишних коробок, хранение сроком до 70 дней –
            у нас полностью бесплатно. Мы также бесплатно проводим объединение
            посылок из разных магазинов в одну. Это необходимо для снижения
            стоимости доставки посылок из UK в Россию. У нас самая выгодная
            доставка! От $11.99 за посылку! А если у вас есть какие-то особенные
            требования, вроде проверки техники или дополнительной пленки для
            самых хрупких товаров, – операторы нашего склада с радостью выполнят
            их по спецзапросу. Okeypost.com – это надежно, быстро и выгодно. А в
            наших соцсетях вы всегда найдете информацию о лучших скидках
            fyukbqcrb[ магазинов. Не обязательно заходить в Черную пятницу или
            Prime Day, крутые акции проходят каждый день!
          </p>
        </div>

        {/* footer*/}

        <div className="bg-[#3190c7] flex flex-row-reverse items-center w-[90%] mx-auto mt-[50px] py-[40px]  rounded-[80px]  gap-7">
          <div className=" text-[white] flex flex-col  w-[65%] gap-6 mx-[60px]">
            <button className="w-[230px] bg-[#00C97B] py-[10px] px-[15px] rounded-[25px] text-[white] font-[roboto]">
              Подписаться
            </button>
          </div>
          <div className="">
            <p className="text-[white] w-[150px]">Введите ваш email</p>
            <div className="max-w-[200px] h-[2px] bg-[white] mt-[10px]"></div>
          </div>
          <div className=" text-[white] font-semibold">
            <p className="text-[30px] ml-[100px]">
              Подпишитеть и будьте в курсе всех скидок и акций магазинов
              Великобритании!
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
          <div className="w-[100%] h-[2px] bg-[grey] dark:bg-[white] dark:text-[white]">
            <p className=" text-center pt-[30px] pb-[30px] text-[20px] font-[roboto] text-[grey] dark:bg-[black] dark:text-[white]">
              © 2021 Okeypost . Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
