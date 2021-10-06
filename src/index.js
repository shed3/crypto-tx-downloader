import * as fs from 'fs';
import * as path from 'path';
import { resolveConnection } from "crypto-janitor";

const fetchTxs = async (name, type, credentials) => {
    const resolvedConnection = await resolveConnection(name, type, {credentials})
    const txs = await resolvedConnection.connection.getAllTransactions()
    return txs
}

const main = async () => {
    const filePath = path.join(path.resolve(__dirname, '..'), 'accountsConfig.json')
    const rawAccounts = fs.readFileSync(filePath);
    const accounts = JSON.parse(rawAccounts);
    let transactions = Object.entries(accounts).map(([key, val]) => fetchTxs(key, val.type, val.credentials))
    transactions = await Promise.all(transactions)
    const jsonString = JSON.stringify(transactions,null, 4)
    fs.writeFile('./transactions.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
}

main()
