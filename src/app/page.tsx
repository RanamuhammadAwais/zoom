import Image from "next/image";
import piaic from "../../public/lap.jpg"
import Button from "@/component/Button";
import Link from "next/link";
import dashboard from "./dashboard/page";
import pic from "@../../../public/lap.jpg"



export default function Home() {
  return (
    <main className="font-bold px-4 py-4">
      <div className="text-2xl text-green-400">Hello World</div>
      <p className="text-center text-6xl text-yellow-500">
        This is a vercel project
      </p>


      <div className="place-content-center ">

        <Image src={pic}
        width={400}
        height={200}
        alt="Image"
        className="border-4  border-orange-500 p-2 m-5">

        </Image>


      </div>


      <div className=" text-green-300 bg-white rounded-full border-red-500">
        <Button ></Button>
      </div>

      <div className="text-center">
        <p className="font-bold color text-blue-500">Here by clicking below you will reach to the Dashboard Route</p>
        <Link href="/dashboard" className="text-cyan-400 "> Dashboard</Link> 
      </div>
    </main>
  );
}
