/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      author
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        author
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAccounts = /* GraphQL */ `
  query GetAccounts($id: ID!) {
    getAccounts(id: $id) {
      id
      accountid
      name
      createdAt
      updatedAt
    }
  }
`;
export const listAccountss = /* GraphQL */ `
  query ListAccountss(
    $filter: ModelAccountsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccountss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        accountid
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComments = /* GraphQL */ `
  query GetComments($id: ID!) {
    getComments(id: $id) {
      id
      author
      description
      priority
      createdAt
      updatedAt
    }
  }
`;
export const listCommentss = /* GraphQL */ `
  query ListCommentss(
    $filter: ModelCommentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        author
        description
        priority
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
