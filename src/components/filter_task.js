import React from 'react';

const FilterTask = (props) => {

  let searchInput = (event) => {
    let tasks = props.tasks,
         searchString = event.target.value.trim().toLowerCase();
    if (searchString.length > 0) {
       tasks = tasks.filter(function(i) {
         return i.title.toLowerCase().match( searchString );
       });
      props.handleFilter(tasks);
    } else {
      props.handleFilter(props.tasks);
      props.removeFilter();
    }
  }

  return (
    <div class='form-group'>
      <input type='text'
        onChange={ searchInput }
        placeholder='Filter....'
      />
    </div>
  );

}

export default FilterTask;