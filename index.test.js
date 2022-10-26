const User = require('./User.js');
const sequelize = require('./sequelize.js');
const {register, login} = require('./index.js');

const userToAdd = {
    username: 'albert',
    password: 'bertie99'
}

describe('Band and Musician Models', () => {

beforeAll(async () => {
    await sequelize.sync({force: true});
});

it('Register: Adds user to db', async () => {
    await register(userToAdd.username, userToAdd.password);
    const [foundUser] = await User.findAll({
        where: {
            username: userToAdd.username
        }
    });
    expect(foundUser).toEqual(expect.objectContaining({
        username: userToAdd.username
    }));
})

it('Register: Does not store password in plain text', async () => {
    await register(userToAdd.username, userToAdd.password);
    const [foundUser] = await User.findAll();
    expect(foundUser.password).not.toEqual(userToAdd.password);
});

it('Login after Register: Returns `Success` if password correct', async () => {
    await register(userToAdd.username, userToAdd.password);
    const result = await login(userToAdd.username, userToAdd.password);
    expect(result).toBe('Success');
});

it('Login after Register: Returns `Failed` if password incorrect', async () => {
    await register(userToAdd.username, userToAdd.password);
    const result = await login(userToAdd.username, 'wrongpassword');
    expect(result).toBe('Failed');
});


})