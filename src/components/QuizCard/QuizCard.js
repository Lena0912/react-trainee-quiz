import { Component } from 'react';
import { Container, InfoWrapper, Info } from './QuizCard.styled';
import { HiTrash } from 'react-icons/hi';
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


Modal.setAppElement('#root');
export class QuizCard extends Component {
  state = {
    isModalOpen: false,
  };
  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  }; 

  render() {
    const {isModalOpen} = this.state
    const {
      quiz: { id, topic, level, time, questions },
      onDelete,
    } = this.props;
    return (
      <Container level={level}>
        
        <h2>{topic}</h2>
        <button onClick={() => onDelete(id)}>
          <HiTrash />
        </button>

        <InfoWrapper>
          <Info>Level: {level}</Info>
          <Info>Time: {time}</Info>
          <Info>Questions: {questions}</Info>
        </InfoWrapper>

<button onClick={this.openModal}>Open modal</button>
        <Modal         
          isOpen={isModalOpen}          
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>I`m a modal - { topic}</h2>
        </Modal>
      </Container>
    );

  }
}

