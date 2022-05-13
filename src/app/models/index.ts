export interface MutationResponse {
  isSuccess?: boolean;
  data?: any;
  message?: string;
}

export enum ROUTING_ENUMS {
  YOUR_PAGE = 'your-page',
  NEW_FEEDS = 'news-feed',
  LOGIN = 'login',
  CREATE_POST = 'create-post',
}

export const CONFIGS = {
  APOLLO_HOST_URL: 'http://localhost:27017/graphql',
  // APOLLO_HOST_URL: 'https://graphql-voter-app.herokuapp.com/',
}
