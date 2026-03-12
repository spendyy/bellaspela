"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Zap, Eye, Command, Skull, ExternalLink } from "lucide-react";
import Link from "next/link";
// Компонент Глитч-текста
const GlitchText = ({ text }: { text: string }) => (
  <div className="relative inline-block group">
    <span className="relative z-10">{text}</span>
    <span className="absolute top-0 left-0 -z-10 text-emerald-500 translate-x-1 group-hover:animate-ping opacity-70 italic">
      {text}
    </span>
    <span className="absolute top-0 left-0 -z-10 text-yellow-400 -translate-x-1 group-hover:animate-bounce opacity-70">
      {text}
    </span>
  </div>
);

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

export default function SurrealAnarchyPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Эффект параллакса для фонового изображения
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <div
      ref={containerRef}
      className="min-h-[300vh] bg-[#000d1a] text-yellow-50 selection:bg-emerald-500 selection:text-black overflow-x-hidden font-sans"
    >
      <FloatingEye />
      {/* Глобальный эффект цифрового шума */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Навигация — Анархичный минимализм */}
      <nav className="fixed top-0 left-0 w-full p-6 z-[90] flex justify-between items-start mix-blend-difference">
        <div></div>
        <div className="space-y-2 text-right">
          <p className="text-[10px] tracking-[0.5em] text-yellow-300 uppercase">
            Статус: Восстание
          </p>
          <p className="text-[10px] tracking-[0.5em] uppercase">
            Коорд: 55.7558° С.Ш.
          </p>
        </div>
      </nav>

      {/* ПЕРВАЯ СЕКЦИЯ (HERO) */}
      {/* SECTION: HERO (SYSTEM OVERRIDE) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
        {/* Стилизованная темная сетка */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle, #333 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Градиентное затемнение по краям (Виньетка) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>

        <div className="absolute top-10 left-6 md:left-12 flex flex-col space-y-8 z-[100]">
          <div className="relative flex flex-col space-y-6">
            {/* Декоративная линия теперь не мешает кликам */}
            <div className="absolute -left-2 top-0 w-[1px] h-full bg-white/10 pointer-events-none"></div>

            {/* ORIGIN (ОБ АВТОРЕ) - ТЕПЕРЬ ВСЁ РАБОТАЕТ */}
            <Link href="/aboutPage">
              <motion.div
                onClick={() => {
                  console.log(5);
                }}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="group cursor-pointer relative z-50"
              >
                <div className="relative px-6 py-1 border-l-2 border-emerald-500 transition-all duration-300 group-hover:bg-emerald-500/20">
                  <p className="font-mono text-[9px] text-emerald-500/60 uppercase tracking-tighter mb-1 pointer-events-none">
                    01_Subject
                  </p>
                  <h2 className="text-white font-black uppercase tracking-[0.2em] text-lg group-hover:text-emerald-400 transition-colors pointer-events-none">
                    ОБ АВТОРЕ
                  </h2>
                  {/* Свечение при наведении */}
                  <div className="absolute inset-0 bg-emerald-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            </Link>
            {/* DROP (МЕРЧ) - КОПИЯ ЛОГИКИ ORIGIN */}
            <Link href="/shopPage">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="group cursor-pointer relative z-50"
              >
                <div className="relative px-6 py-1 border-l-2 border-yellow-300 transition-all duration-300 group-hover:bg-yellow-300/20">
                  <p className="font-mono text-[9px] text-yellow-300/60 uppercase tracking-tighter mb-1 pointer-events-none">
                    02_Supply
                  </p>
                  <h2 className="text-white font-black uppercase tracking-[0.2em] text-lg group-hover:text-yellow-200 transition-colors pointer-events-none">
                    МАГАЗИН
                  </h2>
                  {/* Свечение при наведении */}
                  <div className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Техническая инфа */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col space-y-1 pl-4 border-l border-white/5 pointer-events-none"
          >
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <p className="font-mono text-[8px] text-white tracking-[0.3em] uppercase">
                ГОРЕЛОВО
              </p>
            </div>
            <p className="font-mono text-[8px] text-white tracking-[0.3em] uppercase pl-3">
              СТАБИЛЬНЫЙ СИГНАЛ
            </p>
          </motion.div>
        </div>
        {/* ЦЕНТРАЛЬНЫЙ ЛОГОТИП */}
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[12vw] font-black  italic leading-none text-white tracking-tighter"
          >
            bELLA
            <span className="text-yellow-300 font-outline-2">SPELA</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="font-mono text-yellow-300 mt-4 tracking-[0.5em] uppercase text-xs md:text-sm">
              Расшифровка реальности... 99%
            </p>
          </motion.div>
        </div>

        {/* ПРАВЫЙ ВЕРХНИЙ УГОЛ (Версия софта) */}
        <div className="absolute top-10 right-10 font-mono text-[9px] text-white/10 uppercase tracking-[0.4em] hidden md:block">
          v.2026 // core_system
        </div>

        {/* ДЕКОРАТИВНЫЙ ПОДВАЛ */}
        <div className="absolute bottom-10 left-10 right-10 flex justify-end font-mono text-[9px] text-white/20 tracking-widest uppercase">
          <span>РОССИЯ, САНКТ-ПЕТЕРБУРГ</span>
        </div>
      </section>
      {/* СЕКЦИЯ: МАНИФЕСТ */}
      {/* SECTION: MANIFESTO (GLITCH TEXT) */}

      {/* СЕКЦИЯ ССЫЛОК (Плавающие карточки) */}
      {/* SECTION: BEYOND THE VOID (LINKS REMASTERED) */}
      <section className="relative py-40 px-6 overflow-hidden bg-[#000d1a]">
        {/* Декоративная сетка на фоне */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#10b981 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="mb-24 flex items-end gap-4"
          >
            <h2 className="text-7xl md:text-9xl font-black uppercase italic tracking-tighter leading-none">
              СВЯЗЬ_С
              <br />
              <span className="text-yellow-300 underline decoration-yellow-300 underline-offset-8">
                ПУСТОТОЙ
              </span>
            </h2>
            <div className="hidden md:block w-32 h-1 bg-yellow-300 mb-4 animate-pulse"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: "Spotify",
                icon: <Zap size={40} />,
                desc: "Ритмы Хаоса",
                color: "#1DB954",
                delay: 0.1,
              },
              {
                label: "VK",
                icon: <Eye size={40} />,
                desc: "Визуальный Шум",
                color: "#3b82f6",
                delay: 0.2,
              },
              {
                label: "Twitter",
                icon: <Skull size={40} />,
                desc: "Эпицентр Гнева",
                color: "#ffffff",
                delay: 0.3,
              },
              {
                label: "Telegram",
                icon: <Command size={40} />,
                desc: "Код Безумия",
                color: "#facc15",
                delay: 0.4,
              },
            ].map((link, idx) => (
              <motion.a
                key={idx}
                href="#"
                initial={{ opacity: 0, y: 100, rotate: idx % 2 === 0 ? -5 : 5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  duration: 0.6,
                  delay: link.delay,
                  ease: "circOut",
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: idx % 2 === 0 ? 2 : -2,
                  zIndex: 50,
                }}
                className="relative group block h-[450px] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm p-8"
              >
                {/* Фон при наведении */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: link.color }}
                />

                {/* Контент карточки */}
                <div className="relative z-10 h-full flex flex-col justify-between group-hover:text-black transition-colors duration-500">
                  <div className="flex justify-between items-start">
                    <div className="p-4 border-2 border-current group-hover:rotate-12 transition-transform duration-500">
                      {link.icon}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-4xl font-black uppercase italic leading-none">
                      {link.label}
                    </h3>
                    <p className="font-mono text-sm opacity-70 group-hover:opacity-100">
                      {link.desc}
                    </p>
                    <div className="h-0.5 w-0 group-hover:w-full bg-current transition-all duration-700"></div>
                  </div>

                  {/* Внутренний глитч-эффект (текст, который появляется при наведении) */}
                </div>

                {/* Анимированный шум только внутри карточки */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 bg-[url('https://media.giphy.com/media/oEI9uWUicG71S/giphy.gif')] bg-cover mix-blend-overlay"></div>
              </motion.a>
            ))}
          </div>

          {/* Декоративная линия внизу */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="mt-20 h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent w-full"
          />
        </div>
      </section>
      {/* СЕКЦИЯ ПОДДЕРЖКИ (Высокий контраст) */}
      {/* SECTION: RADICAL DONATE (REMASTERED) */}
      <section className="relative py-60 bg-black overflow-hidden flex items-center justify-center">
        {/* Фоновые бегущие строки (Marquee) */}
        <div className="absolute inset-0 flex flex-col justify-center opacity-20 pointer-events-none scale-110 -rotate-6">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ x: i % 2 === 0 ? "-100%" : "0%" }}
              animate={{ x: i % 2 === 0 ? "0%" : "-100%" }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="text-[12vh] font-black uppercase whitespace-nowrap leading-none text-transparent stroke-white stroke-2 italic"
              style={{ WebkitTextStroke: "2px rgba(255,255,255,0.2)" }}
            >
              ПОДДЕРЖИ_ХАОС • FUEL_THE_VOID • DONATE_NOW • КОРМИ_ГОЛОВУ •
              ПОДДЕРЖИ_ХАОС • FUEL_THE_VOID • DONATE_NOW • КОРМИ_ГОЛОВУ •
            </motion.div>
          ))}
        </div>

        {/* Интерактивная карточка доната */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ rotateY: 10, rotateX: -10 }}
          style={{ perspective: 1000 }}
          className="relative z-20 group"
        >
          {/* Свечение сзади карточки */}
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg blur-2xl opacity-20 group-hover:opacity-60 transition duration-1000"></div>

          <div className="relative bg-[#000d1a] border-2 border-yellow-300 p-8 md:p-16 shadow-[20px_20px_0px_#facc15] transition-all duration-500 group-hover:shadow-none group-hover:translate-x-4 group-hover:-translate-y-4">
            {/* Иконка с глитчем */}
            <div className="relative mb-8 flex justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0],
                  filter: [
                    "hue-rotate(0deg)",
                    "hue-rotate(90deg)",
                    "hue-rotate(0deg)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart size={100} fill="#facc15" className="text-yellow-400" />
              </motion.div>
              {/* Призрачный слой иконки */}
              <Heart
                size={100}
                className="absolute top-0 left-0 text-emerald-500 opacity-50 animate-ping"
              />
            </div>

            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-6 text-center">
              ТОПЛИВО ДЛЯ
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-emerald-400 to-blue-500">
                ТВОРЧЕСТВА
              </span>
            </h2>

            <p className="text-center font-mono text-sm mb-10 text-emerald-400/80 max-w-sm mx-auto">
              Твоя поддержка — это не просто деньги. Это возможность купить
              новую струну для гитары, оплатить студийное время, чтобы довести
              трек до идеала, или просто помочь мне продолжать этот путь.
            </p>

            <div className="flex flex-col gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-300 text-black font-black text-xl py-5 px-10 flex items-center justify-between group/btn overflow-hidden relative"
              >
                <span className="relative z-10">ОТПРАВИТЬ ДОНАТ</span>
                <Zap className="relative z-10 group-hover/btn:translate-x-2 transition-transform" />
                <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border-2 border-emerald-500 text-emerald-500 font-bold py-4 hover:bg-emerald-500 hover:text-black transition-all font-mono"
              >
                ИЛИ КРИПТУ
              </motion.button>
            </div>

            {/* Декоративные элементы по углам */}
            <div className="absolute bottom-2 right-2 text-[10px] font-mono text-yellow-300/30">
              STATUS: HUNGRY
            </div>
          </div>
        </motion.div>
      </section>
      {/* ФУТЕР */}
      <footer className="p-10 text-center font-mono text-[10px] opacity-30 uppercase tracking-[1em] md:tracking-[2em]">
        Сжечь после прочтения. 2026{" "}
      </footer>
    </div>
  );
}
