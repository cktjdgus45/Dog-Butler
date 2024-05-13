import { type SchemaTypeDefinition } from 'sanity'
import user from './user';
import product from './product';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [user, product],
}
