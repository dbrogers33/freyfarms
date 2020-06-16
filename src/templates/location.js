import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => {

    return (
    <div>
        <h1>{data.airtable.data.Store_Name}</h1>
        {/*  <img src={data.airtable.column_name_2} /> */}
    </div>
    )
}

export const query = graphql`
query GetRecord($recordId: String!){
    airtable(recordId: { eq: $recordId}) {
        data {
          Store_Name
        }
        recordId
      }
}`