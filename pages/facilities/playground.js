import React from "react";

export const getStaticProps = () => {
  //api call
  return {
    props: { footerstatus: true },
  };
};

const Playground = (props) => {
  return (
    <div>
      <h2>This is Playground Page</h2>
    </div>
  );
};

export default Playground;
