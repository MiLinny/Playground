for (const child of list.children) {
  child.addEventListener('mouseover', (e) => {
     e.target.style.visibility = 'hidden';
  });
}