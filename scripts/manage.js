function confirmDeleteForm(id){
    if (confirm("Delete form permanently? This action cannot be undone.")) {
        window.location.replace('/delete/' + id);
    }
  }