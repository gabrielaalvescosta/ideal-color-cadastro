import React from 'react';
import styled from 'styled-components';


const DeviceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 375px;
  height: 99vh; 
  margin: 0 auto;
  border: 1px solid #000;
  background-color: #fff;
`;


export default function Device({ children }) {
  return <DeviceWrapper>{children}</DeviceWrapper>;
}
