const { AuthenticationError } = require("apollo-server-express");
const { User, Appointment } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    appointments: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Appointment.find(params).sort({ createdAt: -1 });
    },
    appointment: async (parent, { appointmentId }) => {
      return Appointment.findOne({ _id: appointmentId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("appointments");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { name, username, email, password, isAdmin }) => {
      const user = await User.create({
        name,
        username,
        email,
        password,
        isAdmin,
      });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addAppointment: async (parent, { barberName, date, time }, context) => {
      if (context.user) {
        console.log(context.user);
        let newAppt = {
          userId: context.user._id,
          username: context.user.username,
          barberName,
          date,
          time,
        };
        console.log(newAppt);

        const appointment = await Appointment.create(newAppt);
        let userUpdate = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { appointments: appointment._id } }
        );
        console.log("userUpdate: " + userUpdate);
        return appointment;

        // console.log(appointment)
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addAvailability: async (parent, { date, time }, context) => {
      if (context.user) {
        const availability = { date, time };
        let user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { availability } }
        );
        console.log(user);

        // findOneAndUpdate by user
        // objects into user w/
        // $addtoset pull to ste

        return user;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // addSpecialty: async (parent, { }, context) => {
    //   if (context.user) {
    //     const specialty =
    //       let user = await user.findOneAndUpdate(
    //         { _id: context.user._id },
    //         {
    //           $addToSet: {}
    //         });
    //     console.log(user);
    //     return user;
    //   } throw new AuthenticationError("You need to be logged in!");
    // },

    removeAppointment: async (parent, { appointmentId }, context) => {
      if (context.user.isAdmin) {
        console.log("should be an admin");
        const appointment = await Appointment.findOneAndDelete({
          _id: appointmentId,
          // barberName: context.user.username,
        });
        console.log(appointment);
        await User.findOneAndUpdate(
          { username: appointment.username },
          { $pull: { appointments: appointment._id } }
        );
        return appointment;
      }

      // a user can only have 1 appt booked at a time so it makes sense to just remove 1 appt
      if (context.user) {
        const appointment = await Appointment.findOneAndDelete({
          userId: context.user._id,
          // barberName: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { appointments: appointment._id } }
        );

        return appointment;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
