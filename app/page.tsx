import Image from "next/image";
import Container from "./components/Container";
import WalletDetails from "./components/WalletDetails";
import ClientOnly from "./components/ClientOnly";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-row justify-around items-center gap-6">
        <div className="hidden md:block relative w-1/4 h-[50vh]">
          <Image
            src="/images/pnverse.png"
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-7">
          <div>
            <h2 className="font-semibold text-lg">
              Welcome to Panaverse DAO 👋
            </h2>
            <p>Account Abstraction Tutorial</p>
          </div>

          <ClientOnly>
            <WalletDetails />
          </ClientOnly>
        </div>
      </div>
    </Container>
  );
}
