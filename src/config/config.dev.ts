export const config = {
  gqlEndpoint:
    process.env.REACT_APP_GQL_ENDPOINT || 'http://localhost:3000/graphql',
  tokenLive: 8 * 60, // minutes
};
