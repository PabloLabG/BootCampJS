export const mapAcccountFromApiToVm = (account) => {
    return {
        ...account,
        /*id: account.id,
        type: account.type,*/
        balance: `${account.balance.toLocaleString('de', {style:'currency', currency:'EUR', useGrouping: true})}`,
        alias: account.name
    };
};

export const mapAccountFromVmToApi = (account) => {
    return {
        ...account,
        /*id: account.id,
        type: account.type,*/
        balance: `${account.balance}`,
        name: account.alias
    };
};