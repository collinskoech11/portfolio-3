import React, { useState } from 'react';
import styled from 'styled-components';

const StyledBurger = styled.div`
  color : white
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
      width: 2rem;
      height: 0.25rem;
      background-color:  ${({open})=>open ? '#000000': '#ffffff'};
      border-radius: 10px;
      transform-origin:1px;

      &:nth-child(1){
          transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
      }
      &:nth-child(2){
        transform: ${({open}) => open ? 'rotate(100%)' : 'translateX(0)'};
        opacity: ${({open}) => open ? 0 : 1};
    }
    &:nth-child(3){
        transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
       
  }
`;

const Burger = () =>{
    const [open, setOpen] = useState(false);
    return(
        < StyledBurger open = {open} onClick={()=>setOpen(!open)}> 
          <div />
          <div/>
          <div/>
        </ StyledBurger>
    )
}
export default Burger;