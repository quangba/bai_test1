import styled from 'styled-components';

const PaginationDotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #CCCCCC;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &.active {
    background-color: black;
  }
`;

const PaginationDots = ({ totalSlides, currentIndex, onDotClick }) => {
  return (
    <PaginationDotsContainer>
      {Array.from({ length: totalSlides }).map((_, index) => (
        <Dot
          key={index}
          className={index === currentIndex ? 'active' : ''}
          onClick={() => onDotClick(index)}
        />
      ))}
    </PaginationDotsContainer>
  );
};

export default PaginationDots;
