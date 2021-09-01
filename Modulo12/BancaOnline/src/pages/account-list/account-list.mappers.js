
export const mapAccountListFromApiToVm = (accountList) => {
    return accountList.map(account => mapAccountFromApiToVm(account));
};

const mapAccountFromApiToVm = (account) => {
    return {
        id: account.id,
        iban: account.iban,
        name: account.name,
        balance: `${account.balance.toLocaleString('de', {style:'currency', currency:'EUR', useGrouping: true})}`,
        lastTransaction: new Date(account.lastTransaction).toLocaleDateString()
    };
};