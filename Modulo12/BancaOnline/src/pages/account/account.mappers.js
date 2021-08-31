export const mapAcccountFromApiToVm = (account) => {
    return {
        ...account,
        /*id: account.id,
        type: account.type,*/
        alias: account.name
    };
};

export const mapAccountFromVmToApi = (account) => {
    return {
        ...account,
        /*id: account.id,
        type: account.type,*/
        name: account.alias
    };
};