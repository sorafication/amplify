//import React, { useEffect, useState } from 'react'
import React from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import MaterialTable from 'material-table';




// GraphQL Query to get all data
const listAllAccounts = `query listAllAccounts {
  listAccounts (limit: 300) {
    items{
      id
      accountid
      num
      name
      email
      status
    }
  }
}`;


// Main Component which fetches all data from DynamoDB via GraphQL.
  export class AWSAccountLists extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
        Acc: []
      }
    }

    //componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
    //Initialization that requires DOM nodes should go here.
    //If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
    componentDidMount() {
      this.queryAccounts();
    }

    // Function that fetches data and sets state
    queryAccounts = async() => {
      try {
        const result = await API.graphql(graphqlOperation(listAllAccounts))
        const result_json = Object.values(result)
        const result_optimized = result_json[0].listAccounts.items
        // this will re render the view with new data
        this.setState({

          AccountList:result_optimized,

          Acc:result_optimized.map((account, i) => (
            <tr>
            <td key={i}>{i+1}</td>
            <td key={i}>{account.name}</td>
            <td key={i}>{account.accountid}</td>
            <td key={i}>{account.email}</td>
            <td key={i}>{account.status}</td>
            </tr>
          )),

          Accountid:result_optimized.map((account, i) => (
            <td key={i} className="list-group-item">{account.accountid}</td>
          )),

          Num:result_optimized.map((account, i) => (
            <td key={i} className="list-group-item">{account.num}</td>
          )),

          Name:result_optimized.map((account, i) => (
            <td key={i} className="list-group-item">{account.name}</td>
          )),

          Email:result_optimized.map((account, i) => (
            <td key={i} className="list-group-item">{account.email}</td>
          )),

          Status: result_optimized.map((account, i) => (
            <td key={i} className="list-group-item">{account.status}</td>
          ))
        })

      } catch (err) {
        console.log(err);
      }
    }

    // render all the information that is set into the state
      render() {

      return (
        <div style={{ maxWidth: '100%' }} className="Accounts">

        <h2> Tabelle mit allen AWS Accounts  </h2>


      <table>

        <tr>
          <th> Account Nummer </th>
          <th> Account Name </th>
          <th> Account ID </th>
          <th> Account Email </th>
          <th> Account Status </th>
        </tr>

         {this.state.Acc}


        </table>



        <MaterialTable
          columns={[
            { title: 'Nummer', field: 'num' },
            { title: 'Name', field: 'name' },
            { title: 'Account ID', field: 'accountid', type: 'numeric' },
            { title: 'Email', field: 'email', type: 'numeric' },
            { title: 'Status', field: 'status'}
          ]}
          data={this.state.AccountList}
          title="Account List"
        />

        </div>

      );
    }
  }
