
import { history } from '../../core/router/history';
import { getAllMovements } from './movements-api';
import { getAccount } from '../account/account.api'; 
import { mapMovementListFromApiToVm } from './movements-mappers';
import { mapAcccountFromApiToVm } from '../account/account.mappers';
import { addMovementRows } from './movements.helpers';
import { onSetValues } from '../../common/helpers'
const params = history.getParams();
const isEditMode = Boolean(params.id);

if (isEditMode) {
    getAllMovements().then((movements) => {
        const viewModelMovementList = mapMovementListFromApiToVm(movements).filter(movement => movement.accountId === params.id);
        addMovementRows(viewModelMovementList);

        getAccount(params.id).then((account) => {        
            const viewModelAccount = mapAcccountFromApiToVm(account);
            onSetValues(viewModelAccount);
        });
    });
}
