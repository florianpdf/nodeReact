
const ThrowError = error => { throw new Error(error) };
const NotImplemented = (error, info) => ThrowError(`${error} is not implemented. ${info || ''}`);

module.exports = {
    ThrowError,
    NotImplemented
};