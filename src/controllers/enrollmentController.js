const supabase = require('../config/supabaseClient');

// Enroll student in a course
exports.enrollStudent = async (req, res) => {
    const { student_id, course_id } = req.body;

    // Check if already enrolled
    const { data: existingEnrollment, error: checkError } = await supabase
        .from('enrollments')
        .select('*')
        .eq('student_id', student_id)
        .eq('course_id', course_id)
        .single();

    if (existingEnrollment) {
        return res.status(400).json({ error: 'Student already enrolled in this course' });
    }

    const { data, error } = await supabase
        .from('enrollments')
        .insert([{ student_id, course_id, enrollment_date: new Date() }])
        .select();

    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json(data[0]);
};

// Get courses for a specific student
exports.getStudentCourses = async (req, res) => {
    const { student_id } = req.params;

    const { data, error } = await supabase
        .from('enrollments')
        .select(`
      id,
      enrollment_date,
      courses (
        id,
        name,
        description,
        credit
      )
    `)
        .eq('student_id', student_id);

    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json(data);
};
