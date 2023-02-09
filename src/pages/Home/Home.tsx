import type { FC } from 'react';
import { useQuery } from 'react-query';
import { FormattedMessage } from 'react-intl';
import clsx from 'clsx';

import { getPostById } from '../../api/api';
import { useEffect } from 'react';

interface IHome {
  prop?: unknown;
}

const Home: FC<IHome> = (props) => {
  console.log('Home props:', props);

  const { data, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPostById(123),
  });

  console.log('data: ', data);

  useEffect(() => {
    console.log('data: ', data);
  }, [data]);

  return (
    <div className={clsx('home', { isError })}>
      <FormattedMessage id="home.title" defaultMessage="Home Page" />
    </div>
  );
};

export default Home;
