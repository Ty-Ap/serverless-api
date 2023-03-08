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
  console.log(parsedBody);
  
  const response = {statusCode: null, body: null};
  
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