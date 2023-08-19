import '../config/db.js';
import mongoose from 'mongoose';

 const student = mongoose.model('siswa', {
    nisn : String,
    nama : {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    email : {
        type: String,
        require: true
    },
    phone : {
        type: String,
        require : true
    },
    foto : {
        type: String,
        require: true
    }
})

export default student;

