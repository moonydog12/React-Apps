import { useState, useEffect, useRef } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Panel from './Panel';

// Dropdown
const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  // reference to specific element
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) return;
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleOptionClick = (option) => {
    setIsOpen(false);

    // What option did the user click on
    onChange(option);
  };

  const renderedOption = options.map((option) => (
    <div
      className="hover:bg-sky-100 rounded cursor-pointer p-1"
      onClick={() => handleOptionClick(option)}
      key={option.value}
    >
      {option.label}
    </div>
  ));

  return (
    <div className="w-48 relative" ref={divEl}>
      <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
        {value?.label || 'Select...'}
        <MdKeyboardArrowDown className="text-xl" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOption}</Panel>}
    </div>
  );
};

export default Dropdown;
