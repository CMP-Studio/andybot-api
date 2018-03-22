enum RPCError {
    Unauthorized = "Unauthorized",
    AuthenticationError = "AuthenticationError",
    BadArguments = "BadArguments",
    UnrecognizedMethod = "UnrecognizedMethod",
    UnrecognizedAuthorizer = "UnrecognizedAuthorizer",
    InternalError = "InternalError"
}

export default RPCError;
