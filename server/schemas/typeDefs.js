const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: Int!
    username: String
    email: String
    password: String
  }

  type Barber {
    _id: Int!
    name: String
    specialties: String
    availability: [String]
  }

  type Specialty {
    name: String
    description: String
    price: INT
  }

  type Appointment {
    id: Int!
    userId: Int!
    username: String!
    barberId: Int!
    barberName: String
    specialty: String!
    date: Date!
    time: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addAppointment(username: String!, barberName: String!, time: String!): Appointment
    deleteAppointment(appointmentId: ID!): Appointment
  }
`;

module.exports = typeDefs;
