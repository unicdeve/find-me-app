import styled from 'styled-components';

export const StyledLocation = styled.div`
  position: relative;
  color: black;
  background: #fff;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: auto;
  margin: auto;
  border-radius: 2px;
  box-shadow: 0px 16px 24px #50b0f117;
  transform: translate(-50%, -50%);

  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -10px;
    margin-top: -10px;
    width: 20px;
    height: 20px;
    border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
    transform: rotate(45deg);
    background: #fff;
  }

  .long {
    margin-bottom: 0.5rem;
  }

  .lat {
    margin-bottom: 1rem;
  }
`;

export const FindMeButton = styled.button`
  height: 2rem;
  padding: 5px 10px;
  border: none;
  background: #51b0f1;
  color: #fff;
  cursor: pointer;
  outline: none !important;

  &:hover {
    background: #fff;
    color: #51b0f1;
    border: 1px solid #51b0f1;
  }
`;
