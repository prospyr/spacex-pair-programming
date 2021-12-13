import gql from 'graphql-tag';

const UPCOMING_LAUNCHES = gql`
  query Launches($limit: Int) {
    launches(limit: $limit) {
      mission_name
      launch_date_local
    }
  }
`;

export default UPCOMING_LAUNCHES;
