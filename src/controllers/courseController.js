const supabase = require('../config/supabaseClient');

// Get all courses
exports.getAllCourses = async (req, res) => {
    const { data, error } = await supabase
        .from('courses')
        .select('*');

    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json(data);
};

// Create new course
exports.createCourse = async (req, res) => {
    const { name, description, credit } = req.body;
    const { data, error } = await supabase
        .from('courses')
        .insert([{ name, description, credit }])
        .select();

    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json(data[0]);
};
