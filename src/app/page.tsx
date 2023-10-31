import Image from "next/image";
export default function Home() {
  return (
    <main className="m-5">
      <Image src="/next.svg" width={200} height={200} alt="" />
      <div className="bg-rose-300 h-8 w-full">123</div>
    </main>
  );
}
