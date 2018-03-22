export default async function(event, context, callback) {
    const rpcResult = { hello: "world" };
    const defaultHeaders = {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    };

    const response = {
        headers: { ...defaultHeaders },
        body: JSON.stringify(rpcResult),
        statusCode: 200
    };
    callback(null, response);
}
