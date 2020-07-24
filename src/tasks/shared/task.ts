import { Document } from 'mongoose';

export class Task extends Document {
    descricao: string;
    lavouroupa: boolean;
    observacao: string;
    metrocubico: number;
    consumo: number;
    dataTimeRecord: Date;
}
