import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
    descricao: String,
    lavouroupa: Boolean,
    observacao: String,
    metrocubico: Number,
    consumo: Number,
    dateTimeRecord:{
        type: Date,
        required: true
    }
})