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
        avatar: 'https://avatars2.githubusercontent.com/u/65681542?s=460&u=e12e22efe1c2a70d44c2cc3b9c13181151f0587a&v=4',
        baker: true
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      email: { [Op.in]: ['demo@user.io'] }
    }, {});
  }
};
