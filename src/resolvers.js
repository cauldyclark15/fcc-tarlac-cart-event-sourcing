import { PubSub } from 'apollo-server';

import { User, Cart, EventStore } from './models';

const pubsub = new PubSub();

const resolvers = {
  Query: {
    hello: () => 'world!'
  },
  Mutation: {
    async addUser(_, { name, balance }, context) {
      if (name && balance) {
        const newUser = await User.create({
          name,
          balance
        });

        return newUser;
      }

      throw new Error('Name and balance are required');
    }
  }
};

export default resolvers;
