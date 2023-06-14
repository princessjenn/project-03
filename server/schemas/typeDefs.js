const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Availability {
    date: String
    startTime: String
    endTime: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    isAdmin: Boolean
    appointments: [Appointment]
    specialties: [Specialty]
    availability: [Availability]
  }

  type Barber {
    _id: ID
    name: String
    specialties: String
    availability: [String]
  }

  type Specialty {
    _id: ID
    name: String
    description: String
    price: Int
  }

  type Appointment {
    _id: ID
    userId: ID
    username: String!
    barberId: ID
    barberName: String
    specialty: String!
    date: String!
    time: String!
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user(userName: String!): User
    appointment(appointmentId: ID!): Appointment
    appointments(appointmentId: ID): [Appointment]
    me: User
  }

  type Mutation {
    addUser(
      name: String!
      username: String!
      email: String!
      password: String!
      isAdmin: Boolean!
    ): Auth
    login(email: String!, password: String!): Auth
    addAppointment(
      barberName: String!
      specialty: String!
      date: String!
      time: String!
    ): Appointment
    removeAppointment(appointmentId: ID): Appointment
  }
`;

module.exports = typeDefs;
