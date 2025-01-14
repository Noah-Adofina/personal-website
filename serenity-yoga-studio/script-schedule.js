document.getElementById('instructor-filter').addEventListener('change', function () {
    const selectedInstructor = this.value; // Get the selected value
    const classTimes = document.querySelectorAll('.class-time')

    classTimes.forEach(time => {
      if (selectedInstructor === 'all' || time.dataset.instructor === selectedInstructor) {
        time.style.display = 'block'; // Show matching classes
      } else {
        time.style.display = 'none'; // Hide non-matching classes
      }
    });
  });
  