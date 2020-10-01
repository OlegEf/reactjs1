import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const  SearchPanel=()=>{
	   const  searchText = 'Type here to search';
	   const  searchStyle = {fontsize:'45'};
	return <input 
		   	   	style={searchStyle}
		   	   	placeholder={searchText} />;
} ;


export defoult SearchPanel;