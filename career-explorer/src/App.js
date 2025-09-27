import React, { useState } from "react";
import "./App.css";

const courseData = {
  // -------------------------
  // 10th Standard Options
  // -------------------------
  "Science Stream (10+2)": {
    level: "10th Standard",
    govtExams: [
      { title: "JEE Main/Advanced", desc: "For engineering colleges" },
      { title: "NEET", desc: "For medical colleges" },
      { title: "KVPY", desc: "Science scholarship program" },
    ],
    privateJobs: [
      { title: "Lab Assistant", desc: "After diploma courses" },
      { title: "Technical Support", desc: "In science-based companies" },
    ],
    entrepreneurship: [
      { title: "Tuition Classes", desc: "Teaching science subjects" },
      { title: "Science Projects", desc: "Innovation and research" },
    ],
    higherStudies: [
      { title: "Engineering", desc: "B.Tech in various branches" },
      { title: "Medical", desc: "MBBS, BDS, BAMS" },
      { title: "Pure Sciences", desc: "B.Sc Physics, Chemistry, Biology" },
    ],
  },
  "Commerce Stream (10+2)": {
    level: "10th Standard",
    govtExams: [
      { title: "CA Foundation", desc: "Chartered Accountancy entry exam" },
      { title: "CPT", desc: "Common Proficiency Test" },
    ],
    privateJobs: [
      { title: "Accounting Assistant", desc: "Entry-level finance jobs" },
      { title: "Sales Associate", desc: "Business and marketing firms" },
    ],
    entrepreneurship: [
      { title: "Small Business", desc: "Retail shops, trading" },
      { title: "E-commerce", desc: "Online selling and dropshipping" },
    ],
    higherStudies: [
      { title: "B.Com", desc: "Bachelor in Commerce" },
      { title: "BBA", desc: "Business Administration" },
      { title: "Economics", desc: "B.A Economics" },
    ],
  },
  "Arts Stream (10+2)": {
    level: "10th Standard",
    govtExams: [
      { title: "NDA", desc: "Defence services entry" },
      { title: "CLAT", desc: "Law entrance exam" },
    ],
    privateJobs: [
      { title: "Content Writer", desc: "Creative and academic writing" },
      { title: "Design Intern", desc: "Art and design-related jobs" },
    ],
    entrepreneurship: [
      { title: "Freelancing", desc: "Design, writing, photography" },
      { title: "Local Business", desc: "Shops, handicrafts" },
    ],
    higherStudies: [
      { title: "B.A", desc: "Bachelor of Arts in various subjects" },
      { title: "Fine Arts", desc: "Bachelor of Fine Arts" },
      { title: "Law", desc: "LLB program" },
    ],
  },

  // -------------------------
  // 12th / Undergraduate
  // -------------------------
  "ITI / Diploma Courses": {
    level: "12th/Undergraduate",
    govtExams: [
      { title: "SSC", desc: "Technical staff exams" },
      { title: "Railways", desc: "Technician and junior engineer posts" },
    ],
    privateJobs: [
      { title: "Electrician", desc: "Workshops, industries" },
      { title: "Mechanic", desc: "Automobile companies" },
    ],
    entrepreneurship: [
      { title: "Repair Shops", desc: "Electronics, mechanics" },
      { title: "Workshops", desc: "Local small industries" },
    ],
    higherStudies: [
      { title: "Diploma to Degree", desc: "Lateral entry in B.Tech" },
    ],
  },
  "Computer Science (B.Tech/BE)": {
    level: "12th/Undergraduate",
    govtExams: [
      { title: "GATE", desc: "For PSU jobs and M.Tech" },
      { title: "ISRO/DRDO", desc: "Research organizations" },
    ],
    privateJobs: [
      { title: "Software Developer", desc: "IT companies" },
      { title: "Data Analyst", desc: "Analytics roles" },
    ],
    entrepreneurship: [
      { title: "Startup", desc: "Tech startups" },
      { title: "Freelancing", desc: "App/web development" },
    ],
    higherStudies: [
      { title: "M.Tech", desc: "Specialization in CS" },
      { title: "MBA", desc: "Management career" },
    ],
  },
  "Mechanical Engineering (B.Tech/BE)": {
    level: "12th/Undergraduate",
    govtExams: [
      { title: "GATE", desc: "For PSU jobs and M.Tech" },
      { title: "IES", desc: "Engineering Services Exam" },
    ],
    privateJobs: [
      { title: "Design Engineer", desc: "Automobile, manufacturing" },
      { title: "Production Engineer", desc: "Factories, plants" },
    ],
    entrepreneurship: [
      { title: "Workshops", desc: "Automobile, machining" },
      { title: "Manufacturing", desc: "Small scale industries" },
    ],
    higherStudies: [
      { title: "M.Tech", desc: "Mechanical specialization" },
      { title: "MBA", desc: "Operations, management" },
    ],
  },
  "Medical (MBBS/BDS/BAMS)": {
    level: "12th/Undergraduate",
    govtExams: [
      { title: "NEET PG", desc: "Postgraduate medical entrance" },
      { title: "AIIMS", desc: "Hospital recruitments" },
    ],
    privateJobs: [
      { title: "Doctor", desc: "Hospitals, clinics" },
      { title: "Dentist", desc: "Dental hospitals" },
    ],
    entrepreneurship: [
      { title: "Private Clinic", desc: "Own hospital or practice" },
      { title: "Pharmacy", desc: "Medical stores" },
    ],
    higherStudies: [
      { title: "MD/MS", desc: "Medical specialization" },
      { title: "Research", desc: "Pharma, biology" },
    ],
  },

  // -------------------------
  // Graduate / Postgraduate
  // -------------------------
  "Business (BBA/MBA)": {
    level: "Graduate/Postgraduate",
    govtExams: [
      { title: "UPSC", desc: "Civil services" },
      { title: "Banking", desc: "PO, Clerk" },
    ],
    privateJobs: [
      { title: "Manager", desc: "Business firms" },
      { title: "HR", desc: "Recruitment, management" },
    ],
    entrepreneurship: [
      { title: "Startup", desc: "Own business" },
      { title: "Consultancy", desc: "Management consulting" },
    ],
    higherStudies: [
      { title: "MBA", desc: "Specializations in finance, HR, marketing" },
      { title: "PhD", desc: "Doctorate in business" },
    ],
  },
  "Commerce (B.Com/M.Com)": {
    level: "Graduate/Postgraduate",
    govtExams: [
      { title: "SSC CGL", desc: "Government finance roles" },
      { title: "Bank PO", desc: "Banking sector jobs" },
    ],
    privateJobs: [
      { title: "Accountant", desc: "Finance and audit firms" },
      { title: "Tax Consultant", desc: "Private tax consultancy" },
    ],
    entrepreneurship: [
      { title: "CA Firm", desc: "Independent practice" },
      { title: "Tax Services", desc: "Consulting business" },
    ],
    higherStudies: [
      { title: "M.Com", desc: "Commerce specialization" },
      { title: "CA/CS", desc: "Professional certifications" },
    ],
  },
  "Science (B.Sc/M.Sc/PhD)": {
    level: "Graduate/Postgraduate",
    govtExams: [
      { title: "CSIR NET", desc: "Research fellowships" },
      { title: "GATE", desc: "Research and PSU jobs" },
    ],
    privateJobs: [
      { title: "Researcher", desc: "Private labs, pharma" },
      { title: "Data Scientist", desc: "Tech companies" },
    ],
    entrepreneurship: [
      { title: "Science Labs", desc: "Independent research labs" },
      { title: "EdTech", desc: "Science teaching platforms" },
    ],
    higherStudies: [
      { title: "M.Sc", desc: "Postgraduate science degrees" },
      { title: "PhD", desc: "Doctorate in sciences" },
    ],
  },
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [compareMode, setCompareMode] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [educationLevel, setEducationLevel] = useState("all");

  const courses = Object.keys(courseData);

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel =
      educationLevel === "all" || courseData[course].level === educationLevel;
    return matchesSearch && matchesLevel;
  });

  const handleCourseSelect = (course) => {
    if (compareMode) {
      if (selectedCourses.includes(course)) {
        setSelectedCourses(selectedCourses.filter((c) => c !== course));
      } else if (selectedCourses.length < 2) {
        setSelectedCourses([...selectedCourses, course]);
      }
    } else {
      setSelectedCourses([course]);
    }
  };

  const toggleCompareMode = () => {
    setCompareMode(!compareMode);
    if (!compareMode) {
      setSelectedCourses([]);
    }
  };

  const renderCareerPath = (courseName) => {
    const data = courseData[courseName];
    if (!data) return null;

    const categories = [
      { key: "govtExams", title: "Government Exams", icon: "🏛️", class: "govt-exams", data: data.govtExams },
      { key: "privateJobs", title: "Private Jobs", icon: "💼", class: "private-jobs", data: data.privateJobs },
      { key: "entrepreneurship", title: "Entrepreneurship", icon: "🚀", class: "entrepreneurship", data: data.entrepreneurship },
      { key: "higherStudies", title: "Higher Studies", icon: "🎓", class: "higher-studies", data: data.higherStudies },
    ];

    const filteredCategories =
      activeFilter === "all"
        ? categories
        : categories.filter((cat) => cat.key === activeFilter);

    return (
      <div className="career-path" key={courseName}>
        <div className="path-header">
          <h2>{courseName}</h2>
          <div className="course-level">{data.level}</div>
          <p>Career opportunities and pathways</p>
        </div>
        {filteredCategories.map((category) => (
          <div key={category.key} className="path-category">
            <div className="category-title">
              <div className={`category-icon ${category.class}`}>{category.icon}</div>
              {category.title}
            </div>
            <div className="options-list">
              {category.data.map((option, index) => (
                <div key={index} className="option-item">
                  <div className="option-title">{option.title}</div>
                  <div className="option-desc">{option.desc}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Career Path Explorer</h1>
        <p>Discover career paths for every education level</p>
      </div>

      <div className="search-section">
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Search for courses or career paths..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="search-icon">🔍</div>
        </div>

        <div className="education-filters">
          <button className={educationLevel === "all" ? "active" : ""} onClick={() => setEducationLevel("all")}>All Levels</button>
          <button className={educationLevel === "10th Standard" ? "active" : ""} onClick={() => setEducationLevel("10th Standard")}>10th Standard</button>
          <button className={educationLevel === "12th/Undergraduate" ? "active" : ""} onClick={() => setEducationLevel("12th/Undergraduate")}>12th/Undergraduate</button>
          <button className={educationLevel === "Graduate/Postgraduate" ? "active" : ""} onClick={() => setEducationLevel("Graduate/Postgraduate")}>Graduate/Postgraduate</button>
        </div>

        <div className="course-grid">
          {filteredCourses.map((course) => (
            <div
              key={course}
              className={`course-card ${selectedCourses.includes(course) ? "selected" : ""}`}
              onClick={() => handleCourseSelect(course)}
            >
              <div className="course-level">{courseData[course].level}</div>
              <div className="course-title">{course}</div>
            </div>
          ))}
        </div>

        <div className="filters-row">
          <div className="filters">
            <button className={activeFilter === "all" ? "active" : ""} onClick={() => setActiveFilter("all")}>All Paths</button>
            <button className={activeFilter === "govtExams" ? "active" : ""} onClick={() => setActiveFilter("govtExams")}>Government</button>
            <button className={activeFilter === "privateJobs" ? "active" : ""} onClick={() => setActiveFilter("privateJobs")}>Private Jobs</button>
            <button className={activeFilter === "entrepreneurship" ? "active" : ""} onClick={() => setActiveFilter("entrepreneurship")}>Business</button>
            <button className={activeFilter === "higherStudies" ? "active" : ""} onClick={() => setActiveFilter("higherStudies")}>Studies</button>
          </div>
          <button className="compare-toggle" onClick={toggleCompareMode}>
            {compareMode ? "Exit Compare" : "Compare Courses"}
          </button>
        </div>

        {compareMode && (
          <div className="compare-info">
            <p>Compare Mode Active</p>
            <p>Select up to 2 courses to compare side by side. Selected: {selectedCourses.join(", ") || "None"}</p>
          </div>
        )}
      </div>

      {selectedCourses.length > 0 && (
        <div className={compareMode && selectedCourses.length === 2 ? "comparison-section" : ""}>
          {selectedCourses.map((course) => renderCareerPath(course))}
        </div>
      )}

      {selectedCourses.length === 0 && (
        <div className="empty-state">
          <div className="icon">🎯</div>
          <h3>Select a course to explore career paths</h3>
          <p>Choose from the courses above to see detailed opportunities</p>
        </div>
      )}
    </div>
  );
}

export default App;
