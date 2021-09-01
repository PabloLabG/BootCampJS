import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors } from '../../common/helpers';
import { isValidLogin } from './login.api';
import { formValidation } from './login.validations';
import { history, routes } from '../../core/router'

let login = {
    user: '',
    password: ''
};

onUpdateField('user', (event) => { 
    login = {
        ...login,
        user: event.target.value
    };

    formValidation.validateField('user', login.user).then(result => {        
        onSetError('user', result);
    });
});

onUpdateField('password', (event) => { 
    login = {
        ...login,
        password: event.target.value 
    };

    formValidation.validateField('password', login.password).then(result => {    
        onSetError('password', result);
    });
});

const onNavigate = (isValid) => {
    if (isValid) { 
        history.push(routes.accountList);
    } else {
        alert('Usuario y/o contraseña no válidos');
    }
}

onSubmitForm('login-button', () => {    
    formValidation.validateForm(login).then(result => {
        onSetFormErrors(result);

        if (result.succeeded) {
            isValidLogin(login).then(isValid => {
                onNavigate(isValid);
            });
        }
    });    
}); 