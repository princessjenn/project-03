const { AuthenticationError } = require("apollo-server-express");
const { User, Appointment } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("thoughts");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("thoughts");
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
        return User.findOne({ _id: context.user._id }).populate("thoughts");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
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
    addAppointment: async (
      parent,
      { barberName, specialty, date, time },
      context
    ) => {
      if (context.user) {
        const appointment = await Appointment.create({
          barberName,
          specialty,
          date,
          time,
          specialty: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { appointment: appointment._id } }
        );

        return appointment;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeAppointment: async (parent, { appointmentId }, context) => {
      if (context.user) {
        const appointment = await Appointment.findOneAndDelete({
          _id: context.user._id,
          barberName: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { appointment: appointment._id } }
        );

        return appointment;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
