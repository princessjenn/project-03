import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query Query($username: String!) {
  user(username: $username) {
    _id
    username
    email
    password
    isAdmin
  }
}
`;

export const QUERY_APPOINTMENTS = gql`
  query appointments {
    appointments {
      _id
      userId
      username
      barberId
      barberName
      #specialty
      date
      time
    }
  }
`;

export const QUERY_SINGLE_APPOINTMENT = gql`
  query appointment($appointmentId: ID!) {
    appointment(appointmentId: $appointmentId) {
      _id
      userId
      username
      barberId
      barberName
      #specialty
      date
      time
      }
    }

`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      appointments {
        _id
        barberId
        barberName
        #specialty
        date
        time
      }
    }
  }
`;
