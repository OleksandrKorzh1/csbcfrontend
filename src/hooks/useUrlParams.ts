import { useSearchParams } from 'react-router-dom';
import { useCallback, useMemo } from 'react';

const groupParamsByKey = (params:Record<string, any>) => [...params.entries()].reduce(
  (acc, tuple) => {
    const [key, val] = tuple;

    acc[key] = [val];

    return acc;
  },
  {},
);

export const useQueryParam = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const freshSearchParams = useMemo(
    () => groupParamsByKey(searchParams),
    [searchParams],
  );

  const get = useCallback((key) => freshSearchParams[key], [freshSearchParams]);

  console.log(searchParams);

  const post = useCallback(
    (obj:Record<string, any>) => {
      const newParams = { ...freshSearchParams, ...obj };
      const filtered = Object.entries(newParams).filter((entrie) => entrie[1]);

      setSearchParams(filtered.reduce(
        (acc, entrie) => ({ ...acc, [entrie[0]]: entrie[1] }),
        {},
      ));
    },
    [freshSearchParams, setSearchParams],
  );

  return { get, post };
};
