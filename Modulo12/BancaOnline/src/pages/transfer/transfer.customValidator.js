
const amountValidation = (fieldValidatorArgs) => {
    const {value} = fieldValidatorArgs;
    const validationResult = {
        succeeded: false,
        type: 'MY_AMOUNT_VALIDATOR',
        message: 'Importe no válido'
    };

    if (value && value > 0) {
        validationResult.succeeded = true;
        validationResult.message = '';
    }

    return validationResult;
};

const dayValidation = (fieldValidatorArgs) => {
    const {value} = fieldValidatorArgs;
    const validationResult = {
        succeeded: false,
        type: 'MY_DAY_VALIDATOR',
        message: 'Día no válido'
    };

    if (value && value >= 1 && value <= 31) {
        validationResult.succeeded = true;
        validationResult.message = '';
    }

    return validationResult;
}

const monthValidation = (fieldValidatorArgs) => {
    const {value} = fieldValidatorArgs;
    const validationResult = {
        succeeded: false,
        type: 'MY_MONTH_VALIDATOR',
        message: 'Mes no válido'
    };

    if (value && value >= 1 && value <= 12) {
        validationResult.succeeded = true;
        validationResult.message = '';
    }

    return validationResult;
}

const yearValidation = (fieldValidatorArgs) => {
    const {value} = fieldValidatorArgs;
    const validationResult = {
        succeeded: false,
        type: 'MY_YEAR_VALIDATOR',
        message: 'Año no válido'
    };

    if (value && value >= new Date().getFullYear()) {
        validationResult.succeeded = true;
        validationResult.message = '';
    }

    return validationResult;
}

export {amountValidation, dayValidation, monthValidation, yearValidation};