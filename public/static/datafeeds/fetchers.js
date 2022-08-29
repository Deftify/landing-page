import {  GraphQLClient } from 'graphql-request'

const gqlClient = new GraphQLClient('https://graphql.bitquery.io')

let requestHeaders = {
  'X-API-KEY': 'BQYt7WIuLCzyH6lHKabMA1Dfgvv3iLxm'
}

export const bitQueryFetcher = (query, variables) => gqlClient.request(query, variables, requestHeaders)