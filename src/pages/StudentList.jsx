import { useEffect } from "react";
import useStudentStore from "../store/studentStore";
import StudentTable from "../components/StudentTable";

const StudentList = () => {
  const { students, fetchStudents, loading, error } = useStudentStore();

  useEffect(() => {
    fetchStudents();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Student List</h2>
      <StudentTable students={students} />
    </div>
  );
};

export default StudentList;
