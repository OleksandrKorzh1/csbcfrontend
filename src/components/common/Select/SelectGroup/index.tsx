import { useEffect, useState } from 'react';
import Select from '../index';
import { Option, SelectType } from '../../../../types';
import { useGroupContext } from '../../../../context/group';
import { useGetListGroups } from '../../../../hooks/useDropDown';

interface SelectGroup {
  label?: string;
  value: string | number | undefined | null;
  onChange: (value: string) => void;
  placeholder?: string;
  isSearchable?: boolean;
  isClearable?: boolean;
  error?: string;
  required?: boolean;
  type: SelectType;
}

const SelectGroup = ({
  type,
  label,
  onChange,
  value,
  placeholder,
  isSearchable,
  isClearable,
  required,
  error,
}: SelectGroup): JSX.Element => {
  const { optionsGroups, getListGroups } = useGetListGroups();
  const [options, setOptions] = useState<Option[]>([]);
  const { groupCreate, groupEdit, groupDelete } = useGroupContext();

  useEffect(() => {
    getListGroups();
  }, [groupEdit?.data, groupCreate?.data, groupDelete?.data]);

  useEffect(() => {
    if (optionsGroups?.items.length) {
      setOptions(optionsGroups.items.map((group) => ({ value: group.id, label: group.name })));
    }
  }, [optionsGroups]);

  return (
    <Select
      label={label}
      type={type}
      onChange={onChange}
      value={value}
      options={options}
      placeholder={placeholder}
      isSearchable={isSearchable}
      isClearable={isClearable}
      required={required}
    />
  );
};

SelectGroup.defaultProps = {
  placeholder: '',
  isSearchable: false,
  isClearable: false,
  required: false,
  isFilter: false,
  label: '',
  error: '',
};

export default SelectGroup;
