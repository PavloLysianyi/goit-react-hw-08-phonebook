import { useDispatch, useSelector } from 'react-redux';
import { FilterInput, FilterLabel, FilterWrpper } from '../style/Filter.style';
import { changeFilter, selectFilters } from '../processes/filterslice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);

  return (
    <FilterWrpper>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          value={filter}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </FilterLabel>
    </FilterWrpper>
  );
};
