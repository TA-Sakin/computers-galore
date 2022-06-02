import React from "react";
import { SiGamejolt } from "react-icons/si";
import { BsCart3 } from "react-icons/bs";
import { CgGames } from "react-icons/cg";
import { SiRiotgames } from "react-icons/si";

const Testimonial = () => {
  return (
    <div className="my-32 lg:px-28 px-4">
      <div>
        <h3 className="text-4xl font-bold text-center mt-8 mb-20">
          WHY SHOP FROM COMPUTER GALORE
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mx-auto">
        <div className="text-center">
          <BsCart3 className="mx-auto text-7xl font-bold" />
          {/* <div className="bg-orange-400 rounded-full mx-auto w-24">
            <img
              src="https://assets2.razerzone.com/images/pnx.assets/c26dadd460db814353e32536f8f160b7/largest-array-icon.svg"
              alt=""
              className=""
            />
          </div> */}
          <h3 className="text-3xl my-3 font-bold">The Largest Array Of Gear</h3>
          <p>
            As Computers Galore official online store, we hold a massive
            collection of products that can't be matched anywhere else.
          </p>
        </div>
        <div className="text-center">
          <SiGamejolt className="mx-auto text-7xl" />
          {/* <div className="bg-black rounded-full mx-auto w-24">
            <img
              src="https://assets2.razerzone.com/images/pnx.assets/c26dadd460db814353e32536f8f160b7/first-dibs-icon.svg"
              alt=""
              className=""
            />
          </div> */}
          <h3 className="text-3xl my-3 font-bold">Get First Dibs</h3>
          <p>
            Computers Galore is the only place where you can buy our most
            anticipated gear immediately upon release.
          </p>
        </div>
        <div className="text-center">
          <CgGames className="mx-auto text-7xl" />
          {/* <div className="bg-primary rounded-full mx-auto w-24">
            <img
              src="https://assets2.razerzone.com/images/pnx.assets/c26dadd460db814353e32536f8f160b7/buynow-paylater-icon.svg"
              alt=""
              className=""
            />
          </div> */}
          <h3 className="text-3xl my-3 font-bold">Play Now, Pay Later</h3>
          <p>
            With our 0% installment plan, spend more time gaming with your sweet
            new gear and less time fussing over payment.
          </p>
        </div>
        <div className="text-center">
          <SiRiotgames className="mx-auto text-7xl" />
          {/* <div className="bg-green-500 rounded-full mx-auto w-24">
            <img
              src="https://assets2.razerzone.com/images/pnx.assets/c26dadd460db814353e32536f8f160b7/exclusives-icon.svg"
              alt=""
              className=""
            />
          </div> */}
          <h3 className="text-3xl my-3 font-bold">Exclusive Gear And Swag</h3>
          <p>
            Get access to limited edition Computers Galore gear that's only
            available here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
