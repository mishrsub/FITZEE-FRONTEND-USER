import React from "react";
import { Oval } from "react-loader-spinner";

const Loading = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <Oval
        visible={true}
        height={50}
        width={50}
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClassName=""
      />
    </div>
  );
};

export default Loading;
