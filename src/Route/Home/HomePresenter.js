import Section from "Components/Section";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 10px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, error, loading }) =>
  loading ? null : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map((movie) => movie.title)}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming Movie">
          {upcoming.map((movie) => movie.title)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Movie">
          {popular.map((movie) => movie.title)}
        </Section>
      )}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
