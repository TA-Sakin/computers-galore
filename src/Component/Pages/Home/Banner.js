import React from "react";

const Banner = () => {
  return (
    <div class="carousel h-screen w-full">
      <div id="slide1" class="carousel-item group relative w-full">
        <img
          alt="computer parts"
          src="https://images.unsplash.com/photo-1594008671712-da08718510bf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169"
          class="w-full object-cover"
        />
        <div class="absolute hidden group-hover:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" class="btn btn-circle ">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" class="carousel-item group relative w-full">
        <img
          alt="computer parts"
          src="https://images.unsplash.com/photo-1616836417940-8898b8ef794d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
          class="w-full  object-cover"
        />
        <div class="absolute hidden group-hover:flex flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" class="carousel-item group relative w-full">
        <img
          alt="computer parts"
          src="https://images.unsplash.com/photo-1603481546238-487240415921?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
          class="w-full  object-cover"
        />
        <div class="absolute hidden group-hover:flex flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" class="carousel-item group relative w-full">
        <img
          alt="computer parts"
          src="https://images.unsplash.com/photo-1555626040-e1c570e4a213?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1402"
          class="w-full  object-cover"
        />
        <div class="absolute hidden group-hover:flex flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
