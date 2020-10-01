import React from 'react';
import ReactDOM from 'react-dom';


 



const  App=()=>{
	   const  value =  `<script>alert("")</script>`;
	   const  isLoggedIn =  false;
	   const  loginBox = <span>Log in please</span>;
	   const  welcomeBox = <span>Welcome Back</span>;

	return (
	   <div>
		   {isLoggedIn ? welcomeBox : loginBox }
			{value}
	   	   <AppHeader/>
	   	   <SearchPanel/>
	   	   <TodoList items={['Item 1', 'Item 2']} ; />
	   </div>
	   );
} ;

ReactDOM.render(<App/>,
document.getElementById('root'));




// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';