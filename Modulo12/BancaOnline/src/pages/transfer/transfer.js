import { onSubmitForm, onSetFormErrors, onUpdateField, onSetError } from '../../common/helpers';
import { formValidation } from './transfer.validations';
import { getAccountList } from '../account-list/account-list.api';
import { setAccountOptions } from './transfer.helpers';
import { history } from '../../core/router';
import { insertTransfer } from './transfer.api';

let transfer = {
    accountId: '',
    iban: '',
    name: '',
    amount: null,
    concept:'',
    notes: '',
    day: '',
    month: '',
    year: '',
    date: '',
    email: ''
};

const params = history.getParams();

getAccountList().then((accountList) => {    
    let ibanList = [{ id: '', iban: null, name: '-- Escoja Opción --' }, ...accountList ];            
    setAccountOptions(ibanList, (!!params.id) ? params.id : null);
});

/* Add Event Update*/
onUpdateField('select-account', (event) => {
    transfer = {...transfer, accountId: event.target.value};
});
onUpdateField('iban', (event) => {
    transfer = {...transfer, iban: event.target.value};
});
onUpdateField('name', (event) => {
    transfer = {...transfer, name: event.target.value};
});
onUpdateField('amount', (event) => {
    transfer = {...transfer, amount: event.target.value};
});
onUpdateField('concept', (event) => {
    transfer = {...transfer, concept: event.target.value};
});
onUpdateField('notes', (event) => {
    transfer = {...transfer, notes: event.target.value};
});
onUpdateField('day', (event) => {
    transfer = {...transfer, day: event.target.value, date: `${transfer.year}-${transfer.month}-${event.target.value}`};
});
onUpdateField('month', (event) => {
    transfer = {...transfer, month: event.target.value, date: `${transfer.year}-${event.target.value}-${transfer.day}`};
});
onUpdateField('year', (event) => {    
    transfer = {...transfer, year: event.target.value, date: `${event.target.value}-${transfer.month}-${transfer.day}`};
});
onUpdateField('email', (event) => {
    transfer = {...transfer, email: event.target.value};
});

const onSave = () => { return insertTransfer(transfer); }

onSubmitForm('transfer-button', (event) => {
    transfer.accountId = document.getElementById('select-account').value;
    

    formValidation.validateForm(transfer).then((result) => {
        onSetFormErrors(result);
        if (result.succeeded) {
            onSave().then(() => {
                alert('Transferencia realizada correctamente.');
                history.back();
            });
        }    
    });
});