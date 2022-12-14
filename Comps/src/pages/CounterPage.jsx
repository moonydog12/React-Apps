import Button from '../components/Button';
import useCounter from '../hooks/use-counter';

function CounterPage({ initialCount }) {
  const { count, increment } = useCounter(initialCount);
  return (
    <>
      <h1>Count is {count}</h1>
      <Button danger outline onClick={increment}>
        Increase
      </Button>
    </>
  );
}

export default CounterPage;
