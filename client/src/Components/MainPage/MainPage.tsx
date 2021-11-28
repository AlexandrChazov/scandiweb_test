import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MainPage: React.FC<MainPagePropsType> = ({ categories }) => {
  return (
    <Main>
      {categories?.map((category: { name: string }) => {
        return (
          <div key={category.name}>
            <StyledNavLink to={`/categories/${category.name}`}>
              {category.name}
            </StyledNavLink>
          </div>
        );
      })}
    </Main>
  );
};

type MainPagePropsType = {
  categories: Array<{ name: string }>;
};

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  row-gap: 1em;
  background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);
`;

const StyledNavLink = styled(NavLink)`
  font-size: 2em;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  color: #3e3e3e;

  &:hover {
    color: black;
  }
`;
