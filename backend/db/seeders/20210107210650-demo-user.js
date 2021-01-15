'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        hashedPassword: bcrypt.hashSync('password'),
        address: '7112 Dixie Dr.',
        city: 'Austin',
        state: 'Texas',
        zip: 78744,
        avatar: 'https://images.unsplash.com/photo-1530176329450-414bec233999?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw5NzQ3MTY1N3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        baker: true
      },
      {
        email: 'chef@user.com',
        hashedPassword: bcrypt.hashSync('escoffier'),
        address: '123 baker St',
        city: 'Austin',
        state: 'Texas',
        zip: 78744,
        avatar: 'https://images.unsplash.com/photo-1603735358492-30f74a9fca37?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NzQ3MTY1N3x8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        baker: true
      },
      {
        email: 'pastellero@gnail.com',
        hashedPassword: bcrypt.hashSync('crusty123'),
        address: '32 escalante ave',
        city: 'Marble Falls',
        state: 'Texas',
        zip: 78744,
        avatar: 'https://images.unsplash.com/photo-1573407947625-124549936954?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w5NzQ3MTY1N3x8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        baker: true
      },
      {
        email: 'gwen@email.con',
        hashedPassword: bcrypt.hashSync('gwenisawesome'),
        address: '909 Wharf Cove',
        city: 'Bangor',
        state: 'Maine',
        zip: 72435,
        avatar: 'https://images.unsplash.com/photo-1524978468871-3435635f0a9b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw5NzQ3MTY1N3x8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        baker: true
      },
      {
        email: 'sally.yates@users.con',
        hashedPassword: bcrypt.hashSync('legal123'),
        address: '1600 Pennsylvania Ave',
        city: 'Washington',
        state: 'DC',
        zip: 11101,
        avatar: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3w5NzQ3MTY1N3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        baker: true
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users',
      { email: { [Op.in]: ['demo@user.io'] } },
      { email: { [Op.in]: ['chef@user.com'] } },
      { email: { [Op.in]: ['pastellero@gnail.com'] } },
      { email: { [Op.in]: ['gwen@email.con'] } },
      { email: { [Op.in]: ['sally.yates@users.con'] } 
    }, {});
  }
};
