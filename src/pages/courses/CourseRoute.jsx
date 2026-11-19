import { Navigate, useParams } from "react-router-dom";
import CoursePage from "./CoursePage";
import { coursePages, coursePath } from "./courseData";

// Renders the course page that matches the URL, e.g. /services/training/iso-9001-lead-auditor.
// With `redirect`, short addresses such as /training/pmp-exam-preparation forward to that page.
// Unknown course addresses go back to the training catalogue.
export default function CourseRoute({ redirect = false }) {
  const { slug } = useParams();
  const course = coursePages.find((item) => item.slug === slug);
  if (!course) {
    return <Navigate to="/services/training" replace />;
  }
  if (redirect) {
    return <Navigate to={coursePath(course.slug)} replace />;
  }
  return <CoursePage key={course.slug} course={course} />;
}
