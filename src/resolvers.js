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
        await User.create({
          name,
          balance
        });
      }
    }
  }
};

export default resolvers;
