import imageEl from "../public/Images/blueVan-.png";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="heroSection">
        <Header />
        <div className="mainDiv">
          <div className="firstDiv">
            <h1 className="vanText">
              Little Van <br /> With <span>Big</span> <br /> Delivery
            </h1>
            <p className="vanDescription">
              Delivery is the process of transporting Goods From <br />a source
              Location to a Predefined Location
            </p>
          </div>
          <div className="secondDiv">
            <Image src={imageEl} width={750} height={600} />
          </div>
        </div>
        <div className="searchVan">
          <h2 className="track">Track Your Shipment/ Track Your ID</h2>
          <button className="parcelBtn">Track My Pacel</button>
        </div>
      </section>
    </>
  );
}
