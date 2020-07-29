import React, { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'

const listComments = `query listComments {
    listCommentss{
      items{
        id
        author
        description
      }
    }
  }`;
  const addComments = `mutation createComments($author:String! $description: String!) {
    createComments(input:{
      author:$author
      description:$description
    }){
      id
      author
      description
    }
  }`;

  export class Comments extends React.Component {
    CommentsMutation = async () => {
        const todoComments = {
          author: 'Party tonight!',
          description: 'Afffmplify CLI rocks!'
        };
      const newComments = await API.graphql(graphqlOperation(addComments, todoComments));
        alert(JSON.stringify(newComments));
      };


      listQuery = async () => {
        console.log('listing Comments');
        const allComments = await API.graphql(graphqlOperation(listComments));
        alert(JSON.stringify(allComments));
      };

    render() {
        return (
            <div className="App">
              <p> Click a button </p>
              <button onClick={this.listQuery}>GraphQL Query</button>
              <button onClick={this.CommentsMutation}>GraphQL Mutation</button>
            </div>
          );
    }
  }
