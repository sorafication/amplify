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
export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      accountid
      name
      email
      num
      status
      createdAt
      updatedAt
    }
  }
`;
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        accountid
        name
        email
        num
        status
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
