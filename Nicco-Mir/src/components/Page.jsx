import React from "react";
import "remixicon/fonts/remixicon.css";
import "../assets/styles/Page.css";

const Page = () => {
  return (
    <div>
      <div id="main">
        <div id="page1">
          <div id="nav">
            <h5>Ahmedabad </h5>
            <img
              src="https://cdn.prod.website-files.com/5f2429f172d117fcee10e819/5f7f87c8b81a6e7a214312f0_header.svg"
              alt=""
            />
            <i class="ri-menu-2-fill"></i>
          </div>
          <div id="elemnts">
            <div id="ele1">
              <div id="img-div">
                <img
                  src="https://cdn.prod.website-files.com/5f9085a4041dd5427c5ac8ae/615d9672cc65f12c9ab25f21_thumbnail-small.jpeg?"
                  alt=""
                />
              </div>
              <h4>AVRO | KO</h4>

              <span>NEW</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
                sit doloremque odio natus ipsum corrupti aliquid voluptatibus
                inventore tenetur in.
              </p>
            </div>
            <div id="ele2">
              <h2>All work</h2>
              <h3>
                A featured selection <br />
                the latest work <br />
                of the last year
              </h3>
              <h6>Tip! Drag sideways to navigate</h6>
            </div>
            <div id="ele3">
              <div id="img-div2">
                <img
                  src="https://cdn.prod.website-files.com/5f9085a4041dd5427c5ac8ae/645b5439577bd35377de8c43_thumbnail-small.webp?"
                  alt=""
                />
              </div>
              <h4>THE ROGER HUB</h4>
              <span>NEW</span>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laborum voluptatem deserunt provident ullam iste numquam,
                repellat cupiditate quibusdam temporibus officiis?
              </p>
            </div>
          </div>
        </div>
        <div id="page2"></div>
        <div id="page3"></div>
      </div>
    </div>
  );
};

export default Page;
