
import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://vitphat350:xWGVrJeEBPAeQT6K@cluster0.fbmuzdh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
  },
];
