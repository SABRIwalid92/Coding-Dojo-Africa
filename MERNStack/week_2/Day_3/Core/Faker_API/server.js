const express = require("express");
const app = express();
const PORT = 8000;
const { faker } = require("@faker-js/faker");

app.use(express.json(), express.urlencoded({ extended: true }));

// Create user Fn
const createUser = () => {
  const newFakeUser = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    _idU: faker.database.mongodbObjectId(),
  };
  const { password, email, phoneNumber, lastName, firstName, _idU } =
    newFakeUser;

  console.log("user created");

  return {
    _idU: _idU,
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email,
    password: password,
  };
};

// Create company Fn

const createCompany = () => {
  const newFakeCompany = {
    _idC: faker.database.mongodbObjectId(),
    name: faker.company.name(),
    street: faker.location.street(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
    country: faker.location.country(),
  };

  const { name, street, city, state, zipCode, country, _idC } = newFakeCompany;

  console.log("company created");
  return {
    _idC: _idC,
    name: name,
    address: {
      street: street,
      city: city,
      state: state,
      zipCode: zipCode,
      country: country,
    },
  };
};

app.get("/api/newuser", (req, res) => {
  res.json(createUser());
});
app.get("/api/newcompany", (req, res) => {
  res.json(createCompany());
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
