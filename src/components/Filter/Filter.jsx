import { useDispatch } from 'react-redux';
import { filterChange } from '../../redux/filters/filtersSlice';

import { Label, FindInput } from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = () => {
  const dispach = useDispatch();
  const filterContact = e => {
    dispach(filterChange(e.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name
      <FindInput type="text" name="filter" onChange={filterContact} />
    </Label>
  );
};

Label.propTypes = {
  filter: PropTypes.string,
};

export default Filter;
