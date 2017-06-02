// Include React 
var React = require('react');

// Component creation
var Results = React.createClass({

	getInitialState: function(){
		return {
			title: "",
			date: "",
			url: "",
			results: []
		}
	},

	// When a user clicks save article
	clickToSave: function(result){

		this.props.saveArticle(result.headline.main, result.pub_date, result.web_url);

	},

	componentWillReceiveProps: function(nextProps){
		var that = this;
		var myResults = nextProps.results.map(function(search, i){
			var boundClick = that.clickToSave.bind(that, search);
			return <div className="list-group-item" key={i}><a href={search.web_url} target="_blank" style={{color: "#666", fontSize: "18px"}}>{search.headline.main}</a><br /><span style={{color: "#888"}}>{search.pub_date}</span><br /><button type="button" className="btn btn-primary" style={{'float': 'right', 'marginTop': '-39px','color': '#000'}} onClick={boundClick}>Save</button></div>
		});

		this.setState({results: myResults});
	},
	
	// Here we render the function
	render: function(){

				var style = {background: "#000"};
				var textStyle = {color: "#fff"};

		return( 

				

			<div className="panel panel-warning">
				<div className="panel-heading" style = {style}>
					<h3 className="panel-title text-center"><strong style = {textStyle}>Results</strong></h3>
				</div>
				<div className="panel-body">
						{this.state.results}
				</div>
			</div>

		)
	}
});

// Export the component back for use in other files
module.exports = Results;