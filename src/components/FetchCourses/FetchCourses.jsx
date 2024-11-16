const fetchCourses = async () => {
  try {
    const response = await fetch('/Course.json');
    if (!response.ok) {
      throw new Error('Failed to fetch courses');
    }
    const data = await response.json();
    console.log(data);  // Should log the data
    setCourses(data);
  } catch (error) {
    console.error('Error fetching courses:', error);
  }
};
