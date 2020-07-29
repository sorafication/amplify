import React, { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'

function AccountList(props) {
    //const accountsData = await API.graphql(graphqlOperation(listTodos))
    const accounts = ["123", "234", "eue", "hhjhk", "hjhjhj"]
const listAccounts = accounts.map( (accounts) => <li> {accounts} </li> );
return listAccounts;
}




export class Greeting extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: "BLA",
      }
    }
      render() {
      return (
        <h1> Willkommen bei Kumo { this.props.name } </h1>


      );
    }
  }

  export class AWSAccountLists extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
        value: null,
      }
    }


      render() {
    let listAccountsss = AccountList();
      return (
        <ul> {listAccountsss}
        </ul>

      );
    }
  }
