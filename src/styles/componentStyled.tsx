import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import palette from '../styles/palette';

// 자주 사용하게 되는 버튼 스타일, Grid 등 공통 스타일 요소 디자인

export const AuthButton = styled(Button)`
    height: 42px;
    margin-right: 1rem;
    padding: 0 1.2rem;
    border: 0;
    border-radius: 20px;
    background-color: pink;
    cursor: pointer;
    &:hover {
        background-color: ${palette.gray_f7};
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
    }
`;