import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {
  const itemList = [
    { id: 1, name: "Travis Rice: Product Manager, UX, Character Design" },
    { id: 2, name: "Chris Smith: Gameplay Physics, Level Design" },
    { id: 3, name: "Jack L.: UI, Technical Documentation, Music & SFX" },
    { id: 4, name: "Tabari Humphries: Smart Contracts, Leaderboard Design" },
    { id: 5, name: "Kyn Adams: Server, Tester" },
    { id: 6, name: "Sailesh Sivakumar: Marketplace, Smart Contracts" },
  ];

  return (
    <div className="flex flex-col h-screen font-sharetech">
      <Navbar />
      <div className="flex-grow flex flex-col justify-center">
        <div className="border-b border-black py-6 text-center">
          <p>the bulls behind the run</p>
        </div>
        <div className="my-auto button-list flex flex-col justify-center gap-2 text-2xl mt-6">
          <div className="flex justify-center">
            <div className="flex flex-col items-start">
              {itemList.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start text-sm py-1 px-2"
                >
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <button
            className="button 
              ml-12 
              mr-12 
              mb-4 
              mt-8
              bg-primary 
              border-2 
              text-black 
              font-bold py-1 px-4 
              lg:hover:text-primary 
              lg:hover:border-l-4 
              lg:hover:bg-white"
          >
            <Link href={"http://w3bbie.xyz/test/"} target="_blank">
              PLAY BULL RUN
            </Link>
          </button>

          <button
            className="button 
              ml-12 
              mr-12 
              mb-4
              bg-white
              border-2 
              text-black 
              font-bold py-1 px-4
              lg:hover:text-black
              lg:hover:border-l-4
              lg:hover:bg-primary "
          >
            <Link href={"/"}>MAIN MENU</Link>
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
}
