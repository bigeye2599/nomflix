import React from "react";
import DetailPresenter from "./DetailPresenter";

class DetailContainer extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true,
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const parseId = parseInt(id);
    if (isNaN(parseId)) {
      return push("/");
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}

export default DetailContainer;
