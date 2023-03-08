# serverless-api

aws CRUD stuff

## delete

const dynamoose  =require('dynamoose');

// create a schema
const schema = new dynamoose.Schema({
    "id": String,
    "name": String,
    "interests": String
});

const peopleModel = dynamoose.model('people', schema);


exports.handler = async(event) => {
  console.log('the body', event.body);
  
  const response = {statusCode: null, body: null};
  
  try {
    let results  = await peopleModel.scan().exec();
    console.log(results);
    response.body = JSON.stringify(results);
    response.statusCode = 200;
    
  }catch(e){
    response.body = JSON.stringify(e.message);
    response.statusCode = 500;
  }
  
  return response;
};

## update

const dynamoose = require('dynamoose');
const schema = new dynamoose.Schema({
  "id": String,
  "name": String,
  "interests": String
});
const peopleModel = dynamoose.model('people', schema);
exports.handler = async(event) => {
  console.log('PATH PARAMS ----->', event.pathParameters);
  let id = event?.pathParameters?.id;
  let parsedData = JSON.parse(event.body);
  let updatedName = parsedData.name;
  let updatedInterests = parsedData.interests;
  console.log(updatedName);
  let response = {statusCode: null, body: null};
  try{
      let results = await peopleModel.update({"id": id, "name": updatedName, "interests": updatedInterests });
      console.log(results);
      response.body = JSON.stringify(results);
      response.statusCode = 200;
  }catch(e){
    response.body = JSON.stringify(e.message);
    response.statusCode = 500;
  }
  return response;
};

## post

const dynamoose  =require('dynamoose');

//mess with array for interests after proof of life

const schema = new dynamoose.Schema({
    "id": String,
    "name": String,
    "interests": String
});

const peopleModel = dynamoose.model('people', schema);

exports.handler = async(event) => {
  let parsedBody = JSON.parse(event.body);
  
  let response = {statusCode: null, body: null};
  
  try{
    let newPerson = await peopleModel.create(parsedBody);
    response.body = JSON.stringify(newPerson);
    response.statusCode = 200;
  }catch(e){
    response.body = JSON.stringify(e.message);
    response.statusCode = 500;
  }

  return response;
};

## get

const dynamoose  =require('dynamoose');

// create a schema
const schema = new dynamoose.Schema({
    "id": String,
    "name": String,
    "interests": String
});

const peopleModel = dynamoose.model('people', schema);


exports.handler = async(event) => {
  console.log('the body', event.body);
  
  const response = {statusCode: null, body: null};
  
  try {
    let results  = await peopleModel.scan().exec();
    console.log(results);
    response.body = JSON.stringify(results);
    response.statusCode = 200;
    
  }catch(e){
    response.body = JSON.stringify(e.message);
    response.statusCode = 500;
  }
  
  return response;
};

they all work.

![uml](./assets/class-18-401d51%20(1).png)
