import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClick} primary>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClick} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <section className="relative">
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
    </section>
  );
}

export default ModalPage;
