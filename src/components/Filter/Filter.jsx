import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

import { useDispatch } from 'react-redux';

import { filterChange } from '../../redux/filtersSlice';

import { Label, FindInput } from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = () => {
  const { contacts } = useSelector(getContacts);
  const dispach = useDispatch();
  const filterContact = e => {
    dispach(filterChange(e.currentTarget.value));
  };

  // if (contacts.length !== 0) {
  return (
    <Label>
      Find contacts by name
      <FindInput type="text" name="filter" onChange={filterContact} />
    </Label>
  );
  // }
};

Label.propTypes = {
  filter: PropTypes.string,
};

export default Filter;
