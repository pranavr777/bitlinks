import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="text-gray-800 h-screen bg-purple-200 ">
      <section className="grid grid-cols-2 h-[70vh]">
        <div className="flex flex-col gap-4 items-end justify-center p-2">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The best URL shortener in the Market
          </p>
          <p className="text-end font-medium">
            We are the most straight forward URL shortener in the world. Most of
            the URL shorteners will ask you for your credentials for login and
            track your activity. Here at <span className="font-bold">BitLinks</span> we respect and value your
            privacy unlike anywhere else
          </p>
          <div className="flex gap-3 text-purple-200">
          <Link href="/shorten">
            <button className="bg-purple-500 rounded-md shadow-lg p-3 py-1 font-bold">
              Try Now
            </button>
          </Link>
          <Link href="/github">
            <button className="bg-purple-500 rounded-md shadow-lg p-3 py-1 font-bold">
              GitHub
            </button>
          </Link>
            </div> 

        </div>
        <div className="flex justify-start relative">
          <Image
            className="mix-blend-darken"
            alt="Vector"
            src={"/vector.jpg"}
            fill={true}
          ></Image>
        </div>
      </section>
    </main>
  );
}
