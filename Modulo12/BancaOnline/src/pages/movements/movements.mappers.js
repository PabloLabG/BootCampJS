

export const mapMovementListFromApiToVm = (movementList) => {
    return movementList.map(movement => mapMovementFromApiToVm(movement));
};

const mapMovementFromApiToVm = (movement) => {
    return {
        id: movement.id,
        description: movement.description,
        amount: `${movement.amount.toLocaleString('de', {style:'currency', currency:'EUR', useGrouping: true})}`,
        balance: `${movement.balance.toLocaleString('de', {style:'currency', currency:'EUR', useGrouping: true})}`,
        transaction: new Date(movement.transaction).toLocaleDateString(),
        realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
        accountId: movement.accountId
    };
};