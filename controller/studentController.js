require('../config/db.js');
import student from '../model/studentModel.js';

export const readStudent = async (req, res) => {
    const result = await student.find();

    res.json(result);
};

export const readOneStudent = async (req, res) => {
    const result = await student.findOne({name : req.params.name});
    
    res.json(result);
}