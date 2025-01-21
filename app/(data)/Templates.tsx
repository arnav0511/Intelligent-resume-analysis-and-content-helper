export default [
    {
      name: 'Title',
      desc: 'An AI tool that helps to build & optimize your professional journey using generative AI',
      category: 'tool',
      aiPrompt: 'Generate a professional LinkedIn post caption based on the following user input. Whether the input is informal or formal, extract important information like skills, roles, or goals, and reformat it into a concise and engaging LinkedIn caption with a professional tone. Generate the caption with a clean, polished style, suitable for a LinkedIn post.',
      slug: 'generate-blog-title',
      form: [
        {
          label: 'Your Input',
          type: 'textarea',
          name: 'userInput',
          placeholder: 'Enter your informal or formal description (e.g., skills, goals, achievements, roles, etc.)',
          required: true,
        },
        {
          label: 'Desired Tone',
          type: 'select',
          name: 'tone',
          options: ['Professional', 'Casual', 'Inspirational'],
          required: true,
        },
      ],
    },
    {
      name: 'Resume Optimization (ATS Standards)',
      desc: 'Upload your resume and specify the job role you are targeting to receive actionable optimization tips based on ATS standards.',
      category: 'resume-tool',
      aiPrompt: 'Analyze the uploaded resume file based on ATS standards for the specified job role. Provide detailed optimization tips to improve the resume format, keywords, and overall structure to increase ATS compatibility and relevance to the target job.',
      slug: 'resume-optimization-ats',
      form: [
        {
          label: 'Upload Resume',
          type: 'file',
          name: 'resumeFile',
          acceptedFormats: ['pdf', 'doc', 'docx'],
          required: true,
        },
        {
          label: 'Desired Job Role',
          type: 'text',
          name: 'jobRole',
          placeholder: 'Enter the job role you are targeting (e.g., Software Engineer, Data Analyst)',
          required: true,
        },
      ],
    },
    {
      name: 'LinkedIn Profile Optimization',
      desc: 'Upload your LinkedIn profile document (PDF, DOC, or DOCX) to receive actionable tips to optimize it for better professional presence.',
      category: 'linkedin-tool',
      aiPrompt: 'Analyze the uploaded LinkedIn profile document. Provide detailed optimization tips to enhance profile visibility, keyword relevance, and professional appeal.',
      slug: 'linkedin-profile-optimization',
      form: [
        {
          label: 'Upload LinkedIn Profile',
          type: 'file',
          name: 'linkedinFile',
          acceptedFormats: ['pdf', 'doc', 'docx'],
          required: true,
        },
      ],
    },
  ];
  