import { useState } from 'react';
import { MdCheckCircleOutline, MdExplore, MdBuild } from 'react-icons/md';
import Button from '../components/Button';

// ButtonPage Component
const ButtonPage = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    window.alert('click');
  };

  return (
    <div>
      <div>
        <Button danger rounded outline className="mb-5" onClick={handleClick}>
          <MdCheckCircleOutline />
          Hello world
        </Button>
      </div>
      <div>
        <Button warning outline onMouseEnter={handleClick}>
          <MdExplore />
          Buy now
        </Button>
      </div>
      <div>
        <Button success onMouseLeave={handleClick}>
          <MdBuild />
          Hide ads
        </Button>
      </div>
      <div>
        <Button primary>Do something</Button>
      </div>
      <div>
        <Button secondary rounded>
          Do something
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
