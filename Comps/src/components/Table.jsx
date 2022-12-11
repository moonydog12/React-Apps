import { render } from 'react-dom';

function Table({ data, config, keyFn }) {
  const renderHeaders = config.map((column) => <th key={column.label}>{column.label}</th>);

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => (
      <td className="p-2" key={column.label}>
        {column.render(rowData)}
      </td>
    ));

    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
