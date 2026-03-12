"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

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
      <div className="mt-2 text-center font-mono text-[10px] text-yellow-300 font-bold uppercase tracking-tighter">
        всевидящее око
      </div>
    </motion.div>
  );
};

const AboutSection = () => {
  const containerRef = useRef(null);

  // Эффект небольшого параллакса для фонового текста
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section
      ref={containerRef}
      className="relative py-40 bg-[#0a0a0a] text-white overflow-hidden"
    >
      {" "}
      {/* Кнопка Возврата (Левый Верхний угол) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
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
      <FloatingEye />
      {/* ФОНОВЫЙ ТЕКСТ (ПАРАЛЛАКС) */}
      <motion.div
        style={{ y: yText }}
        className="absolute top-20 right-[-5%] text-[25vw] font-black text-white/[0.02] select-none pointer-events-none uppercase italic"
      >
        Gorelovo
      </motion.div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          {/* --- БЛОК 1: ЗАГОЛОВОК И ДАННЫЕ --- */}
          <div className="col-span-12 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <span className="h-px w-12 bg-yellow-300"></span>
                <span className="font-mono text-yellow-300 text-sm tracking-[0.3em] uppercase">
                  АРТИСТ НОВОГО УРОВНЯ
                </span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black  mb-10 leading-[0.85]">
                <span className="text-yellow-300 italic">bELLASPELA</span>
                <br />
                <span className="relative uppercase">Звук окраин</span>
              </h2>
            </motion.div>

            <p className="text-2xl md:text-3xl font-light leading-tight text-gray-400 max-w-2xl border-l-2 border-zinc-800 pl-8 ml-2">
              Я родился там, где заканчивается шумный Петербург и начинаются
              бесконечные поля Горелово. Красота в бетоне.
            </p>
          </div>

          {/* --- БЛОК 2: ГЛАВНОЕ ФОТО С ЭФФЕКТОМ СКАНЕРА --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="col-span-12 lg:col-span-5 h-[600px] bg-zinc-900 overflow-hidden relative group border border-white/5"
          >
            {/* Оверлей сканера */}

            <img
              src="/images/468AB6D7-D198-400C-8649-BFA5CB0723A4.jpg" // Убедись, что путь начинается с / если папка в public
              className="w-full h-full object-cover transition-all duration-1000  group-hover:scale-105"
              alt="Bellaspela Main"
            />

            {/* Технические метки на фото */}
          </motion.div>

          {/* --- БЛОК 3: МАЛОЕ ФОТО И ТЕХ-ДАННЫЕ --- */}
          <div className="col-span-12 lg:col-span-4 lg:-mt-32 z-30">
            <motion.div
              whileHover={{ y: -10, x: 5 }}
              className="relative aspect-square bg-zinc-900 border-t-4 border-yellow-300 p-3 shadow-2xl"
            >
              <img
                src="./images/IMG_0491.JPG"
                className="w-full h-full object-cover  transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r border-b border-yellow-300/30"></div>
            </motion.div>

            {/* Дополнительный контент: Характеристики */}
            <div className="mt-12 space-y-4 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span>vibe_index</span>
                <span className="text-white">Меланхоличный индустриализм</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span>BPM_Range</span>
                <span className="text-white">85 - 145</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Visual_Style</span>
                <span className="text-white">Сюрреализм</span>
              </div>
            </div>
          </div>

          {/* --- БЛОК 4: МАНИФЕСТ --- */}
          <div className="col-span-12 lg:col-span-8 space-y-12 mt-10">
            <div className="relative">
              <span className="absolute -left-12 top-0 text-yellow-300 font-mono text-4xl opacity-20 hidden md:block">
                01
              </span>
              <p className="text-3xl md:text-4xl font-light text-zinc-300 leading-tight italic">
                «Моя музыка — это не парадные проспекты, а эстетика бетонных
                коробок, свет единственного фонаря во дворе и вечный туман над
                КАДом».
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <div
                className="flex-1 h-px bg-
gradient-to-r from-emerald-500/50 to-transparent"
              ></div>
              <div className="w-3 h-3 border border-yellow-300 rotate-45 animate-spin-slow"></div>
              <div className="flex-1 h-px bg-gradient-to-l from-yellow-300/50 to-transparent"></div>
            </div>

            <div className="grid grid-cols-2 gap-8 text-zinc-500">
              <p className="text-sm font-light leading-relaxed">
                Здесь нет фальши. Только искренность, пропитанная петербургским
                воздухом и вайбом родного района. bELLASPELA — это попытка
                запечатлеть момент, когда ты один на один с городом.
              </p>
              <p className="text-sm font-light leading-relaxed italic border-l border-zinc-800 pl-6">
                Каждая нота — это шаг по разбитому асфальту Юго-Запада. Это
                голос тех, кто создает свою реальность там, где другие видят
                только пустоту.
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default AboutSection;
