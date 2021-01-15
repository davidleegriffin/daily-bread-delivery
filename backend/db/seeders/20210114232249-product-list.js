'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        productName: 'Cowboy Bebop',
        price: 3,
        description: 'Great no-knead bread fermented in the moonlight overnight for superior flavor. Crust is flawless and the crumb has that old-school lattice.',
        imageURL: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Karems French Boule ',
        price: 2,
        description: 'Traditional French bread from the original master chef, Antoine Karem!!',
        imageURL: 'https://images.unsplash.com/photo-1603984042729-a34adc2ac9d0?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Farmhouse Wheat',
        price: 4,
        description: 'Flavorful and Nutritious, makes customers say "I would gladly spread peanut butter on this bread',
        imageURL: 'https://images.unsplash.com/photo-1533417177250-227597f5b264?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Smoked Bread',
        price: 3,
        description: 'Proprietary technique that can only be purchased here. One of a kind Smoked Bread has a deep smoky flavor that will turn a ham sandwich into a smoked ham sandwich.',
        imageURL: 'https://images.unsplash.com/photo-1511629036492-6c07153d3e83?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Rustic Italian/Ciabatta',
        price: 3,
        description: 'Traditional bread of the Italian countryside. an everyday favorite.',
        imageURL: 'https://images.unsplash.com/photo-1590346328376-f21c8e5b630e?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Irish Soda Bread',
        price: 3,
        description: 'Traditional Irish soda bread. Tastes clean and refreshing, like a biscuit.',
        imageURL: 'https://images.unsplash.com/photo-1584471973216-cadfdf0e15e5?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Rye Campaigne',
        price: 3,
        description: 'Country style rye bread from the Alsace-Lorraine region between France and Germany',
        imageURL: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8OTc0NzE2NTd8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
