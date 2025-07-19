import "./StudentTable.css";

function StudentTable({ students }) {
  if (!students || students.length === 0) {
    return <p>No students found.</p>;
  }

  return (
    <table className="table_wrapper">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Student ID</th>
          <th>Email</th>
          <th>Contact</th>
          <th>DOB</th>
          <th>Enrollment</th>
          <th>Photo</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={student.id}>
            <td>{index + 1}</td>
            <td>
              {student.first_name} {student.last_name}
            </td>
            <td>{student.student_id}</td>
            <td>{student.email}</td>
            <td>{student.contact_number}</td>
            <td>{student.date_of_birth?.slice(0, 10)}</td>
            <td>{student.enrollment_date?.slice(0, 10)}</td>
            <td>
              {student.profile_picture ? (
                <img
                  src={student.profile_picture}
                  alt="Profile"
                  style={{ width: "50px", height: "50px", borderRadius: "6px" }}
                />
              ) : (
                "No image"
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
