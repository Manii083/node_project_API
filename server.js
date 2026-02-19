import express from 'express';
import { connectDB } from './db.js';
import User from './User.js';

 const app = express();
 app.use(express.json());
 await connectDB();

 app.get('/users', async (req, res) => {
   try {
     const users = await User.find();
     res.json(users);
   } catch (error) {
     res.status(500).json({ error: error.message });
   }
 });

 app.post('/users', async (req, res) => {
    const { name, email } = req.body;
    try {
      const user = new User({ name, email });
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
 });

 app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
      const user = await User.findByIdAndUpdate(id, { name, email }, { new: true });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByIdAndDelete(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

 app.listen(5001, async () => {
   console.log('Server is running on port 5001');
 });