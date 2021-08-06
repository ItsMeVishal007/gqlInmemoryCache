import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String!
    company: [Company]!
    Employees: [Employes]!
  }

  type Employes {
    id: ID!
    name: String!
    age: String!
  }

  type Company {
    id: ID!
    name: String
  }

  type Mutation {
    createCompany(name: String!): Company
    createEmployes(name: String!, companyId: ID!, age: String!): Employes
  }
`;
