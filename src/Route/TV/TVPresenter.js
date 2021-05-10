import PropTypes from "prop-types";
import styled from "styled-components";

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => {
  return "TV";
};

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
