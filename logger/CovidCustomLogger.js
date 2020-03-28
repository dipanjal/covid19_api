module.exports.log = (fileName, methodName, args='none') => {
    console.log({
        file: fileName,
        method: Private.getMethodName(),
        args: args
    })
};

let Private = {
    getCurrentStackName: () => {
        return (new Error().stack).split("at ")[4];
    },
    getMethodName: () => {
        let currentStack = Private.getCurrentStackName();
        return currentStack.split('.')[3].replace(/\(.*/g, '').trim();
    }
};
