import { Container, InfoWrapper, Info } from './QuizCard.styled';
import { HiCake, HiChartPie, HiTrash } from 'react-icons/hi';

export const QuizCard = ({ quiz: {id, topic, level, time, questions },
    onDelete,
}) => {
    
    return (
      <Container level={level}>
        <HiCake size = {32}/>
        <HiChartPie size={ 40} />
        <h2>{topic}</h2>
        <button onClick={() => onDelete(id)}>
          <HiTrash/>
        </button>

        <InfoWrapper>
          <Info>Level: {level}</Info>
          <Info>Time: {time}</Info>
          <Info>Questions: {questions}</Info>
        </InfoWrapper>
      </Container>
    );
};