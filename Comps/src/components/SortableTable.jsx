import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import Table from './Table';
import useSort from '../hooks/use-sort';

const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return (
      <div>
        <MdArrowDropUp />
        <MdArrowDropDown />
      </div>
    );
  }
  if (sortOrder === null) {
    return (
      <div>
        <MdArrowDropUp />
        <MdArrowDropDown />
      </div>
    );
  } else if (sortOrder === 'asc') {
    return (
      <div>
        <MdArrowDropUp />
      </div>
    );
  } else if (sortOrder === 'desc') {
    return (
      <div>
        <MdArrowDropDown />
      </div>
    );
  }
};

function SortableTable(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(data, config);

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) return column;

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

export default SortableTable;
