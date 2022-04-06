import { TxType } from "./TxType";

export class Transaction {
    desc: string;
    amount: number;
    type: TxType;
    constructor(desc: string, amount: number, type: TxType) {
        this.desc = desc;
        this.amount = amount;
        this.type = type;
    }
}