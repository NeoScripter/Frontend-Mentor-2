let selectedScore = null;

document.querySelectorAll('#evaluation-page button').forEach(button => {
  button.addEventListener('click', function() {
    document.querySelectorAll('#evaluation-page button').forEach(b => {
      b.style.backgroundColor = '';
    });
    
    selectedScore = this.getAttribute('data-score');
    this.style.backgroundColor = 'hsl(25, 97%, 53%)';
  });
});

document.querySelector('.submit').addEventListener('click', function() {
  if (selectedScore !== null) {
    document.getElementById('chosen-score').textContent = selectedScore;
    
    document.getElementById('evaluation-page').style.display = 'none';
    document.getElementById('result-page').style.display = 'grid';
    
    setTimeout(() => {
      document.getElementById('result-page').style.display = 'none';
      document.getElementById('evaluation-page').style.display = 'grid';
      
      document.querySelectorAll('#evaluation-page button').forEach(b => {
        b.style.backgroundColor = ''; 
      });
      selectedScore = null; 
    }, 3000);
  }
});

