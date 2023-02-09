import type { FC } from 'react';
import { useRouteError } from 'react-router-dom';

interface INotFound {
  prop?: unknown;
}

const NotFound: FC<INotFound> = (props) => {
  const error = useRouteError();
  console.log('NotFound props:', props);
  console.error(error);
  return <div>NotFound</div>;
};

export default NotFound;
