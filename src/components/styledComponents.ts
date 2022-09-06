import styled from "styled-components";

export const MyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  color: rgb(201, 140, 28);
`;

export const ElClock = styled.div`
  -webkit-box-shadow: 0 20px 30px rgba(104, 75, 106, 0.65);
  -moz-box-shadow: 0 20px 30px rgba(104, 75, 106, 0.65);
  box-shadow: 0 0 20px rgba(104, 75, 106, 0.65);
  background-color: rgba(39, 25, 39, 0.65);
  font-size: 26px;
  color: #f20909;
`;

export const HalfCircle = styled.span`
  font-size: 17px;
  font-weight: 700;
  color: rgb(201, 140, 28);
  font-style: oblique;
`;

export const Clock = styled.div`
  width: 28rem;
  height: 28rem;
  border: 3px solid #545271;
  border-radius: 50%;
  margin: 30px auto;
  position: relative;
  padding: 2rem;
  -webkit-box-shadow: 0 20px 30px rgba(104, 75, 106, 0.65);
  -moz-box-shadow: 0 20px 30px rgba(104, 75, 106, 0.65);
  box-shadow: 0 20px 30px rgba(104, 75, 106, 0.65);
  background: #545271;
`;

export const SemiCircle2 = styled.div`
  margin: 20px auto;
  width: 500px;
  height: 250px;
  border: 2px solid lime;
  border-radius: 0 0 50% 50% /0 0 100% 100%;
  background: rgb(131, 58, 180);
  background: linear-gradient(
    180deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 61%,
    rgba(252, 176, 69, 1) 100%
  );
`;

export const SemiCircle1 = styled.div`
  margin: 20px auto;
  width: 500px;
  height: 250px;
  border: 2px solid lime;
  border-radius: 50% 50% 0 0/ 100% 100% 0 0;
  background: rgb(131, 58, 180);
  background: linear-gradient(
    360deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 61%,
    rgba(252, 176, 69, 1) 100%
  );
`;

export const Back = styled.p`
  margin: 20px;
  font-size: 20px;
  color: lime;
  font-weight: 700;
`;

export const SemiHead = styled.h1`
  margin: 30px auto;
  color: lime;
  text-align: center;
`;
