# db-password
TASK: Write two async functions: register and login.

register: Creates new user in DB

Receives as parameters:

username

password

Import bcrypt at the top of the file

Use bcrypt to hash the password

Save the user (username and hashed password) to the User model

register('mimi', 'memyselfandI1');
// user gets created in DB
// i.e. subsequent User.findAll() should return the new record.
// new record should NOT have the plaintext password

login: Verifies username and password against user in DB

Receives as parameters:

username

password

bcrypt should already be imported at the top of the file

Find the user (by username) in the db

Use bcrypt to compare the plaintext password to the hashed password in the DB.

If the hashed password matches, return the string Success. Otherwise, return Failed.

