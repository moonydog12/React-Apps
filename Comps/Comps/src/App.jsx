import { useState } from 'react';
import Button from './Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <Button  success>Hello world</Button>
      </div>
      <div>
        <Button success>Buy now</Button>
      </div>
      <div>
        <Button success>Hide ads</Button>
      </div>
      <div>
        <Button success>Do something</Button>
      </div>
    </div>
  );
}

export default App;
