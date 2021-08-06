const { ApolloServer, gql } = require("apollo-server-express");
import { Company, Employee } from "../model/model";

export const resolvers = {
  Query: {
    hello: () => "Hello",
    company: async () => {
      const result = await Company.find();
      console.log(result);
      return result;
    },
    Employees: async () => {
      const result = await Employee.find();
      console.log(result);
      return result;
    },
  },

  Mutation: {
    createCompany: async (parentVal, { name }) => {
      const company = await new Company({ name });
      company.save().then(() => console.log("company saved"));
      console.log(company);
      return company;
    },

    createEmployes: async (parentVal, { name, age }) => {
      const emp = await new Employee({
        name,
        age,
      });
      emp.save().then(() => console.log("emp saved"));
      console.log(emp);
      return emp;
    },
  },
};
