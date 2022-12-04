import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

// Accordion Component
const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  // Define event handler outside of mapping function
  const handleClick = (nextIndex) => {
    // Functional update
    setExpandedIndex((currentExpandedIndex) =>
      currentExpandedIndex === nextIndex ? -1 : nextIndex,
    );
  };

  const renderItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-4xl">
        {isExpanded ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </span>
    );
    return (
      <div key={item.id}>
        <div
          className="flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderItems}</div>;
};
export default Accordion;
