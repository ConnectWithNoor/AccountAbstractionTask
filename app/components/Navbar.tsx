import ClientOnly from "./ClientOnly";
import ConnectWalletBtn from "./ConnectWalletBtn";
import Container from "./Container";

function Navbar() {
  return (
    <div className="w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0"
          >
            <p>PSFMA Task by Noor Muhammad</p>
            <div>
              <ClientOnly>
                <ConnectWalletBtn />
              </ClientOnly>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;
