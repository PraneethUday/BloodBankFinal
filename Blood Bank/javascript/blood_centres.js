document.getElementById("button").addEventListener("click",function(){
    var searchWord = document.getElementById('box').value.toLowerCase();
        
        
        var table = document.getElementById('dataTable');
        var rows = table.getElementsByTagName('tr');
        
        
        for (var i = 0; i < rows.length; i++) {
            rows[i].classList.remove('highlight');
        }

        
        for (var i = 1; i < rows.length; i++) { 
            var cells = rows[i].getElementsByTagName('td');
            for (var j = 0; j < cells.length; j++) {
                if (cells[j].innerText.toLowerCase().includes(searchWord)) {
                  
                    rows[i].classList.add('highlight');
                    
                    
                    rows[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
                    
                    return; 
                }
            }
        }

        alert('District not found');
})

