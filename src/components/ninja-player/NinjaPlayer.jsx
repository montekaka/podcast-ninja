import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

const NinjaPlayer = ({
  podcast, episodes, theme
}) => {

  useEffect(() => {

  }, [podcast])

  useEffect(() => {

  }, [episodes])
  
  useEffect(() => {

  }, [theme])  

  return (
    <div className="jc-player-wrapper">
      
    </div>
  )
}

NinjaPlayer.propTypes = {
  podcast: PropTypes.object,
  episodes: PropTypes.array,
  theme: propTypes.object
}

NinjaPlayer.defaultProps = {
  podcast: {},
  episodes: [],
  theme: {}
};


export default NinjaPlayer;

