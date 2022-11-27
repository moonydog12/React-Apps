import classNames from 'classnames';

const finalClassName = classNames('px-1.5', {
  'bg-blue-500': true,
  'text-yellow-500': false,
});
console.log(finalClassName);

function Button({ children, primary, secondary, success, warning, danger, outline, rounded }) {
  return <button className={finalClassName}>{children}</button>;
}

Button.propTypes = {
  checkVariation: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      throw new Error('only one of primary,secondary,success,warning,danger could be chosen');
    }
  },
};

export default Button;
