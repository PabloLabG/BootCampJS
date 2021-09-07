import { Validators, createFormValidation } from '@lemoncode/fonk';

const patternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const validationSchema = 
{
    field:
    {
        email: 
        [
            { validator: Validators.required, message: 'Campo requerido' }, 
            { validator: Validators.pattern, customArgs: { pattern: patternEmail }, message: 'Formato de correo incorrecto'}
        ],
        message: [{ validator: Validators.required, message: 'Campo requerido' }]
    }
}

export const formValidation = createFormValidation(validationSchema);
