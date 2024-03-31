// Url : 192.168.0.2:8080


// Auth: 
// Admin login(POST) : /api/v1/auth/admin-login   => send body data email and password
// Email: admin@velocita.com
// Password: V%BMGv5Lq*Am;$-
// Career : 
// Create job(POST) : /api/v1/career =>  
// Sample send data by body
// {
//     "job_code": "JOB-007",
//     "job_title": "Software Engineer",
//     "department": "Engineering",
//     "experience": "3+ years",
//     "job_summary": "<ul><li>Home</li></ul>",
//     "requirements": "<ul><li>Home</li></ul>",
//     "additional_requirements": "<ul><li>Home</li></ul>",
//     "responsibilities": "<ul><li>Home</li></ul>",
//     "compensation_benefits": "<ul><li>Home</li></ul>",
//     "date_posted": "2024-03-01T10:00:00",
//     "application_deadline": "2024-04-01T18:00:00",
//     "email": "jobs@example.com",
//     "phone_number": "123-456-7890",
//     "location": "New York",
//     "visible" : "false"
//   }

// Get all job(GET): /api/v1/career/get-all

// Get single job(GET): /api/v1/career/get-single/:job_code 

// Candidate job submission(POST) :  /api/v1/career/candidate-job-submission
// {
//   "full_name": "John Doe",
//   "job_code" : "JOB-006",
//   "email": "johndoe@example.com",
//   "phone_number": "123-456-7890",
//   "resume_pdf_link": "https://example.com/resume.pdf",
//   "portfolio_link": "https://example.com/portfolio",
//   "years_of_experience": "5",
//   "candidate_opinions": "Positive",
//   "cover_letter": "This is my cover letter."
// }

// Update career (PUT) : 
// /api/v1/update-single/:job_code
// {
//   "job_code": "job-6",
//   "job_title": "Web Developer",
//   "department": "Software Development",
//   "experience": "2 Year",
//   "job_summary": "<ul><li>Job Summary</li></ul>",
//   "requirements": "<ul><li>Requirements</li></ul>",
//   "additional_requirements": "<ul><li>Additional Requirements</li></ul>",
//   "responsibilities": "<ul><li>Responsibilities</li></ul>",
//   "compensation_benefits": "<ul><li>Compensation Benefits</li></ul>",
//   "date_posted": "04-03-2024",
//   "application_deadline": "31-03-2024",
//   "email": "admin@velocita.com",
//   "phone_number": "01719222886",
//   "location": "Dhaka",
//   "visible": "true"
// }
// Get all submission (GET):
// /api/v1/get-submission-by-candidate?job_code=”job-14” 
// Or 
// /api/v1/get-submission-by-candidate
