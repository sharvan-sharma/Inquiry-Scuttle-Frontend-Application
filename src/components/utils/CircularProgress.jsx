import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {withStyles} from '@material-ui/core/styles';

const CustomCircularProgress = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#284B63',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#284B63',
    },
  },
circleStatic:{
  color:'#284B63'
}
})(CircularProgress);

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CustomCircularProgress variant="static" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <label variant="caption" className='m-1 fsm' style={{color:'#284B63'}}>{`${Math.round(
          props.value,
        )}%`}</label>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and static variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}