import LatestNews from "@/componets/LatestNews";
import SocialFeed from "@/componets/SocialFeed";
import YouTubeVideos from "@/componets/YoutubeVideos";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-grow container max-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-newjeans-pink">환영합니다!</h2>
        <Image
          src="/newjeans-logo.png"
          alt="NewJeans Logo"
          width={200}
          height={100}
          className="mx-auto"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <LatestNews />
        <YouTubeVideos />
        <SocialFeed />
      </div>
    </main>
  );
}
