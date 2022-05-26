const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Post {
    _id: ID
    postText: String
    createdAt: String
    username: String
    likeCount: Int
    
  }

  type: Query {
    Posts {
      _id: ID
      postText: String
      createdAt: String
      username: String
      likeCount: Int
    }
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postText: String!): Post
    addLike(postId: ID!): Post
  }
`;

module.exports = typeDefs;