import React from "react";

function Header() {
  return (
    <div className="d-flex shadow-lg justify-content-center bg-dark text-light p-3 mt-3">
      <div className="shadow px-3 border py-1 rounded">
        <b>1:00</b>
      </div>
    </div>
  );
}

export default React.memo(Header);
