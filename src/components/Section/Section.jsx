import { Box } from 'components/utils/Box.styled';
import { PropTypes } from 'prop-types';
import { FcStatistics } from 'react-icons/fc';

export const Section = ({ title = '', children }) => {
  return (
    <Box as="section" fontSize="24px" fontWeight="700" mt="30px">
      <Box as="h2" mb="10px" display="flex" alignItems="flex-end" gridGap={3}>
        {title === 'Statistics' ? (
          <>
            {title}
            <FcStatistics />
          </>
        ) : (
          title
        )}
      </Box>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
