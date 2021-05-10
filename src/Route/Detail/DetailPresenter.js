import PropTypes from "prop-types";
import styled from "styled-components";

const DetailPresenter = ({ result, loading, error }) => {
  return "Detail";
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
