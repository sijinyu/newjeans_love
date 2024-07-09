import { NextPage } from "next";
import Head from "next/head";

const Schedule: NextPage = () => {
  return (
    <main className="py-10">
      <section>
        <h2 className="text-2xl font-bold">뉴진스의 최신 일정</h2>
        <div className="mt-8">
          <div className="bg-gray-100 p-4 mb-4 rounded-lg">일정 1</div>
          <div className="bg-gray-100 p-4 mb-4 rounded-lg">일정 2</div>
          <div className="bg-gray-100 p-4 mb-4 rounded-lg">일정 3</div>
        </div>
      </section>
    </main>
  );
};

export default Schedule;
