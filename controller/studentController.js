import student from '../model/studentModel.js';

export const readStudent = async (req, res) => {
    const result = await student.find();

    res.status(200).json(result);
};

export const readOneStudent = async (req, res) => {
    const result = await student.findOne({name : req.params.name});
    
    res.status(200).json(result);
}

export const createStudent = (req, res) => {
    if(req.files == null) throw res.status(422).json({msg : 'data required !'})
}