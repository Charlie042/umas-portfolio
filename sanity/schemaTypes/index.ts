import { type SchemaTypeDefinition } from 'sanity'
import { HomeCard, project,testimonial } from './home'; // Import both schemas

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    HomeCard, // Add HomeCard
    project,  // Add project
    testimonial,
  ],
}
