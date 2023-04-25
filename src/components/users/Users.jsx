import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((dataObject) => setData(dataObject));
  }, []);
  return (
    <Wrapper>
      {data.map((el) => {
        return (
            <WrapperItems>
              <h2>{el.name}</h2>
              <h4>{el.email}</h4>
            </WrapperItems>
        );
      })}
    </Wrapper>
  );
};
const WrapperItems = styled.div`
  background-color: aliceblue;
  margin: 20px;
  width: 400px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
