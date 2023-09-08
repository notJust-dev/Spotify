import { ActivityIndicator, FlatList, Text } from 'react-native';
import TrackListItem from '../../components/TrackListItem';
import { gql, useQuery } from '@apollo/client';

const query = gql`
  query MyQuery($genres: String!) {
    recommendations(seed_genres: $genres) {
      tracks {
        id
        name
        preview_url
        artists {
          id
          name
        }
        album {
          id
          name
          images {
            url
            width
            height
          }
        }
      }
    }
  }
`;

export default function HomeScreen() {
  const { data, loading, error } = useQuery(query, {
    variables: { genres: 'drum-and-bass,house' },
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return (
      <Text style={{ color: 'white' }}>Failed to fetch recommendations</Text>
    );
  }

  const tracks = data?.recommendations?.tracks || [];

  return (
    <FlatList
      data={tracks}
      renderItem={({ item }) => <TrackListItem track={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}
