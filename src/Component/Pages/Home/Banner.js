import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        class="hero min-h-[60vh]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1610366398516-46da9dec5931?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1263)",
        }}
      >
        <div class="hero-overlay bg-opacity-20"></div>
        <div class="text-center text-neutral-content">
          <div class="max-w-lg">
            <h1 class="mb-5 text-4xl font-bold uppercase">
              Complete Your Setup
            </h1>
            <p class="mb-5">
              Whether you want to go bold, stay fresh, or keep it classic, build
              a setup that suits your style with Galore gear available in
              multiple striking colorways.
            </p>
            <button class=" btn btn-outline text-white rounded-none">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
