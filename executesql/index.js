const AWS = require("aws-sdk");

exports.handler = async (event, context) => {
    
  const RDS = new AWS.RDSDataService({accessKeyId : event.account.accessKey,secretAccessKey : event.account.secretKey });
  
  let params = {
    awsSecretStoreArn: event.awsSecretStoreArn,
    dbClusterOrInstanceArn: event.dbClusterOrInstanceArn,
    sqlStatements: event.sqlStatements,
    database: event.database,
    schema: event.schema
  };
  let response = await RDS.executeSql(params).promise();
  console.log(response);
  
  let result =response.data.sqlStatementResults;
  return result;
};