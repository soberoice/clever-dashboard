import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ApiConsole() {
  const [toggled, setToggled] = useState(true);
  return (
    <div className="mx-auto my-8" style={{ width: "1200px" }}>
      <div
        className="w-full bg-white text-center p-8 shadow-md my-8"
        style={{ borderRadius: "4px" }}
      >
        <p className="text-4xl text-bold mb-4">API Integrations</p>
        <p className="text-sm" color="#1E1D1B">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis
          a condimentum vitae sapien pellentesque habitant morbi. Adipiscing
          elit ut aliquam purus sit amet luctus. Sed arcu non odio euismod
          lacinia at quis risus. Massa tincidunt nunc pulvinar sapien et ligula.
          Elementum integer enim neque volutpat ac tincidunt vitae. Fermentum
          dui faucibus in ornare quam viverra. Sed felis eget velit aliquet
          sagittis. Commodo viverra maecenas accumsan lacus vel facilisis
          volutpat. Est ullamcorper eget nulla facilisi etiam dignissim. Cras
          ornare arcu dui vivamus arcu felis bibendum ut. Rhoncus est
          pellentesque elit ullamcorper dignissim. Tellus orci ac auctor augue
          mauris. Eget felis eget nunc lobortis mattis aliquam. Ac tincidunt
          vitae semper quis lectus nulla at. Dignissim convallis aenean et
          tortor. Porta lorem mollis aliquam ut porttitor. Amet consectetur
          adipiscing elit pellentesque habitant morbi tristique senectus.
          Suspendisse in est ante in nibh mauris cursus. Consectetur purus ut
          faucibus pulvinar elementum integer enim neque volutpat. Nulla at
          volutpat diam ut venenatis tellus in. Felis eget nunc lobortis mattis
          aliquam faucibus purus. Nunc aliquet bibendum enim facilisis gravida.
          Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Velit
          sed ullamcorper morbi tincidunt ornare massa. Aliquam nulla facilisi
          cras fermentum odio eu.
        </p>
      </div>
      <div
        className="w-full bg-white p-8 shadow-md"
        style={{ borderRadius: "4px", height: "360px" }}
      >
        <span className="flex justify-between">
          <p className="text-xl text-bold mb-4">API Integrations</p>
          <span className="flex justify-between" style={{ width: "140px" }}>
            <p className="">OFF</p>
            <button
              onClick={() => setToggled(!toggled)}
              className={`toggle-btn ${toggled === true ? "toggled" : ""}`}
            >
              <div className="thumb"></div>
            </button>
            <p>ON</p>
          </span>
        </span>
        <form>
          <span className="flex justify-between my-8">
            <label
              style={{ color: "#57585A" }}
              className="my-auto"
              htmlFor="Live Server Key"
            >
              Liver Server Key
            </label>
            <input
              readOnly
              style={{
                width: "981px",
                height: "38px",
                border: "1px solid #E0E0E0",
              }}
              type="password"
            />
          </span>
          <span className="flex justify-between my-8">
            <label
              style={{ color: "#57585A" }}
              className="my-auto"
              htmlFor="Live Server Key"
            >
              Live Public Key
            </label>
            <input
              readOnly
              style={{
                width: "981px",
                height: "38px",
                border: "1px solid #E0E0E0",
              }}
              type="password"
            />
          </span>
        </form>
      </div>
    </div>
  );
}
