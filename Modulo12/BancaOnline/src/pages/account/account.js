import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors, onSetValues } from '../../common/helpers'
import { formValidation } from './account.validations';
import { history } from '../../core/router'
import { getAccount, updateAccount, insertAccount } from './account.api';
import { mapAcccountFromApiToVm, mapAccountFromVmToApi } from './account.mappers';


let account = {
    id: '',
    type: '',
    alias:''
};

const params = history.getParams();
const isEditMode = Boolean(params.id);

if (isEditMode) {
    getAccount(params.id).then((appiAccount) => {
        account = mapAcccountFromApiToVm(appiAccount);
        onSetValues(account);
    });
}

onUpdateField('type', (event) => {
    const value = event.target.value;
    account = {...account, type: value};

    formValidation.validateField('type', account.type).then((result) => {
        onSetError('type', result);
    });
});

onUpdateField('alias', (event) => {
    const value = event.target.value;
    account = {...account, alias: value};

    formValidation.validateField('alias', account.alias).then((result) => {
        onSetError('alias', result);
    });
});

const onSave = () => {
    const apiAccount = mapAccountFromVmToApi(account);
    return isEditMode ? updateAccount(apiAccount) : insertAccount({...apiAccount, lastTransaction: new Date()});
};

onSubmitForm('save-button', (event) => {
    formValidation.validateForm(account).then((result) => {
        onSetFormErrors(result);
        
        if(result.succeeded) {
            onSave().then((apiAccount) => {
                history.back();
            });
        }
    });
});