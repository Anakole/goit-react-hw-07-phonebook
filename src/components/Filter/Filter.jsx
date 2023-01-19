import { Input, Label } from 'components/ContactForm/ContactForm.styled';
import { BsSearch } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = e => {
    console.log(e.target.value);

    dispatch(setFilter(e.target.value));
  };

  return (
    <Label>
      <BsSearch />
      <Input type="text" value={filter} onChange={changeFilter} />
    </Label>
  );
};
