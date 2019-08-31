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
    },

    async createCart(_, { userId }) {
      const newCart = await Cart.create({
        userId,
        items: []
      });

      return newCart;
    },

    async addToCart(_, { input }, context) {
      await Cart.findByIdAndUpdate(input.cartId, {
        $push: { items: { name: input.name, price: input.price } }
      });

      return Cart.findById(input.cartId);
    }
  }
};

export default resolvers;
