import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import palette from '../styles/palette';
import { AuthButton } from '@/styles/componentStyled';

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
`;

const Header: React.FC = () => (
  <Container>
    <Link href="/">
      <a className="logo-wrapper">
        <h2>logo</h2>
      </a>
    </Link>
    <div className="btn-container">
      <AuthButton>
        회원가입
      </AuthButton>
      <AuthButton>
        로그인
      </AuthButton>
    </div>
  </Container>
);

export default Header;
