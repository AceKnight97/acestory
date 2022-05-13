import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Apollo
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import {
  ApolloClientOptions,
  InMemoryCache,
  ApolloLink,
} from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { setContext } from '@apollo/client/link/context';
import { CONFIGS } from '../models';

function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  // const basic = setContext((operation, context) => ({
  //   headers: {
  //     Accept: 'charset=utf-8'
  //   }
  // }));
  const auth = setContext((operation, context) => {
    // const token = localStorage.getItem('token');
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmExODE0NTQyOWFlM2QwOGU2MTA2ZSIsInJvbGUiOiJBZG1pbiIsImFkZHJlc3MiOiIxMjMgQWNlIiwicGhvbmUiOiIrODQ4MTk1NDE4OTciLCJpc1ZlcmlmaWVkIjpmYWxzZSwic2lnblVwRGF0ZSI6IjIwMjItMDQtMjhUMDQ6Mjk6MDguNDk3WiIsImlhdCI6MTY1MjQzMjIxMCwiZXhwIjoxNjUyNDM1ODEwfQ.feB2KTTD5eLDVVtNvsZkylbE7iNIm2Q5q0yehiLr5lU';

    if (token === null) {
      return {};
    } else {
      return {
        headers: {
          'access-token': `${token}`,
        },
      };
    }
  });

  const link = ApolloLink.from([
    // basic,
    auth,
    httpLink.create({ uri: CONFIGS.HOST_URL }),
  ]);

  return {
    link,
    cache: new InMemoryCache({
      addTypename: false
    }),
  };
}

@NgModule({
  exports: [ApolloModule, HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
