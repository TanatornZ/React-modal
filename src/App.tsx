import React from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');


function App() {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="App">
      <button onClick={openModal} className='p-3 border rounded mt-10'>Click me!!!</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='w-screen h-screen flex justify-center items-center '
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
}

export default App;
