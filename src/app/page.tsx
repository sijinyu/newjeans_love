"use client";
import { NextPage } from "next";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <div className="h-full">
      <section className="mb-10 flex justify-center">
        <img src="/hani.gif" alt="뉴진스 배너" className="w-80 h-auto" />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          className="bg-pink p-4 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-bold text-white">SNS 모아보기</h2>
          <p>뉴진스 관련 SNS 글을 한 곳에서 모아보세요!</p>
          <a className="text-mint font-bold" href="/sns">
            자세히 보기 &rarr;
          </a>
        </motion.div>
        <motion.div
          className="bg-mint p-4 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-bold text-white">유튜버 리스트</h2>
          <p>유명한 뉴진스 팬 유튜버들의 동영상을 확인하세요!</p>
          <a className="text-pink font-bold" href="/youtuber">
            자세히 보기 &rarr;
          </a>
        </motion.div>
        <motion.div
          className="bg-yellow p-4 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-bold text-white">일정 리스트</h2>
          <p>뉴진스의 최신 일정을 한 눈에 확인하세요!</p>
          <a className="text-lightPurple font-bold" href="/schedule">
            자세히 보기 &rarr;
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
