const graphql = require('graphql');
const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
} = graphql;
const JSON_SERVER = 'http://localhost:3000';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString }},
      resolve(parentValue, args) {
        return axios
          .get(`${JSON_SERVER}/users/${args.id}`)
          .then(response => response.data);
      }
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
