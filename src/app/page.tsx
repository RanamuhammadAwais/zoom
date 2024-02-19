import Image from "next/image";
import piaic from '../../public/lap.jpg'

export default function Home() {
  return (
    <main className="font-bold px-4 py-4">
      <div>Hello World</div>
      <p>
        This is a vercel project
      </p>
      <div>

        <Image src={piaic}
        width={400}
        height={200}
        alt="Image"
        className="border-4 rounded-full border-orange-500">

        </Image>
      </div>
    </main>
  );
}
