import { NextPage } from "next";
import Head from "next/head";

const Youtuber: NextPage = () => {
  return (
    <main className="py-10">
      <section>
        <h2 className="text-2xl font-bold">
          유명한 뉴진스 팬 유튜버들의 동영상
        </h2>
        <div className="mt-8">
          <div className="bg-gray-100 p-4 mb-4 rounded-lg">유튜버 동영상 1</div>
          <div className="bg-gray-100 p-4 mb-4 rounded-lg">유튜버 동영상 2</div>
          <div className="bg-gray-100 p-4 mb-4 rounded-lg">유튜버 동영상 3</div>
        </div>
      </section>
    </main>
  );
};

export default Youtuber;
