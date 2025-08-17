import { varchar } from 'drizzle-orm/pg-core';
import { pgTable, text, uuid } from 'drizzle-orm/pg-core';

export const USER_TABLE_CONSTANTS = {
  tableName: 'user',
  columns: {
    id: 'id',
    name: 'name',
    email: 'email',
    provider: 'provider',
    image: 'image',
    oauthId: 'oauth_id',
    createdAt: 'createdAt',
  },
  length: {
    name: 64,
    email: 128,
    provider: 64,
  },
} as const;

const { tableName, columns, length } = USER_TABLE_CONSTANTS;

export const user = pgTable(tableName, {
  id: uuid(columns.id).primaryKey().unique().defaultRandom(),
  name: varchar(columns.name, { length: length.name }).notNull(),
  email: varchar(columns.email, { length: length.email }).notNull().unique(),
  provider: varchar(columns.provider, { length: length.provider }),
  image: varchar(columns.image),
});
