import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { PropsWithChildren } from 'react';

const client = new ApolloClient({
  uri: 'https://chagallu.stepzen.net/api/oldfashioned-aardvark/__graphql',
  headers: {
    Authorization:
      'apikey chagallu::stepzen.net+1000::186c1b2cf5cff2214b43700408e5e419b5d01be431bd22094b8894c49b883d84',
  },
  cache: new InMemoryCache(),
});

const ApolloClientProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
;