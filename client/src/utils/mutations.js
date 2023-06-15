import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_APPOINTMENT = gql`
  mutation addAppointment($username: String!, $barberName: String!, $time: String!) {
    addAppointment(username: $username, barberName: $barberName) {
      _id
      username
      barberName
      specialty
      date
      time
      }
    }
  
`;

export const DELETE_APPOINTMENT = gql`
  mutation deleteAppointment($appointmentId: String!) {
    deleteAppointment(appointmentId: $appointmentId) {
      _id
      username
      }
    }
  
`;
