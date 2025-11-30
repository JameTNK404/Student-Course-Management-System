const supabase = require('../config/supabaseClient');

// Get all students
exports.getAllStudents = async (req, res) => {
    const { data, error } = await supabase
        .from('students')
        .select('*');

    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json(data);
};

// Get student by ID
exports.getStudentById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('students')
        .select('*')
        .eq('id', id)
        .single();

    if (error) return res.status(404).json({ error: 'Student not found' });
    res.status(200).json(data);
};

// Create new student
exports.createStudent = async (req, res) => {
    const { fullname, email, major } = req.body;
    const { data, error } = await supabase
        .from('students')
        .insert([{ fullname, email, major }])
        .select();

    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json(data[0]);
};

// Update student
exports.updateStudent = async (req, res) => {
    const { id } = req.params;
    const { fullname, email, major } = req.body;
    const { data, error } = await supabase
        .from('students')
        .update({ fullname, email, major })
        .eq('id', id)
        .select();

    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json(data[0]);
};

// Delete student
exports.deleteStudent = async (req, res) => {
    const { id } = req.params;
    const { error } = await supabase
        .from('students')
        .delete()
        .eq('id', id);

    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ message: 'Student deleted successfully' });
};
