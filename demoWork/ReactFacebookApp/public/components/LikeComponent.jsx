
import IconButton from 'material-ui/IconButton';
import Badge from 'material-ui/Badge';
import React from 'react';
import ReactDOM from 'react-dom';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
var LikeComponent=React.createClass({
	getInitialState:function(){
		// console.log("initial State count"+this.props.likeGet.length);
		//console.log("like compo" + this.props.likeCount);
		//console.log(this.props.likeCount);
		return{liked:false,likeCounts:this.props.likeCount};
		 // console.log("like After"+ this.state.likeCounts );
	},
	likeClicked:function(){
			if(this.state.liked==true){
				this.setState({likeCounts:this.state.likeCounts-1,
					liked:!this.state.liked });
			}
			else{
				this.setState({likeCounts:this.state.likeCounts+1,
					liked:!this.state.liked });
			}
	},
	render:function(){
		var likedStyle={ backgroundColor:'blue'};
 		// console.log("render " +this.props.likeGet.length);
		if(this.state.liked==true){
		return(
			<Badge badgeContent={this.state.likeCounts}
			secondary={true}>
			<IconButton  
			onClick={this.likeClicked}>
			<img src="image/ic_thumb_up_black_24dp_1x.png" style={likedStyle}/>
			  	
		       	</IconButton>
		       	</Badge>
		        	

			);
		}
		else{
			return(
			<Badge badgeContent={this.state.likeCounts}
			// badgeStyle={{top: 20, right: 0}}
			// style={{top:20, right:0}}
			secondary="true" >
			<IconButton 
			onClick={this.likeClicked}>
			<img src="image/ic_thumb_up_black_24dp_1x.png" />
			  	 
			     	</IconButton>
		     </Badge>
			);
		}
	
}
});

module.exports=LikeComponent;