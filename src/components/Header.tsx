import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import palette from '../styles/palette';

const Container = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px !important;
  z-index: 10;
  .logo-wrapper {
    display: flex;
    align-items: center;
    .logo-img {
      margin-right: 1rem;
    }
    h1 {
      font-size: 12px;
      font-weight: bold;
      color: ${palette.main_pink};
    }
  }
  .btn-container {
    .signup-btn {
      height: 42px;
      margin-right: 8px;
      padding: 0 1.2rem;
      border: 0;
      border-radius: 20px;
      background-color: white;
      cursor: pointer;
      &:hover {
        background-color: ${palette.gray_f7};
      }
    }
    .login-btn {
      height: 42px;
      padding: 0 1.2rem;
      border: 0;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
      border-radius: 20px;
      cursor: pointer;
      outline: none;
      &:hover {
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
      }
    }
  }
`;

const Header: React.FC = () => (
  <Container>
    <Link href="/">
      <a className="logo-wrapper">
        <h2>logo</h2>
      </a>
    </Link>
    <div className="btn-container">
      <button type="button" className="signup-btn">
        회원가입
      </button>
      <button type="button" className="login-btn">
        로그인
      </button>
    </div>
  </Container>
);

export default Header;
