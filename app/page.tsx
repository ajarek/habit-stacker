import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
     <h1 className="text-3xl font-bold ">Buduj nawyki, które mają <span className="text-red-700">znaczenie!</span> </h1>
     <p className="text-xl text-center">Masz łatwe w obsłudze narzędzie do śledzenia nawyków, pomoże Ci przejąć kontrolę nad swoim dniem i osiągnąć swoje cele.</p>
    </main>
  );
}
