import { Validators, createFormValidation } from '@lemoncode/fonk';
import { isUrl } from '@lemoncode/fonk-is-url-validator';
import { arrayRequired } from '@lemoncode/fonk-array-required-validator';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';

const patternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const validationSchema = 
{
    field:
    {
        title: [{ validator: Validators.required, message: 'Campo requerido' }],
        notes: [{ validator: Validators.required, message: 'Campo requerido' }],        
        email: 
        [
            { validator: Validators.required, message: 'Campo requerido' }, 
            { validator: Validators.pattern, customArgs: { pattern: patternEmail }, message: 'Formato de correo incorrecto'}
        ],
        phone: 
        [
            { validator: Validators.required, message: 'Campo requerido' },
            { validator: Validators.pattern, customArgs: { pattern: /^(6|7|9)\d{8}$/ }, message: 'Formato de teléfono no válido'}
        ],
        price: 
        [
            { validator: Validators.required, message: 'Campo requerido' }, 
            { validator: positiveNumber.validator, message: 'Debe ser mayor que 0' }
        ],
        address: [{ validator: Validators.required, message: 'Campo requerido' }],
        city: [{ validator: Validators.required, message: 'Campo requerido' }],
        province: [{ validator: Validators.required, message: 'Campo requerido' }],
        squareMeter: 
        [
            { validator: Validators.required, message: 'Campo requerido' }, 
            { validator: positiveNumber.validator, message: 'Debe ser mayor que 0' }
        ],
        rooms: 
        [
            { validator: Validators.required, message: 'Campo requerido' }, 
            { validator: positiveNumber.validator, message: 'Debe ser mayor que 0' }
        ],
        bathrooms:
        [
            { validator: Validators.required, message: 'Campo requerido' }, 
            { validator: positiveNumber.validator, message: 'Debe ser mayor que 0' }
        ],
        locationUrl: [{ validator: isUrl.validator, message: 'URL no válida' }],
        // images: 
        // [
        //     {
        //       validator: arrayRequired.validator,
        //       customArgs: { minLength: 1, maxLength: 3 },
        //       message: 'Array de imagenes vacia o ha superado el máximo de 3.'
        //     }
        // ]
    }
}

export const formValidation = createFormValidation(validationSchema);