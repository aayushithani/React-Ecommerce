import React from "react";
import Pagination from "react-bootstrap/Pagination";

const Paging = () => {
  return (
    <div style={{paddingBottom:"30px",marginLeft:"auto",marginRight:"auto",width:"23.2%"}}>
      <Pagination style={{ alignItems: "center" }}>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
};

export default Paging;
