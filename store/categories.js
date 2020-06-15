const categories = [
  {
    id: 1,
    name: 'Furniture',
  },
  {
    id: 2,
    name: 'Cars',
  },
  {
    id: 3,
    name: 'Cameras',
  },
  {
    id: 4,
    name: 'Games',
  },
  {
    id: 5,
    name: 'Clothing',
  },
];

const getCategories = () => categories;

const getCategory = (id) => categories.find((c) => c.id === id);

module.exports = {
  getCategories,
  getCategory,
};
