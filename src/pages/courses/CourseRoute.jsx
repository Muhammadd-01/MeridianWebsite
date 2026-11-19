import { Navigate, useParams } from "react-router-dom";
import CoursePage from "./CoursePage";
import { coursePages } from "./courseData";

// Renders the course page that matches the URL, e.g. /services/training/iso-9001-lead-auditor.
// Unknown course addresses go back to the training catalogue.
export default function CourseRoute() {
  const { slug } = useParams();
  const course = coursePages.find((item) => item.slug === slug);
  if (!course) {
    return <Navigate to="/services/training" replace />;
  }
  return <CoursePage key={course.slug} course={course} />;
}
