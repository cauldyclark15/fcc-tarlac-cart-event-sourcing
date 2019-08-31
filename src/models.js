import db from './database';

const userSchema = new db.Schema({
  name: String,
  balance: Number
});

const cartSchema = new db.Schema({
  userId: String,
  items: [
    {
      name: String,
      price: Number
    }
  ]
});

const eventStoreSchema = new db.Schema({
  type: String,
  price: Number,
  name: String
});

const User = db.model('User', userSchema);
const Cart = db.model('Cart', cartSchema);
const EventStore = db.model('EventStore', eventStoreSchema);

export { User, Cart, EventStore };
