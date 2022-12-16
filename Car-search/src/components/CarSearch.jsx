import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../store';

function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm;
  });
  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3"></h3>
      <div className="search field is-horizontal"></div>
      <label htmlFor="" className="label">
        Search
      </label>
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} className="input" />
    </div>
  );
}

export default CarSearch;
