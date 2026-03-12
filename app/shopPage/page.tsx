"use client"; // Это клиентский компонент, так как есть useState, Link и Framer Motion

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// URL твоей фотографии для всего мерча
const MERCH_IMAGE_URL =
  "images/nAIDc4IgmRyJl19yGe8HpmcKYqTOujeQT_JMpjeIzNcFxCoqITUuHXfOIb_S8qk7ITDYSMKF.jpg";

// Данные о товарах (можно расширить)
const merchItems = [
  {
    id: "обьект 1",
    name: "Гореловский худак",
    price: 34.99,
    description: "Из недр земли. Сшитый солевыми гномами Санкт Петербурга",
  },
  {
    id: "обьект 2",
    name: "Гореловский худак",
    price: 34.99,
    description: "Из недр земли. Сшитый солевыми гномами Санкт Петербурга",
  },
  {
    id: "обьект 3",
    name: "Гореловский худак",
    price: 34.99,
    description: "Из недр земли. Сшитый солевыми гномами Санкт Петербурга",
  },
  {
    id: "обьект 4",
    name: "Гореловский худак",
    price: 34.99,
    description: "Из недр земли. Сшитый солевыми гномами Санкт Петербурга",
  },
  {
    id: "обьект 5",
    name: "Гореловский худак",
    price: 34.99,
    description: "Из недр земли. Сшитый солевыми гномами Санкт Петербурга",
  },
  {
    id: "обьект 6",
    name: "Гореловский худак",
    price: 34.99,
    description: "Из недр земли. Сшитый солевыми гномами Санкт Петербурга",
  },
  {
    id: "обьект 7",
    name: "Гореловский худак",
    price: 34.99,
    description: "Из недр земли. Сшитый солевыми гномами Санкт Петербурга",
  },
  {
    id: "обьект 8",
    name: "Гореловский худак",
    price: 34.99,
    description: "Из недр земли. Сшитый солевыми гномами Санкт Петербурга",
  },
  {
    id: "обьект 9",
    name: "Гореловский худак",
    price: 34.99,
    description: "Из недр земли. Сшитый солевыми гномами Санкт Петербурга",
  },
];

const FloatingEye = () => {
  return (
    <motion.div
      drag
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      className="fixed right-10 top-1/2 z-[100] cursor-grab active:cursor-grabbing hidden lg:block"
    >
      <div className="relative w-24 h-24 bg-white rounded-full border-4 border-yellow-300 shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{ x: [-5, 5, -5], y: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-10 h-10 bg-black rounded-full flex items-center justify-center"
        >
          <div className="w-4 h-4 bg-yellow-300 rounded-full animate-pulse"></div>
        </motion.div>
        <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/oEI9uWUicG71S/giphy.gif')] opacity-20 mix-blend-overlay"></div>
      </div>
      <div className="mt-2 text-center font-mono text-[10px] yellow-300 font-bold uppercase tracking-tighter">
        всевидящее око
      </div>
    </motion.div>
  );
};

export default function MerchPage() {
  const [cartItems, setCartItems] = useState<string[]>([]); // Состояние для товаров в корзине

  const addToCart = (itemId: string) => {
    setCartItems((prevItems) => [...prevItems, itemId]);
    alert(`Item ${itemId} added to cart! Total items: ${cartItems.length + 1}`);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty, initiate drop sequence failed.");
      return;
    }
    alert(
      `Initiating secure drop for ${cartItems.length} items. Total: ${cartItems
        .reduce((sum, id) => {
          const item = merchItems.find((i) => i.id === id);
          return sum + (item ? item.price : 0);
        }, 0)
        .toFixed(2)}. Processing...`,
    );
    setCartItems([]); // Очищаем корзину после "покупки"
  };

  return (
    <section className="relative py-20 bg-[#0a0a0a] text-white min-h-screen overflow-hidden">
      {/* Кнопка Возврата (Левый Верхний угол) */}
      <FloatingEye />
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="absolute top-6 left-6 z-50"
      >
        <Link href="/">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <svg
              className="w-5 h-5 text-zinc-500 group-hover:text-yellow-300 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              ></path>
            </svg>
            <span className="font-mono text-xs text-zinc-500 group-hover:text-yellow-300 transition-colors uppercase tracking-widest">
              Назад
            </span>
          </div>
        </Link>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-16">
        {/* Заголовок секции */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="h-px w-16 bg-yellow-300"></span>
            <span className="font-mono text-yellow-300 text-sm tracking-[0.3em] uppercase">
              Территория горелово
            </span>
            <span className="h-px w-16 bg-yellow-300"></span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black uppercase leading-none">
            Магазин <span className="text-yellow-300 italic">Игрушек</span>
          </h1>
          <p className="font-mono text-yellow-300 mt-4 tracking-[0.5em] uppercase text-xs md:text-sm">
            высокое качество
          </p>
        </motion.div>

        {/* Сетка товаров */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {merchItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-zinc-900 border border-yellow-300/20 p-4 relative group overflow-hidden"
            >
              {/* Декоративный уголок */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-emerald-500/50 group-hover:border-emerald-500 transition-colors duration-300"></div>

              <div className="relative h-64 overflow-hidden mb-4">
                <img
                  src={MERCH_IMAGE_URL}
                  alt={item.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="text-xl font-black uppercase text-white mb-2">
                {item.name}
              </h3>
              <p className="font-mono text-yellow-300 text-sm mb-4">
                Цена:{" "}
                <span className="text-white">{item.price.toFixed(2)} RUB</span>
              </p>
              <p className="text-zinc-400 text-sm mb-6">{item.description}</p>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => addToCart(item.id)}
                className="w-full yellow-300 text-black font-bold py-3 uppercase tracking-widest text-sm bg-yellow-300 transition-colors relative z-10"
              >
                Добавить в корзину
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Плашка корзины / Checkout */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="fixed bottom-6 right-6 z-50 bg-zinc-900 border border-emerald-500 p-4 flex items-center space-x-4 shadow-lg"
        >
          <span className="font-mono text-lg text-white">
            Позиций:{" "}
            <span className="text-yellow-300">{cartItems.length}</span>{" "}
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCheckout}
            className="px-6 py-2 bg-yellow-300 text-black font-bold uppercase tracking-widest text-sm hover:bg-yellow-200 transition-colors"
          >
            Корзина
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
