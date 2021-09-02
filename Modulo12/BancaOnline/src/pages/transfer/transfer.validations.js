import { Validators, createFormValidation } from '@lemoncode/fonk';
import { amountValidation, dayValidation, monthValidation, yearValidation, dateValidation } from './transfer.customValidator';

const patternIBAN = /^(([A-Z]{2}\d{2})(\d{20}))|((([A-Z]{2}\d{2})(\s\d{4}){4})\s{1}\d{4})$/i;
const patternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const validationSchema = 
{
    field: 
    {
        accountId: [{ validator: Validators.required, message: 'Campo requerido' }],
        iban: 
        [
            { validator: Validators.required, message: 'Campo requerido', customArgs: { trim: false }},
            { validator: Validators.pattern, customArgs: { pattern: patternIBAN }, message: 'Formato de IBAN incorrecto \'ES24 0123 0123 0123 0123 1223\'' }
        ],
        name: [{ validator: Validators.required, message: 'Campo requerido' }],
        amount: [{ validator: Validators.required, message: 'Campo requerido' }, { validator: amountValidation }],
        concept:[{ validator: Validators.required, message: 'Campo requerido' }],
        /*notes: [{ validator: Validators.required, message: 'Campo requerido' }],*/
        day: [ { validator: dayValidation } ],
        month: [ { validator: monthValidation } ],
        year: [ { validator: yearValidation } ],
        date: [{ validator: dateValidation }],
        email: [{ validator: Validators.pattern, customArgs: { pattern: patternEmail }, message: 'Formato de correo incorrecto'}]
    }
 }

export const formValidation = createFormValidation(validationSchema);