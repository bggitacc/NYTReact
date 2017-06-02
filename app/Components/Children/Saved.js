// Include React 
var React = require('react');

// This is the saved component. It will be used to show a log of saved articles.
var Saved = React.createClass({

	getInitialState: function(){
		return {
			savedArticles: []
		}
	},

	clickToDelete: function(result){
		this.props.deleteArticle(result);

	},

	componentWillReceiveProps: function(nextProps){
		var that = this;
		console.log(nextProps);
		var myResults = nextProps.savedArticles.map(function(search, i){
			var boundClick = that.clickToDelete.bind(that, search);
			return <div className="list-group-item" key={i}><a href={search.url} target="_blank" style={{color: "#666", fontSize: "18px"}}>{search.title}</a><br /><span style={{color: "#888"}}>{search.date}</span><br /><button type="button" className="btn btn-primary" style={{'float': 'right', 'marginTop': '-39px','color': '#000'}} onClick={boundClick}>Delete</button></div>
		});

		this.setState({savedArticles: myResults});
	},

	// Here we render the function
	render: function(){

				var style = {background: "#000"}
				var textStyle = {color: "#fff"}

		return(

				

			<div className="panel panel-warning">
				<div className="panel-heading" style={style}>
					<h3 className="panel-title text-center"><strong style={textStyle}>Saved Articles</strong></h3>
				</div>
				<div className="panel-body">

					{/* Here we use a map function to loop through an array in JSX*/}
					{this.state.savedArticles}
				</div>
			</div>

		)
	}
});



// Export the component back for use in other files
module.exports = Saved;