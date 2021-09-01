
import { history } from '../../core/router/history';
import { getAllMovements, getMovementsById } from './movements.api';
import { getAccount } from '../account/account.api'; 
import { mapMovementListFromApiToVm } from './movements.mappers';
import { mapAcccountFromApiToVm } from '../account/account.mappers';
import { addMovementRows } from './movements.helpers';
import { onSetValues } from '../../common/helpers'
const params = history.getParams();

if (params.id) {
    getMovementsById(params.id).then((movements) => {
        const viewModelMovementList = mapMovementListFromApiToVm(movements);
        addMovementRows(viewModelMovementList);

        getAccount(params.id).then((account) => {        
            const viewModelAccount = mapAcccountFromApiToVm(account);
            onSetValues(viewModelAccount);
        });
    });
}
else {
    // Solo por curiosidad para cargar todos los movimientos 
    getAllMovements().then((movements) => {
        const viewModelMovementList = mapMovementListFromApiToVm(movements);
        addMovementRows(viewModelMovementList);
    });
}
