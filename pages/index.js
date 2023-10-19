import Image from "next/image";
import { Inter } from "next/font/google";
import Slider from "@/components/Slider";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#f6da03] h-full p-12">
      <Nav />
      <div className="w-[55%] m-auto bg-[#f390d8] box">
        <Slider />
      </div>
      <div className="mt-11 mr-8 ml-8 pb-12 pl-8 pr-8">
        <h1 className="font-bold mb-2">Lumbung Indonesia</h1>
        <p className="text-left">
          Kerja-kerja dalam Lumbung Indonesia tak hanya terbatas pada praktik
          kesenian, namun juga menyoal daya tahan dan keberlangsungan dari
          kolektif seni itu sendiri. Maka dari itu, wadah ini dibangun agar
          kolektif seni anggota Lumbung Indonesia dapat saling terhubung,
          mendukung, dan membagi sumber daya masing-masing dengan kesadaran akan
          serangkaian nilai Lumbung yakni humor, kedermawanan, rasa ingin tahu,
          berkecukupan, mandiri, berjangkar pada lokalitas, durasi atau daya
          tahan, transparansi, regenerasi, etika/politik.
        </p>
        <p>
          Terdapat 12 kolektif seni yang menginisiasi Lumbung Indonesia.
          Keduabelasnya berangkat dari konteks di mana perkembangan dan
          pendukungan seni kontemporer di setiap ekosistemnya jauh dari ideal.
          Meski tidak memiliki akses terhadap pendanaan dari sirkuit seni
          kontemporer yang dianggap global, mereka justru berperan aktif sebagai
          pembangkit semangat budaya di daerah masing-masing lewat berbagai
          inisiatif dan program rutin.
        </p>
      </div>
    </div>
  );
}
