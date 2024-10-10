import { Pet, Category, Tag } from '../api/petstore';

export const createCategory = (
  overrides: Partial<Category> = {}
): Category => ({
  id: Math.floor(Math.random() * 1000) + 1,
  name: `Category ${Math.random().toString(36).substring(7)}`,
  ...overrides,
});

export const createTag = (overrides: Partial<Tag> = {}): Tag => ({
  id: Math.floor(Math.random() * 1000) + 1,
  name: `Tag ${Math.random().toString(36).substring(7)}`,
  ...overrides,
});

export const createPet = (overrides: Partial<Pet> = {}): Pet => ({
  id: 0, // The API will assign an ID
  category: createCategory(),
  name: `Pet ${Math.random().toString(36).substring(7)}`,
  photoUrls: [
    `https://example.com/pet-${Math.random().toString(36).substring(7)}.jpg`,
  ],
  tags: [createTag()],
  status: 'available',
  ...overrides,
});
