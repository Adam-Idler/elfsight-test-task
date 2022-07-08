import styled from 'styled-components';
import portal from '../assets/green-portal.png';

export const Loader = styled.div`
  margin: auto;
  background: url(${portal}) center no-repeat;
  background-size: cover;
  width: 200px;
  height: 200px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
