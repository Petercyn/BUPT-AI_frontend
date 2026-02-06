import React from 'react';

const CourseSelector = () => {
    return (
        <div className="course-selector">
            <h2>Choose your school, department, course and level</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <select>
                    <option value="BUCC">School of Computing Science</option>
                    <option value="NASA">School of Nursing Science</option>
                </select>
                <select>
                    {/* Department options would go here */}
                </select>
                <select>
                    {/* Course options would go here, removing the empty "Select a course" option */}
                </select>
                <select>
                    <option value="" disabled selected>Select Level</option>
                    {[100, 200, 300, 400, 500, 600].map(level => (
                        <option key={level} value={level}>{level}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default CourseSelector;
