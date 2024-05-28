let list = document.querySelectorAll('select');
let note = document.querySelectorAll('textarea');

let state;
function setState(newState){
  list.textContent = '';
  for (let name of Object.keys(newState.notes)){
    let option = document.createElement('option');
    option.textContent = name;
    if (newState.selected == name){
      option.selected = true;
    }
    list.appendChild(option);
  }
  note.value = newState.notes[newState.selected];

  localStorage.setItem('Notes', JSON.stringify(newState));
  state = newState;
}
setState(JSON.parse(localStorage.getItem("Notes")) ?? {
  notes: {'shopping lists': 'Carrots\nRaisins'},
  selected: 'shopping lists'
});

list.addEventListener('change', () => {
  let {selected} = state;
  setState({
    notes: {...state.notes, [selected]: note.value},
    selected
  })
})

document.querySelector('button')
  .addEventListener('click', () => {
    let name = prompt("Note name:");
    if (name) setState({
      notes: {...state.notes, [name]:""},
      selected: name
    })
  })

// let button = document.getElementById('new');

// button.addEventListener('click', function(){
//   let newParagraph = document.createElement('p');
//   newParagraph.textContent = "Nigeria is the largest country in Africa by population";
//   // document.body.appendChild(newParagraph);
//   console.log(firstButton)
//   firstButton.appendChild(newParagraph);
// })