import { NextPage } from "next";

const SNS: NextPage = () => {
  return (
    <main className="py-10">
      <section>
        <h2 className="text-2xl font-bold">뉴진스 관련 SNS 글 모아보기</h2>
        <div className="flex justify-between mt-4">
          <button className="bg-pink text-white py-2 px-4 rounded">
            트위터
          </button>
          <button className="bg-mint text-white py-2 px-4 rounded">
            인스타그램
          </button>
          <button className="bg-yellow text-white py-2 px-4 rounded">
            페이스북
          </button>
        </div>
        <div className="mt-8">
          <div className="bg-gray-100 p-4 mb-4 rounded-lg">SNS 글 1</div>
          <div className="bg-gray-100 p-4 mb-4 rounded-lg">SNS 글 2</div>
          <div className="bg-gray-100 p-4 mb-4 rounded-lg">SNS 글 3</div>
        </div>
      </section>
    </main>
  );
};

export default SNS;
