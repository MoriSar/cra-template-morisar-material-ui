import type { FC } from 'react';
import { useQuery } from 'react-query';
import { FormattedMessage } from 'react-intl';
import clsx from 'clsx';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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

  useEffect(() => {
    console.log('data: ', data);
  }, [data]);

  return (
      <Container>
        <Box className={clsx('home', { isError })} my={2}>
          <Typography variant="h4">
            <FormattedMessage id="home.title" defaultMessage="Home Page" />
          </Typography>
        </Box>
      </Container>
  );
};

export default Home;
