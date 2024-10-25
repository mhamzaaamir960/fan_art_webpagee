import React from "react";
import styles from "./Herosection.module.css";
import herosectionImg1 from "../../assets/herosectionImg.svg";
import herosectionImg2 from "../../assets/herosectionImg2.svg";

function Herosection() {
  return (
    <section
      className={`relative w-full h-[720px] bg-gradient-to-r from-[#255e71] to-[#265f73] flex justify-center items-center gap-x-[50px]`}
    >
      <div class={styles.vectorShapeLeft} />

      {/* Herosection text and button */}
      <div
        className={`max-w-[642px] w-fit flex flex-col justify-center items-start gap-y-10 text-start relative z-10`}
      >
        <h1
          className={`text-white lg:text-5xl font-bold tracking-normal leading-relaxed !important  m-0 p-0`}
        >
          Empowering Fine Art Industry with{" "}
          <span className="text-[#ffc700] opacity-[100%]">RWA</span>, Ownership
          & Trading
        </h1>
        <p
          className={`text-white text-lg w-[580px] font-normal leading-auto m-0 p-0`}
        >
          Carrying Fine Art Legacy with a merger of Blockchain & AI with Real
          World Asset Tokenization. Investment, Trading, Ownership, with
          Transparency & Security with Enhanced User Experience & Continuous
          Growth.
        </p>
        <button className={styles.btn}>continue</button>
      </div>

      {/* Herosection images */}
      <div className={`flex items-center gap-x-[20px] relative z-10`}>
        <div
          className={` flex flex-col items-center justify-center p-2 gap-y-2 border-t-2 border-b-2 border-white rounded-[30px] bg-inherit relative z-10 shadow-sm`}
        >
          <img src={herosectionImg1} />

          <span className="text-[22.16px] text-white font-medium">
            FAN Art Of Life
          </span>
          <span className="text-[22.16px] text-[#a7a6a6] font-normal">
            $12345
          </span>
        </div>

        <div className={`${styles.herosectionCircleColor}`}></div>


        {/* hidden lg:flex flex-col gap-y-[10px] relative z-10 */}
        <div className={` relative z-10`}>
          <img
            className={`${styles.herosectionImage2}`}
            src={herosectionImg2}
          />
          <img
            className={`${styles.herosectionImage2}`}
            src={herosectionImg2}
          />
          <img
            className={`${styles.herosectionImage2}`}
            src={herosectionImg2}
          />
        </div>
      </div>
      <div class={styles.vectorShapeRight} />
    </section>
  );
}

export default Herosection;
